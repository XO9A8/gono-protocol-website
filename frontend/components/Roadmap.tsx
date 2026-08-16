import { CheckCircle2, RefreshCw, Calendar, ClipboardList, Sparkles, Circle, Target, MapPin, ArrowRight } from "lucide-react";

export default function Roadmap() {
    const phases = [
        {
            number: 1,
            title: "Research & Ideation",
            period: "Q3-Q4 2025",
            status: "completed",
            progress: 100,
            description: "Gather optimal blockchain provenance solutions"
        },
        {
            number: 2,
            title: "Concept Development",
            period: "Q4 2025 - Q1 2026",
            status: "current",
            progress: 90,
            description: "Draft technical whitepaper, design protocol architecture, and create initial branding."
        },
        {
            number: 3,
            title: "Technical Foundation",
            period: "Q1-Q2 2026",
            status: "upcoming",
            progress: 0,
            description: "Finalize whitepaper and build prototype."
        },
        {
            number: 4,
            title: "Development",
            period: "Q2-Q3 2026",
            status: "planned",
            progress: 0,
            description: "Build core protocol components and deploy to testnet."
        },
        {
            number: 5,
            title: "Testing & Partnerships",
            period: "Q4 2026 - Q1 2027",
            status: "planned",
            progress: 0,
            description: "Run internal testing, recruit pilot users, and build initial partnerships."
        },
        {
            number: 6,
            title: "Alpha Launch",
            period: "Q4 2026",
            status: "planned",
            progress: 0,
            description: "Public testnet launch and open to developers with security audits."
        },
        {
            number: 7,
            title: "Mainnet & Beyond",
            period: "2027+",
            status: "vision",
            progress: 0,
            description: "Mainnet launch, parachain slot acquisition, and global ecosystem growth."
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed': return <CheckCircle2 className="w-5 h-5" />;
            case 'current': return <RefreshCw className="w-5 h-5" />;
            case 'upcoming': return <Calendar className="w-5 h-5" />;
            case 'planned': return <ClipboardList className="w-5 h-5" />;
            case 'vision': return <Sparkles className="w-5 h-5" />;
            default: return <Circle className="w-5 h-5" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'from-emerald-500 to-green-600';
            case 'current': return 'from-red-500 to-red-600';
            case 'upcoming': return 'from-indigo-500 to-purple-600';
            case 'planned': return 'from-cyan-500 to-blue-600';
            case 'vision': return 'from-violet-500 to-purple-600';
            default: return 'from-zinc-500 to-gray-600';
        }
    };

    return (
        <section className="py-16 sm:py-24 relative overflow-hidden bg-[#111111]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none"></div>

            <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16 sm:mb-20">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-red-500 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
                        Trajectory
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-red-200 via-red-200 to-red-200 bg-clip-text text-transparent">Strategic Roadmap</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Our journey from concept to global ecosystem.
                    </p>
                </div>

                {/* Central Spine Container */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/20 via-red-500/20 to-violet-500/20 md:-ml-[1px]"></div>

                    <div className="space-y-12 sm:space-y-20">
                        {/* Current Status - Prominent */}
                        <div className="relative md:flex md:justify-center z-10">
                            <div className="md:w-1/2 md:px-12 flex justify-start md:justify-end">
                                {/* Spacer for alignment if needed, or put Current Status in the flow. 
                                    Design choice: Put 'Current Status' as a centralized header card or the first item? 
                                    Let's put it as a special item in the flow or above. 
                                    User asked for "You Are Here" prominent centered card. Let's make it a wide centered banner intersecting the line.
                                */}
                            </div>
                        </div>

                        {/* Special 'You Are Here' Banner inserted into the timeline flow relative to Phase 2 */}

                        {phases.map((phase, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={phase.number} className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#111111] border-2 border-zinc-700 md:-ml-2 z-20 mt-6 sm:mt-8 flex items-center justify-center">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)}`}></div>
                                    </div>

                                    {/* Content Spacer */}
                                    <div className="w-full md:w-1/2 hidden md:block"></div>

                                    {/* Card */}
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                                        <div className={`group relative p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#1a1a1a]/50 backdrop-blur-sm transition-all hover:border-white/[0.15] hover:-translate-y-1 ${phase.status === 'current' ? 'ring-1 ring-red-500/30 bg-red-950/10' : ''}`}>

                                            {/* Phase Number Watermark */}
                                            <div className="absolute top-4 right-4 text-6xl font-black text-white/[0.02] select-none pointer-events-none">
                                                {phase.number.toString().padStart(2, '0')}
                                            </div>

                                            <div className="relative">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className={`p-2 rounded-lg bg-white/5 text-white`}>
                                                        {getStatusIcon(phase.status)}
                                                    </span>
                                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border border-white/10 ${phase.status === 'current' ? 'text-red-400 bg-red-400/10' : 'text-zinc-500'}`}>
                                                        {phase.status.toUpperCase()}
                                                    </span>
                                                </div>

                                                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{phase.description}</p>

                                                <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                                                    <Calendar className="w-3 h-3" />
                                                    {phase.period}
                                                </div>

                                                {phase.status === 'current' && (
                                                    <div className="mt-4 pt-4 border-t border-white/5">
                                                        <div className="flex items-center justify-between text-xs mb-2">
                                                            <span className="text-red-400 font-medium">Progress</span>
                                                            <span className="text-white">{phase.progress}%</span>
                                                        </div>
                                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                            <div className="h-full bg-gradient-to-r from-red-500 to-red-500" style={{ width: `${phase.progress}%` }}></div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-2 mt-3">
                                                            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                                                                <Target className="w-3 h-3 text-red-500" />
                                                                Whitepaper
                                                            </div>
                                                            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                                                                <MapPin className="w-3 h-3 text-red-500" />
                                                                Q1 2026
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
