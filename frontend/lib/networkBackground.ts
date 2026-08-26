import * as THREE from "three";

const ACCENT_BLUE = new THREE.Color("#FF6B6B");
const ACCENT_CYAN = new THREE.Color("#FF3E3E");
const ACCENT_VIOLET = new THREE.Color("#361717");
const NODE_COLORS = [ACCENT_CYAN, ACCENT_BLUE, ACCENT_VIOLET];
const MAX_NODE_CONNECTIONS = 4;
const MAX_LINE_SEGMENTS = 260;

type MotionBody = {
  anchor: THREE.Vector3;
  velocity: THREE.Vector3;
  phase: number;
  frequency: number;
  amplitude: number;
  color: THREE.Color;
};

type ViewportState = {
  width: number;
  height: number;
  boundsX: number;
  boundsY: number;
  boundsZ: number;
  linkDistance: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function createGlowTexture() {
  const size = 128;
  const glowCanvas = document.createElement("canvas");
  glowCanvas.width = size;
  glowCanvas.height = size;

  const context = glowCanvas.getContext("2d");

  if (!context) {
    return null;
  }

  const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.26, "rgba(190, 238, 255, 1)");
  gradient.addColorStop(0.58, "rgba(95, 172, 255, 0.42)");
  gradient.addColorStop(1, "rgba(90, 165, 255, 0)");

  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(glowCanvas);
  texture.needsUpdate = true;

  return texture;
}

function getViewportState(width: number, height: number): ViewportState {
  const safeWidth = Math.max(width, 360);
  const safeHeight = Math.max(height, 640);

  return {
    width: safeWidth,
    height: safeHeight,
    boundsX: clamp(safeWidth / 118, 4.8, 8.6),
    boundsY: clamp(safeHeight / 165, 3.3, 6.2),
    boundsZ: safeWidth < 768 ? 2.4 : 3.4,
    linkDistance: safeWidth < 640 ? 2.6 : safeWidth < 1024 ? 3 : 3.3,
  };
}

function getNodeCount(width: number, height: number) {
  const area = width * height;

  if (width < 640) {
    return 52;
  }

  if (area < 950_000) {
    return 68;
  }

  if (area < 1_700_000) {
    return 84;
  }

  return 96;
}

function getParticleCount(nodeCount: number) {
  return Math.max(24, Math.round(nodeCount * 0.6));
}

function randomVelocity(speedMin: number, speedMax: number) {
  const velocity = new THREE.Vector3(
    THREE.MathUtils.randFloatSpread(1),
    THREE.MathUtils.randFloatSpread(1),
    THREE.MathUtils.randFloatSpread(1),
  );

  if (velocity.lengthSq() < 0.0001) {
    velocity.set(1, 0, 0);
  }

  velocity.normalize();

  return velocity.multiplyScalar(THREE.MathUtils.randFloat(speedMin, speedMax));
}

function createBodies(count: number, viewport: ViewportState, speedMin: number, speedMax: number) {
  return Array.from({ length: count }, (_, index) => ({
    anchor: new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(viewport.boundsX * 2),
      THREE.MathUtils.randFloatSpread(viewport.boundsY * 2),
      THREE.MathUtils.randFloatSpread(viewport.boundsZ * 2),
    ),
    velocity: randomVelocity(speedMin, speedMax),
    phase: Math.random() * Math.PI * 2,
    frequency: THREE.MathUtils.randFloat(0.45, 0.9),
    amplitude: THREE.MathUtils.randFloat(0.04, 0.12),
    color: NODE_COLORS[index % NODE_COLORS.length].clone(),
  }));
}

function clampBody(body: MotionBody, viewport: ViewportState) {
  if (Math.abs(body.anchor.x) > viewport.boundsX) {
    body.anchor.x = clamp(body.anchor.x, -viewport.boundsX, viewport.boundsX);
    body.velocity.x *= -1;
  }

  if (Math.abs(body.anchor.y) > viewport.boundsY) {
    body.anchor.y = clamp(body.anchor.y, -viewport.boundsY, viewport.boundsY);
    body.velocity.y *= -1;
  }

  if (Math.abs(body.anchor.z) > viewport.boundsZ) {
    body.anchor.z = clamp(body.anchor.z, -viewport.boundsZ, viewport.boundsZ);
    body.velocity.z *= -1;
  }
}

function updateBodies(
  bodies: MotionBody[],
  positions: Float32Array,
  delta: number,
  elapsed: number,
  viewport: ViewportState,
) {
  for (let index = 0; index < bodies.length; index += 1) {
    const body = bodies[index];

    body.anchor.addScaledVector(body.velocity, delta);
    clampBody(body, viewport);

    const wave = Math.sin(elapsed * body.frequency + body.phase) * body.amplitude;
    const lift = Math.cos(elapsed * body.frequency * 0.8 + body.phase) * body.amplitude * 0.7;
    const depth = Math.sin(elapsed * body.frequency * 0.52 + body.phase) * body.amplitude * 0.5;
    const writeIndex = index * 3;

    positions[writeIndex] = body.anchor.x + wave * 0.75;
    positions[writeIndex + 1] = body.anchor.y + lift;
    positions[writeIndex + 2] = body.anchor.z + depth;
  }
}

