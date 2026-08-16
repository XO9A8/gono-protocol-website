import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AcademicCredentialsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-950 to-black">
                <div className="max-w-4xl mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/use-cases"
                        className="inline-flex items-center text-blue-200 hover:text-zinc-300 mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Use Cases
                    </Link>

                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-block px-4 py-2 bg-zinc-800/30 border border-zinc-600/30 rounded-full text-blue-200 text-sm font-medium mb-6 uppercase tracking-wider">
                            Education & Verification
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Academic Credentials & Degree Verification
                        </h1>
                        <p className="text-xl text-gray-300 mb-6">
                            Eliminating diploma fraud and credential verification delays through blockchain-verified educational records and skill certifications
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>Author: Meheraj Alam</span>
                            <span>•</span>
                            <span>January 8, 2026</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-red max-w-none">
                        {/* The Crisis */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-6">The Global Credential Crisis</h2>

                            <div className="bg-gradient-to-r from-red-500/10 to-red-500/10 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                                <p className="text-gray-200 text-lg font-semibold mb-2">The Scale of the Problem</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>1 million+ fake degrees</strong> are sold annually worldwide</li>
                                    <li><strong>$7 billion</strong> diploma mill industry operating globally</li>
                                    <li><strong>3-4 weeks</strong> average time for employers to verify a single degree</li>
                                    <li><strong>68%</strong> of employers have caught applicants lying about degrees</li>
                                    <li><strong>Refugees and displaced students</strong> lose access to their credentials forever</li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-4">Why Traditional Systems Fail</h3>

                            <div className="space-y-4">
                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-zinc-300 font-semibold mb-2">🎓 Paper-Based Certificates</h4>
                                    <p className="text-gray-300">Physical diplomas can be forged, lost, or destroyed. Universities store records in silos, making cross-border verification nearly impossible.</p>
                                </div>

                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-zinc-300 font-semibold mb-2">📞 Manual Verification Nightmare</h4>
                                    <p className="text-gray-300">Employers must contact universities directly, often across borders and time zones. Many institutions charge $25-100 per verification request. Some universities close or lose records entirely.</p>
                                </div>

                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-zinc-300 font-semibold mb-2">🌍 Refugee Education Crisis</h4>
                                    <p className="text-gray-300">Students fleeing war zones (Syria, Afghanistan, Ukraine, Myanmar) lose all proof of education. They cannot continue studies or find skilled employment, wasting years of learning.</p>
                                </div>

                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-zinc-300 font-semibold mb-2">💼 LinkedIn & Resume Fraud</h4>
                                    <p className="text-gray-300">Fake certifications, inflated credentials, and fabricated skills plague professional networks. No way to verify claims without extensive background checks.</p>
                                </div>

                                <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-lg">
                                    <h4 className="text-zinc-300 font-semibold mb-2">🏛️ Diploma Mills Exploit Trust</h4>
                                    <p className="text-gray-300">Fake universities with legitimate-sounding names sell degrees for $500-5,000. Examples: "Belford University," "Trinity Southern University," "Rochville University" — all exposed as frauds.</p>
                                </div>
                            </div>
                        </section>

                        {/* Real-World Impact */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-6">Real-World Consequences</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">🏥 Healthcare Scandal</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        In 2018, Pakistan discovered <strong>over 3,000 doctors</strong> were practicing with fake degrees. Patients died due to unqualified practitioners. Traditional verification failed to catch them for years.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">🏗️ Engineering Disaster</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Bridge collapses and building failures traced to engineers with fraudulent degrees. Lives lost because credentials weren't verifiable at the point of hiring.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-zinc-900/20 to-blue-800/10 border border-zinc-600/30 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">🎓 Refugee Students</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Syrian refugees in Europe cannot prove they were medical students or engineers. Universities bombed, records destroyed. Forced to start education from scratch despite years of study.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-zinc-900/20 to-purple-800/10 border border-zinc-600/30 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">💼 Corporate Fraud</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Yahoo CEO Scott Thompson resigned after lying about his computer science degree. Countless smaller cases go undetected until costly background checks reveal them.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* The Solution */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-6">The Gono Protocol Solution: Verifiable Credential Infrastructure</h2>

                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Gono Protocol creates an <strong>unforgeable, portable, instantly verifiable</strong> system for academic credentials. Students own their education records. Employers verify in seconds. Universities reduce administrative burden. Refugees never lose proof of education.
                            </p>

                            {/* Phase 1: CAPTURE */}
                            <div className="mb-10">
                                <div className="bg-gradient-to-r from-red-500/20 to-red-500/20 border-l-4 border-stone-500 p-6 rounded-r-lg mb-6">
                                    <h3 className="text-2xl font-bold text-zinc-300 mb-3">Phase 1: CAPTURE — Issuing Verifiable Credentials</h3>
                                    <p className="text-gray-300 mb-4">
                                        Universities, training programs, and certification bodies issue blockchain-anchored credentials at the moment of achievement.
                                    </p>
                                </div>

                                <div className="space-y-4 pl-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🎓 Degree Issuance Process</h4>
                                        <p className="text-gray-300 mb-3">When a university confers a degree:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li>Registrar generates digital credential using Gono SDK</li>
                                            <li><strong>C2PA metadata embedded:</strong> University ID, student ID, degree type, major, graduation date, honors</li>
                                            <li><strong>Cryptographic signature:</strong> University's private key signs the credential (ERC-7053 standard)</li>
                                            <li><strong>Immutable storage:</strong> Credential hash anchored on Gono blockchain + Arweave for permanent access</li>
                                            <li><strong>Student receives:</strong> Verifiable Credential NFT in their wallet (self-sovereign identity)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-950/20 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-zinc-300 font-semibold mb-3">Example: University of Dhaka Issues BSc Degree</h4>
                                        <pre className="text-xs text-gray-300 overflow-x-auto">
                                            {`{
  "credentialType": "Bachelor of Science",
  "institution": "University of Dhaka",
  "institutionDID": "did:gono:university-of-dhaka",
  "student": {
    "name": "Nadia Rahman",
    "studentID": "2022-CS-1847",
    "walletAddress": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb5"
  },
  "degree": {
    "major": "Computer Science",
    "minor": "Mathematics",
    "gpa": "3.89 / 4.0",
    "honors": "Magna Cum Laude",
    "graduationDate": "2025-06-15"
  },
  "blockchain": {
    "txHash": "0xab3f9c...",
    "block": 8472193,
    "timestamp": "2025-06-15T14:30:00Z"
  },
  "arweaveID": "Qm7X4k9pR2..."
}`}
                                        </pre>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">📜 Transcript & Course Records</h4>
                                        <p className="text-gray-300 mb-2">Beyond just the degree, detailed academic history is verifiable:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li>Each semester's courses, grades, credits stored as separate verifiable claims</li>
                                            <li>Students can share full transcript or selectively disclose specific courses (zk-SNARKs)</li>
                                            <li>Transfer students carry blockchain-verified credits to new institutions</li>
                                            <li>Professional certifications linked to degree for comprehensive skill proof</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🏆 Skills & Portfolio Verification</h4>
                                        <p className="text-gray-300 mb-2">Not just grades — prove real-world competency:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Capstone projects:</strong> Engineering thesis, design portfolio, research paper with blockchain timestamp</li>
                                            <li><strong>Professor endorsements:</strong> Faculty can cryptographically sign skill attestations</li>
                                            <li><strong>Hackathon wins, scholarships, awards:</strong> All verifiable on-chain</li>
                                            <li><strong>GitHub commits, design work:</strong> Link portfolio to credential for holistic proof</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 2: CERTIFY */}
                            <div className="mb-10">
                                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-l-4 border-stone-500 p-6 rounded-r-lg mb-6">
                                    <h3 className="text-2xl font-bold text-blue-200 mb-3">Phase 2: CERTIFY — Blockchain Registration & Self-Sovereign Identity</h3>
                                    <p className="text-gray-300 mb-4">
                                        Students own their credentials. No central authority can revoke access. Credentials exist forever, accessible anywhere.
                                    </p>
                                </div>

                                <div className="space-y-4 pl-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🔐 Decentralized Identifiers (DIDs)</h4>
                                        <p className="text-gray-300 mb-3">Each student receives a Gono DID (W3C standard):</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Example DID:</strong> <code className="text-zinc-300">did:gono:student:0x742d35Cc...</code></li>
                                            <li>Student controls private keys — no one else can access or revoke credentials</li>
                                            <li>Works across borders, survives university closures, persists through regime changes</li>
                                            <li>All credentials linked to DID: degrees, transcripts, certifications, endorsements</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🌍 Global Credential Registry</h4>
                                        <p className="text-gray-300 mb-3">Gono maintains decentralized registry of accredited institutions:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li>Universities register official signing keys on-chain</li>
                                            <li>Accreditation bodies (e.g., UGC Bangladesh, WASC, AACSB) whitelist legitimate institutions</li>
                                            <li>Diploma mills cannot impersonate real universities (cryptographic impossibility)</li>
                                            <li>If university changes name or merges, historical credentials remain valid</li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-950/20 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-zinc-300 font-semibold mb-3">Refugee Use Case: Syrian Medical Student</h4>
                                        <p className="text-gray-300 text-sm mb-3">
                                            <strong>Scenario:</strong> Ahmed was a 3rd-year medical student at Damascus University when war forced him to flee to Germany. His university was bombed, physical records destroyed.
                                        </p>
                                        <p className="text-gray-300 text-sm mb-3">
                                            <strong>With Traditional System:</strong> Ahmed has no proof of 3 years of medical education. Must start university from scratch in Germany. Loses 3 years + tuition investment.
                                        </p>
                                        <p className="text-gray-300 text-sm">
                                            <strong>With Gono Protocol:</strong> Ahmed's DID contains blockchain-verified records of all completed courses. German university instantly verifies his credits via Gono. Ahmed continues as 3rd-year student. Saves 3 years + €60,000 in tuition.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 3: CHECK */}
                            <div className="mb-10">
                                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-l-4 border-stone-500 p-6 rounded-r-lg mb-6">
                                    <h3 className="text-2xl font-bold text-blue-200 mb-3">Phase 3: CHECK — Instant Employer Verification</h3>
                                    <p className="text-gray-300 mb-4">
                                        Employers verify credentials in seconds, not weeks. No need to contact universities. Zero-knowledge proofs protect privacy while proving qualifications.
                                    </p>
                                </div>

                                <div className="space-y-4 pl-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">⚡ One-Click Verification</h4>
                                        <p className="text-gray-300 mb-3">How employers verify credentials:</p>
                                        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                                            <li>Applicant shares Gono credential QR code or DID link</li>
                                            <li>Employer scans QR or clicks link → opens Gono Verify Engine</li>
                                            <li>Verify Engine checks:
                                                <ul className="ml-8 mt-2 space-y-1 list-disc list-inside">
                                                    <li>Blockchain record matches credential claim ✓</li>
                                                    <li>Issuing university's signature is valid ✓</li>
                                                    <li>University is accredited institution ✓</li>
                                                    <li>Credential has not been revoked ✓</li>
                                                </ul>
                                            </li>
                                            <li><strong>Result in 2 seconds:</strong> "Valid BSc Computer Science from University of Dhaka, graduated June 2025"</li>
                                        </ol>
                                    </div>

                                    <div className="bg-blue-950/20 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-zinc-300 font-semibold mb-3">Verification Dashboard Example</h4>
                                        <div className="space-y-2 text-sm text-gray-300">
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">✓</span>
                                                <span><strong>Credential Valid:</strong> Bachelor of Science in Computer Science</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">✓</span>
                                                <span><strong>Issuer:</strong> University of Dhaka (Accredited by UGC Bangladesh)</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">✓</span>
                                                <span><strong>Student:</strong> Nadia Rahman (DID verified)</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">✓</span>
                                                <span><strong>Graduation Date:</strong> June 15, 2025</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">✓</span>
                                                <span><strong>Blockchain Proof:</strong> Block #8472193 on Gono Protocol</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">✓</span>
                                                <span><strong>GPA:</strong> 3.89 / 4.0 (Magna Cum Laude)</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-200">⚠</span>
                                                <span><strong>Privacy:</strong> Full transcript available with student consent</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🔒 Privacy-Preserving Verification (zk-SNARKs)</h4>
                                        <p className="text-gray-300 mb-3">Students control what information to share:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Selective disclosure:</strong> Prove &quot;GPA &gt; 3.5&quot; without revealing exact 3.89</li>
                                            <li><strong>Date ranges:</strong> Prove &quot;graduated within last 5 years&quot; without exact date</li>
                                            <li><strong>Course verification:</strong> Prove &quot;completed Machine Learning course&quot; without sharing entire transcript</li>
                                            <li><strong>Age gates:</strong> Prove &quot;over 18&quot; for online certifications without revealing birthdate</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🏢 Enterprise Integration</h4>
                                        <p className="text-gray-300 mb-2">Applicant Tracking Systems (ATS) integrate via Gono API:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>LinkedIn, Indeed, Glassdoor:</strong> "Verify with Gono" button on profiles</li>
                                            <li><strong>Corporate HR systems:</strong> Workday, SuccessFactors auto-verify credentials during application</li>
                                            <li><strong>Background check firms:</strong> HireRight, Sterling integrate Gono checks (instant vs 2-week manual process)</li>
                                            <li><strong>Professional licensing boards:</strong> Medical councils, bar associations verify prerequisites</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 4: CONTINUOUS LEARNING */}
                            <div className="mb-10">
                                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-l-4 border-stone-500 p-6 rounded-r-lg mb-6">
                                    <h3 className="text-2xl font-bold text-blue-200 mb-3">Phase 4: CONTINUOUS LEARNING — Micro-Credentials & Lifelong Education</h3>
                                    <p className="text-gray-300 mb-4">
                                        Education doesn't end at graduation. Gono tracks professional certifications, online courses, bootcamps, and skill updates throughout a career.
                                    </p>
                                </div>

                                <div className="space-y-4 pl-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🎯 Micro-Credentials & Badges</h4>
                                        <p className="text-gray-300 mb-3">Online platforms issue verifiable badges for completed courses:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Coursera, edX, Udacity:</strong> Issue Gono-verified certificates for completed courses</li>
                                            <li><strong>AWS, Google Cloud, Azure:</strong> Professional certifications anchored on-chain</li>
                                            <li><strong>Coding bootcamps:</strong> Graduate portfolios + code commits linked to credentials</li>
                                            <li><strong>Language proficiency:</strong> IELTS, TOEFL scores verifiable without sending official transcripts</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">📊 Skill Endorsement Network</h4>
                                        <p className="text-gray-300 mb-3">Unlike LinkedIn's easily-faked endorsements, Gono enables cryptographically signed skill verification:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li><strong>Managers endorse employees:</strong> "Worked with Nadia for 2 years, expert in React.js" (signed by manager's DID)</li>
                                            <li><strong>Clients verify freelancer skills:</strong> "Delivered ML model on time, 5/5 quality" (cryptographic proof)</li>
                                            <li><strong>Open-source contributions:</strong> GitHub commits + code reviews linked to developer DID</li>
                                            <li><strong>Peer reviews:</strong> Colleagues co-sign skill attestations (weighted by their own credibility)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-950/20 border border-gray-700 p-4 rounded-lg">
                                        <h4 className="text-zinc-300 font-semibold mb-3">Example: Full Career Credential Chain</h4>
                                        <div className="space-y-3 text-sm text-gray-300">
                                            <div className="pl-4 border-l-2 border-zinc-600">
                                                <strong className="text-white">2022:</strong> BSc Computer Science, University of Dhaka (GPA 3.89)
                                            </div>
                                            <div className="pl-4 border-l-2 border-zinc-600">
                                                <strong className="text-white">2023:</strong> AWS Solutions Architect Certification (scored 890/1000)
                                            </div>
                                            <div className="pl-4 border-l-2 border-zinc-600">
                                                <strong className="text-white">2023:</strong> React.js Developer Bootcamp, freeCodeCamp (portfolio verified)
                                            </div>
                                            <div className="pl-4 border-l-2 border-zinc-600">
                                                <strong className="text-white">2024:</strong> Skill Endorsement: "Expert React Developer" signed by CTO of TechCorp
                                            </div>
                                            <div className="pl-4 border-l-2 border-pink-500">
                                                <strong className="text-white">2025:</strong> Published 3 papers on blockchain scalability (DOIs linked to DID)
                                            </div>
                                            <div className="pl-4 border-l-2 border-red-500">
                                                <strong className="text-white">2026:</strong> MSc Blockchain Engineering, MIT (in progress, 18/36 credits verified)
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-xs mt-4 italic">
                                            All credentials linked to one DID. Portable across jobs, countries, platforms. Unforgeable. Instantly verifiable.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 5: CREDENTIAL REVOCATION */}
                            <div className="mb-10">
                                <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                                    <h3 className="text-2xl font-bold text-blue-200 mb-3">Phase 5: REVOCATION — Handling Academic Misconduct</h3>
                                    <p className="text-gray-300 mb-4">
                                        What if a degree is revoked due to plagiarism or fraud? Gono supports credential revocation while maintaining transparency.
                                    </p>
                                </div>

                                <div className="space-y-4 pl-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">🚨 Revocation Process</h4>
                                        <p className="text-gray-300 mb-3">Universities can revoke credentials with on-chain proof:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li>University publishes revocation transaction citing reason (plagiarism, fraudulent admission, etc.)</li>
                                            <li>Revocation is timestamped and immutable (can't be hidden)</li>
                                            <li>Student's DID shows credential was revoked + date + reason</li>
                                            <li>Employers checking credential see revocation status immediately</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">⚖️ Dispute Resolution</h4>
                                        <p className="text-gray-300 mb-2">Students can contest wrongful revocations:</p>
                                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                                            <li>Student submits counter-evidence (essays, project code, witness statements)</li>
                                            <li>Decentralized arbitration panel reviews case (professors, industry experts)</li>
                                            <li>Arbitration result published on-chain (reinstated or upheld revocation)</li>
                                            <li>Prevents authoritarian universities from political retaliation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Comparison Table */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-6">Traditional System vs Gono Protocol</h2>

                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-700">
                                    <thead className="bg-gray-800">
                                        <tr>
                                            <th className="border border-gray-700 px-4 py-3 text-left text-zinc-300">Feature</th>
                                            <th className="border border-gray-700 px-4 py-3 text-left text-blue-200">Traditional System</th>
                                            <th className="border border-gray-700 px-4 py-3 text-left text-blue-200">Gono Protocol</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr>
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Verification Time</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">3-4 weeks (manual contact)</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">2 seconds (instant blockchain check)</td>
                                        </tr>
                                        <tr className="bg-gray-800/30">
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Verification Cost</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">$25-100 per credential</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">$0.01 (blockchain gas fee)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Fraud Prevention</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Easy to fake (diploma mills)</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Cryptographically impossible to forge</td>
                                        </tr>
                                        <tr className="bg-gray-800/30">
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Student Control</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">University owns records</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Student owns via DID (self-sovereign)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Refugee Access</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Lost if university destroyed</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Permanent (blockchain + Arweave)</td>
                                        </tr>
                                        <tr className="bg-gray-800/30">
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Privacy</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">All-or-nothing disclosure</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Selective disclosure via zk-SNARKs</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">International Transfer</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Manual evaluation (6+ months)</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Instant cross-border verification</td>
                                        </tr>
                                        <tr className="bg-gray-800/30">
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Lifelong Record</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Fragmented across institutions</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Unified DID tracks entire career</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-700 px-4 py-3 font-semibold text-white">Revocation Transparency</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Hidden, inconsistent</td>
                                            <td className="border border-gray-700 px-4 py-3 text-gray-300">Public, immutable, auditable</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Adoption Roadmap */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-6">Adoption Roadmap</h2>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-zinc-900/20 to-blue-800/10 border-l-4 border-stone-500 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">Phase 1: Pilot Universities (2026 Q1-Q2)</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Partner with 5-10 universities in Bangladesh (Dhaka, BUET, NSU, IUB)</li>
                                        <li>• Issue Gono credentials to graduating class of 2026</li>
                                        <li>• Integrate with university registrar systems (Banner, PeopleSoft)</li>
                                        <li>• Train registrars on credential issuance workflow</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-zinc-900/20 to-purple-800/10 border-l-4 border-stone-500 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">Phase 2: Employer Integration (2026 Q3)</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Partner with major employers (Grameenphone, bKash, Pathao, SELISE)</li>
                                        <li>• Integrate Gono Verify into HR systems (Workday, BambooHR)</li>
                                        <li>• LinkedIn adds "Verify with Gono" button to education section</li>
                                        <li>• Background check firms (HireRight, Sterling) adopt Gono API</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-zinc-900/20 to-green-800/10 border-l-4 border-stone-500 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-blue-200 mb-3">Phase 3: International Expansion (2026 Q4 - 2027)</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Partner with MIT, Stanford, Oxford for cross-border credential verification</li>
                                        <li>• UNHCR adopts Gono for refugee education records</li>
                                        <li>• Coursera, edX, Udacity issue Gono-verified micro-credentials</li>
                                        <li>• National accreditation bodies (UGC, WASC, AACSB) whitelist Gono credentials</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-zinc-900/20 to-red-800/10 border-l-4 border-stone-500 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-zinc-300 mb-3">Phase 4: Professional Licensing (2027+)</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Medical councils verify doctor credentials via Gono (prevent fake doctors)</li>
                                        <li>• Bar associations verify lawyer qualifications</li>
                                        <li>• Engineering boards check Professional Engineer (PE) licenses</li>
                                        <li>• Teaching credentials verified for educator hiring</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Impact Metrics */}
                        <section className="mb-12 bg-gradient-to-r from-red-500/10 to-red-500/10 border border-zinc-600/30 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-zinc-300 mb-6">Projected Impact (10-Year Horizon)</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">500M+</h3>
                                    <p className="text-gray-300">Students with verifiable credentials</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">$50B</h3>
                                    <p className="text-gray-300">Saved in verification costs & fraud prevention</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">95%</h3>
                                    <p className="text-gray-300">Reduction in diploma mill fraud</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">10M+</h3>
                                    <p className="text-gray-300">Refugees with recovered education records</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">2 seconds</h3>
                                    <p className="text-gray-300">Average credential verification time (vs 3-4 weeks)</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
                                    <p className="text-gray-300">Credential portability across borders & platforms</p>
                                </div>
                            </div>
                        </section>

                        {/* UN SDG Alignment */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-6">UN Sustainable Development Goals Alignment</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-zinc-900/20 border border-zinc-600/30 p-5 rounded-lg">
                                    <div className="text-2xl mb-2">🎓</div>
                                    <h3 className="text-lg font-semibold text-blue-200 mb-2">SDG 4: Quality Education</h3>
                                    <p className="text-gray-300 text-sm">
                                        Portable credentials enable lifelong learning. Refugees access education. Skills verified beyond grades.
                                    </p>
                                </div>
                                <div className="bg-zinc-900/20 border border-zinc-600/30 p-5 rounded-lg">
                                    <div className="text-2xl mb-2">💼</div>
                                    <h3 className="text-lg font-semibold text-blue-200 mb-2">SDG 8: Decent Work</h3>
                                    <p className="text-gray-300 text-sm">
                                        Faster hiring via instant verification. Prevent unqualified workers in critical roles (doctors, engineers).
                                    </p>
                                </div>
                                <div className="bg-green-900/20 border border-zinc-600/30 p-5 rounded-lg">
                                    <div className="text-2xl mb-2">⚖️</div>
                                    <h3 className="text-lg font-semibold text-blue-200 mb-2">SDG 10: Reduced Inequalities</h3>
                                    <p className="text-gray-300 text-sm">
                                        Students from Global South access opportunities via verifiable credentials. No geographic barriers.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="text-center py-12 bg-gradient-to-r from-red-500/10 to-red-500/10 rounded-lg border border-zinc-600/30">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Ready to Eliminate Diploma Fraud?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Join universities, employers, and students building the future of verifiable education on Gono Protocol.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/#products"
                                    className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-red-600 transition-all shadow-lg hover:shadow-red-500/50"
                                >
                                    Issue Credentials
                                </Link>
                                <Link
                                    href="/docs"
                                    className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
                                >
                                    Read Documentation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
