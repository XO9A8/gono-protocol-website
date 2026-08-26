import { Navbar, Footer } from "@/components";
import Link from "next/link";

export default function UtilitiesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-b from-gray-950 to-black">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/use-cases"
                        className="inline-flex items-center text-blue-200 hover:text-zinc-300 mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Use Cases
                    </Link>

                    <div className="mb-12">
                        <div className="inline-block px-4 py-2 bg-zinc-800/30 border border-zinc-600/30 rounded-full text-blue-200 text-sm font-medium mb-6 uppercase tracking-wider">
                            Government Services
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Government & Utility Services on Gono Protocol
                        </h1>
                        <p className="text-xl text-gray-300 mb-4">
                            How BTRC, NEIR, and Electricity Providers can supercharge their services using blockchain provenance
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <p className="italic">
                                Author: Jonayet Hossain
                            </p>
                            <span className="text-gray-700">•</span>
                            <p className="italic">
                                January 5, 2026
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-red max-w-none">
                        {/* Use Case A: NEIR */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Use Case A: NEIR (National Equipment Identity Register) — BTRC</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">What is NEIR?</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                NEIR is Bangladesh&apos;s mobile device registration system managed by BTRC. Key features:
                            </p>
                            <ul className="space-y-2 text-gray-300 mb-6">
                                <li><strong className="text-white">Automatic Registration:</strong> Legally imported/manufactured handsets auto-register when a SIM is inserted</li>
                                <li><strong className="text-white">Pre-NEIR Devices:</strong> All devices used before NEIR launch are automatically registered</li>
                                <li><strong className="text-white">Verification Methods:</strong> SMS (16002), USSD (*16161#), Website (neir.btrc.gov.bd)</li>
                                <li><strong className="text-white">NID-Linked:</strong> Devices are registered to the owner&apos;s National ID</li>
                                <li><strong className="text-white">Lost/Stolen Protection:</strong> Owners can lock/unlock devices via Citizen Portal</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Current Challenges</h3>
                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Problem</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Impact</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Centralized database</td>
                                            <td className="px-4 py-3 text-gray-300">Single point of failure, potential data manipulation</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Limited audit trail</td>
                                            <td className="px-4 py-3 text-gray-300">No immutable history of device ownership changes</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Duplicate IMEI issues</td>
                                            <td className="px-4 py-3 text-gray-300">Multiple devices with same IMEI cause conflicts</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">De-registration disputes</td>
                                            <td className="px-4 py-3 text-gray-300">No cryptographic proof of ownership transfer</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Solution: NEIR Enhanced with Gono Protocol</h3>

                            <div className="space-y-6">
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">Capture</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• When a device enters Bangladesh (import/manufacture), IMEI is registered on Gono Protocol</li>
                                        <li>• C2PA-style cryptographic signature links IMEI to importer/manufacturer identity</li>
                                        <li>• Device metadata (model, origin, date, brand, color) captured and hashed</li>
                                        <li>• Each SIM insertion event creates a provenance record</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">Certify</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• IMEI record anchored on Gono Protocol via ERC-7053</li>
                                        <li>• Creates immutable &quot;Device Birth Certificate&quot; on-chain</li>
                                        <li>• All ownership transfers (via De-Registration) recorded permanently</li>
                                        <li>• Lost/Stolen reports create blockchain-verified blacklist entries</li>
                                        <li>• Special Registration for expat devices gets on-chain verification</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">Check</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• <strong>Buyers:</strong> Verify complete device history before purchasing used phones</li>
                                        <li>• <strong>BTRC:</strong> Immutable audit trail for all registrations</li>
                                        <li>• <strong>Law Enforcement:</strong> Cryptographically verified ownership chain</li>
                                        <li>• <strong>Telecom Operators:</strong> Real-time, tamper-proof blacklist sync</li>
                                        <li>• <strong>Expats:</strong> Transparent Special Registration status</li>
                                    </ul>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Enhanced NEIR Workflows</h3>

                            <div className="space-y-4 mb-6">
                                <div className="bg-indigo-950/30 border border-indigo-900 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-indigo-400 mb-3">New Device Purchase Verification</h4>
                                    <div className="font-mono text-sm bg-black/50 p-4 rounded">
                                        <div className="text-gray-400">Current: SMS &quot;KYD &lt;IMEI&gt;&quot; to 16002 → Get status</div>
                                        <div className="text-blue-200 mt-2">Enhanced: Same SMS → Get status + Blockchain verification link</div>
                                        <div className="text-blue-200">→ View complete provenance history on Gono Explorer</div>
                                    </div>
                                </div>

                                <div className="bg-indigo-950/30 border border-indigo-900 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-indigo-400 mb-3">De-Registration (Device Transfer)</h4>
                                    <div className="font-mono text-sm bg-black/50 p-4 rounded">
                                        <div className="text-gray-400">Current: USSD *16161# → 10 min window → Transfer complete</div>
                                        <div className="text-blue-200 mt-2">Enhanced: Same process → Transaction recorded on Gono Protocol</div>
                                        <div className="text-blue-200">→ Both parties get cryptographic proof of transfer</div>
                                        <div className="text-blue-200">→ Immutable ownership history preserved</div>
                                    </div>
                                </div>

                                <div className="bg-indigo-950/30 border border-indigo-900 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-indigo-400 mb-3">Lost/Stolen Device</h4>
                                    <div className="font-mono text-sm bg-black/50 p-4 rounded">
                                        <div className="text-gray-400">Current: Lock via Citizen Portal → Device blacklisted</div>
                                        <div className="text-blue-200 mt-2">Enhanced: Lock request → On-chain blacklist entry</div>
                                        <div className="text-blue-200">→ Cannot be removed without owner&apos;s cryptographic signature</div>
                                        <div className="text-blue-200">→ Recovery status verifiable by anyone</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Use Case B: Electricity Providers */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Use Case B: Electricity Providers (DESCO, NESCO, DPDC)</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Problem</h3>
                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Problem</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Impact</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Meter tampering</td>
                                            <td className="px-4 py-3 text-gray-300">Revenue loss from manipulated readings</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Billing disputes</td>
                                            <td className="px-4 py-3 text-gray-300">No verifiable consumption history</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Opaque subsidies</td>
                                            <td className="px-4 py-3 text-gray-300">Hard to track who receives subsidies and why</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Payment fraud</td>
                                            <td className="px-4 py-3 text-gray-300">Fake payment receipts circulate</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Solution: Smart Metering on Gono Protocol</h3>

                            <div className="space-y-6">
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">Capture</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Smart meters equipped with secure signing chips</li>
                                        <li>• Each reading is cryptographically signed at the meter</li>
                                        <li>• Timestamp, consumption, and meter ID captured with C2PA-style credentials</li>
                                        <li>• Reading transmitted to utility with embedded proof of authenticity</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">Certify</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Meter readings anchored on Gono Protocol via ERC-7053</li>
                                        <li>• Creates immutable consumption record for each billing cycle</li>
                                        <li>• Payments recorded on-chain with verifiable receipts</li>
                                        <li>• Subsidy distributions logged transparently</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">Check</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• <strong>Consumers:</strong> Verify their own consumption history anytime</li>
                                        <li>• <strong>Utilities:</strong> Detect anomalies (sudden drops = potential tampering)</li>
                                        <li>• <strong>Government:</strong> Audit subsidy distribution with full transparency</li>
                                        <li>• <strong>Regulators:</strong> Access verified data for rate-setting decisions</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6 my-8">
                                <h4 className="text-xl font-semibold text-white mb-4">Smart Billing Flow</h4>
                                <div className="font-mono text-sm bg-black/50 p-4 rounded overflow-x-auto">
                                    <pre className="text-gray-300 whitespace-pre">
                                        {`┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   SMART METER   │────▶│  GONO PROTOCOL  │────▶│   CONSUMER APP  │
│  (Signed Read)  │     │  (Immutable)    │     │  (Verify Bill)  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
   Cryptographic          On-chain record         Dispute-proof
   proof of reading       of consumption          billing history`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        {/* Use Case C: Utility Bill Verification */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Use Case C: Utility Bill as Verified Identity Document</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Problem</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Utility bills are commonly used for address verification (bank accounts, SIM registration, KYC), but current bills are:
                            </p>
                            <ul className="space-y-2 text-gray-300 mb-6">
                                <li>• Easily forged (just edit a PDF)</li>
                                <li>• Not independently verifiable</li>
                                <li>• Often rejected due to trust issues</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Solution: Verified Utility Credentials</h3>

                            <div className="space-y-6">
                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">Capture</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• When a bill is generated, utility creates a digital credential</li>
                                        <li>• Contains: customer ID, address, billing period, amount, payment status</li>
                                        <li>• Cryptographically signed by the utility</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">Certify</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Credential hash stored on Gono Protocol</li>
                                        <li>• Customer receives verifiable bill NFT (non-transferable)</li>
                                        <li>• Links to their verified address and payment history</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-950/20 border border-blue-900/30 rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-blue-200 mb-3">Check</h4>
                                    <p className="text-gray-300 mb-3">Banks, telecom operators, or government agencies can instantly verify:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Is this bill authentic?</li>
                                        <li>• Is this address verified?</li>
                                        <li>• Is the customer in good standing?</li>
                                        <li>• No need to trust a paper document or PDF</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-indigo-950/30 border border-indigo-900 rounded-lg p-6 my-6">
                                <h4 className="text-lg font-semibold text-indigo-400 mb-3">Integration with BTRC/NEIR</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• When registering a SIM, BTRC can query Gono Protocol</li>
                                    <li>• Verify that the submitted utility bill is authentic</li>
                                    <li>• Confirm address matches registered customer</li>
                                    <li>• Reduce fraud in telecom registration</li>
                                </ul>
                            </div>
                        </section>

                        {/* Summary */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Summary: Gono Protocol for Government & Utilities</h2>

                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Service</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Current Problem</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Gono Protocol Solution</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">NEIR (BTRC)</td>
                                            <td className="px-4 py-3 text-gray-300">Centralized DB, duplicate IMEI issues</td>
                                            <td className="px-4 py-3 text-gray-300">Immutable device registry with full provenance</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Electricity Billing</td>
                                            <td className="px-4 py-3 text-gray-300">Tampering, disputes, opacity</td>
                                            <td className="px-4 py-3 text-gray-300">Signed meter readings, on-chain bills</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Address Verification</td>
                                            <td className="px-4 py-3 text-gray-300">Fake bills, manual verification</td>
                                            <td className="px-4 py-3 text-gray-300">Verified utility credentials</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Prepaid Recharge</td>
                                            <td className="px-4 py-3 text-gray-300">Fake receipts, failed credits</td>
                                            <td className="px-4 py-3 text-gray-300">On-chain payment receipts</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Maintenance</td>
                                            <td className="px-4 py-3 text-gray-300">Lost records, no accountability</td>
                                            <td className="px-4 py-3 text-gray-300">Immutable maintenance provenance</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Why Gono Protocol for Utilities?</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-blue-900/30">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-zinc-300">Feature</th>
                                            <th className="px-4 py-3 text-left text-zinc-300">Benefit for Utilities</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">ERC-7053</td>
                                            <td className="px-4 py-3 text-gray-300">Immutable records for every transaction and reading</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">C2PA Integration</td>
                                            <td className="px-4 py-3 text-gray-300">Tamper-proof meter readings and field documentation</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Arweave Storage</td>
                                            <td className="px-4 py-3 text-gray-300">Permanent archival of critical records</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Public Verification</td>
                                            <td className="px-4 py-3 text-gray-300">Citizens and regulators can independently verify</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-gray-300 font-semibold">Smart Contracts</td>
                                            <td className="px-4 py-3 text-gray-300">Automated subsidy distribution and payment routing</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-800 rounded-lg p-6 my-8">
                                <p className="text-gray-300 italic text-center">
                                    By integrating Gono Protocol, Bangladesh&apos;s utility and telecom services can transform from opaque, dispute-prone systems into transparent, verifiable infrastructure that serves citizens better while reducing fraud and operational costs.
                                </p>
                            </div>
                        </section>
                    </div>

                    <Link
                        href="/use-cases"
                        className="inline-flex items-center text-blue-200 hover:text-zinc-300 mt-12 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Use Cases
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