function fillNodeColors(colors: Float32Array, bodies: MotionBody[]) {
  for (let index = 0; index < bodies.length; index += 1) {
    const writeIndex = index * 3;
    const bodyColor = bodies[index].color;

    colors[writeIndex] = bodyColor.r;
    colors[writeIndex + 1] = bodyColor.g;
    colors[writeIndex + 2] = bodyColor.b;
  }
}

export function createNetworkBackground(canvas: HTMLCanvasElement) {
  const viewport = getViewportState(window.innerWidth, window.innerHeight);
  const nodeCount = getNodeCount(viewport.width, viewport.height);
  const particleCount = getParticleCount(nodeCount);
  const glowTexture = createGlowTexture();

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    powerPreference: "high-performance",
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearAlpha(0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, viewport.width / viewport.height, 0.1, 100);
  camera.position.set(0, 0, 17);

  const networkGroup = new THREE.Group();
  const particleGroup = new THREE.Group();
  scene.add(networkGroup);
  scene.add(particleGroup);

  const nodeBodies = createBodies(nodeCount, viewport, 0.12, 0.22);
  const particleBodies = createBodies(particleCount, viewport, 0.03, 0.08);

  const nodePositions = new Float32Array(nodeCount * 3);
  const nodeColors = new Float32Array(nodeCount * 3);
  fillNodeColors(nodeColors, nodeBodies);

  const nodeGeometry = new THREE.BufferGeometry();
  const nodePositionAttribute = new THREE.BufferAttribute(nodePositions, 3);
  nodePositionAttribute.setUsage(THREE.DynamicDrawUsage);
  nodeGeometry.setAttribute("position", nodePositionAttribute);
  nodeGeometry.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));

  const nodeMaterial = new THREE.PointsMaterial({
    size: 0.35,
    map: glowTexture ?? undefined,
    transparent: true,
    opacity: 0.98,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
  nodes.frustumCulled = false;
  networkGroup.add(nodes);

  const linePositions = new Float32Array(MAX_LINE_SEGMENTS * 2 * 3);
  const lineColors = new Float32Array(MAX_LINE_SEGMENTS * 2 * 3);
  const connectionCounts = new Uint8Array(nodeCount);
  const lineGeometry = new THREE.BufferGeometry();
  const linePositionAttribute = new THREE.BufferAttribute(linePositions, 3);
  const lineColorAttribute = new THREE.BufferAttribute(lineColors, 3);
  linePositionAttribute.setUsage(THREE.DynamicDrawUsage);
  lineColorAttribute.setUsage(THREE.DynamicDrawUsage);
  lineGeometry.setAttribute("position", linePositionAttribute);
  lineGeometry.setAttribute("color", lineColorAttribute);
  lineGeometry.setDrawRange(0, 0);

  const lineMaterial = new THREE.LineBasicMaterial({
    transparent: true,
    opacity: 0.85,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  lines.frustumCulled = false;
  networkGroup.add(lines);

  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);
  fillNodeColors(particleColors, particleBodies);

  const particleGeometry = new THREE.BufferGeometry();
  const particlePositionAttribute = new THREE.BufferAttribute(particlePositions, 3);
  particlePositionAttribute.setUsage(THREE.DynamicDrawUsage);
  particleGeometry.setAttribute("position", particlePositionAttribute);
  particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

  const particleMaterial = new THREE.PointsMaterial({
    size: 0.1,
    map: glowTexture ?? undefined,
    transparent: true,
    opacity: 0.7,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  particles.frustumCulled = false;
  particleGroup.add(particles);

  const pointerTarget = new THREE.Vector2();
  const pointerCurrent = new THREE.Vector2();
  const blendColor = new THREE.Color();
  let activeViewport = viewport;
  let frameId = 0;
  let previousTime = performance.now();

  const resize = () => {
    activeViewport = getViewportState(window.innerWidth, window.innerHeight);
    camera.aspect = activeViewport.width / activeViewport.height;
    camera.updateProjectionMatrix();
    renderer.setSize(activeViewport.width, activeViewport.height, false);

    for (const body of [...nodeBodies, ...particleBodies]) {
      body.anchor.x = clamp(body.anchor.x, -activeViewport.boundsX, activeViewport.boundsX);
      body.anchor.y = clamp(body.anchor.y, -activeViewport.boundsY, activeViewport.boundsY);
      body.anchor.z = clamp(body.anchor.z, -activeViewport.boundsZ, activeViewport.boundsZ);
    }
  };

  const onPointerMove = (event: PointerEvent) => {
    pointerTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointerTarget.y = -((event.clientY / window.innerHeight) * 2 - 1);
  };

  const resetPointer = () => {
    pointerTarget.set(0, 0);
  };

  const updateConnections = () => {
    connectionCounts.fill(0);

    let lineIndex = 0;
    const linkDistanceSquared = activeViewport.linkDistance * activeViewport.linkDistance;

    for (let source = 0; source < nodeCount; source += 1) {
      if (connectionCounts[source] >= MAX_NODE_CONNECTIONS) {
        continue;
      }

      const sourceOffset = source * 3;
      const sourceX = nodePositions[sourceOffset];
      const sourceY = nodePositions[sourceOffset + 1];
      const sourceZ = nodePositions[sourceOffset + 2];

      for (let target = source + 1; target < nodeCount; target += 1) {
        if (lineIndex >= MAX_LINE_SEGMENTS) {
          break;
        }

        if (
          connectionCounts[source] >= MAX_NODE_CONNECTIONS ||
          connectionCounts[target] >= MAX_NODE_CONNECTIONS
        ) {
          continue;
        }

        const targetOffset = target * 3;
        const dx = sourceX - nodePositions[targetOffset];
        const dy = sourceY - nodePositions[targetOffset + 1];
        const dz = sourceZ - nodePositions[targetOffset + 2];
        const distanceSquared = dx * dx + dy * dy + dz * dz;

        if (distanceSquared > linkDistanceSquared) {
          continue;
        }

        const vertexOffset = lineIndex * 6;
        const mixStrength = 1 - distanceSquared / linkDistanceSquared;
        const brightness = 0.24 + mixStrength * 0.92;

        linePositions[vertexOffset] = sourceX;
        linePositions[vertexOffset + 1] = sourceY;
        linePositions[vertexOffset + 2] = sourceZ;
        linePositions[vertexOffset + 3] = nodePositions[targetOffset];
        linePositions[vertexOffset + 4] = nodePositions[targetOffset + 1];
        linePositions[vertexOffset + 5] = nodePositions[targetOffset + 2];

        blendColor.copy(nodeBodies[source].color).lerp(nodeBodies[target].color, 0.5);
        blendColor.multiplyScalar(brightness);

        lineColors[vertexOffset] = blendColor.r;
        lineColors[vertexOffset + 1] = blendColor.g;
        lineColors[vertexOffset + 2] = blendColor.b;
        lineColors[vertexOffset + 3] = blendColor.r;
        lineColors[vertexOffset + 4] = blendColor.g;
        lineColors[vertexOffset + 5] = blendColor.b;

        connectionCounts[source] += 1;
        connectionCounts[target] += 1;
        lineIndex += 1;
      }
    }

    lineGeometry.setDrawRange(0, lineIndex * 2);
    linePositionAttribute.needsUpdate = true;
    lineColorAttribute.needsUpdate = true;
  };

  const animate = (time: number) => {
    const delta = Math.min((time - previousTime) / 1000, 1 / 30);
    const elapsed = time * 0.001;
    previousTime = time;

    pointerCurrent.lerp(pointerTarget, 0.035);

    networkGroup.position.x = pointerCurrent.x * 0.7;
    networkGroup.position.y = pointerCurrent.y * 0.38;
    networkGroup.rotation.x = -pointerCurrent.y * 0.06;
    networkGroup.rotation.y = pointerCurrent.x * 0.09;
    networkGroup.rotation.z = Math.sin(elapsed * 0.12) * 0.015;

    particleGroup.position.x = pointerCurrent.x * 0.4;
    particleGroup.position.y = pointerCurrent.y * 0.24;

    camera.position.x = pointerCurrent.x * 0.28;
    camera.position.y = pointerCurrent.y * 0.16;
    camera.lookAt(0, 0, 0);

    updateBodies(nodeBodies, nodePositions, delta, elapsed, activeViewport);
    updateBodies(particleBodies, particlePositions, delta, elapsed + 3, activeViewport);

    nodePositionAttribute.needsUpdate = true;
    particlePositionAttribute.needsUpdate = true;
    updateConnections();

    renderer.render(scene, camera);
    frameId = window.requestAnimationFrame(animate);
  };

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerleave", resetPointer);
  window.addEventListener("blur", resetPointer);
  frameId = window.requestAnimationFrame(animate);

  return () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerleave", resetPointer);
    window.removeEventListener("blur", resetPointer);

    nodeGeometry.dispose();
    particleGeometry.dispose();
    lineGeometry.dispose();
    nodeMaterial.dispose();
    particleMaterial.dispose();
    lineMaterial.dispose();
    glowTexture?.dispose();
    renderer.dispose();
  };
}
