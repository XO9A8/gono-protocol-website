'use client';

import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'What is Gono Protocol?',
            answer: 'Gono Protocol is a modular blockchain infrastructure built on Substrate as a Polkadot Parachain. It provides a universal, content-addressable rail for verifiable media, digital assets, and autonomous AI commerce. Using a "Pluggable Module" approach, developers can build high-security journalism platforms, lightweight asset trackers, or automated AI data marketplaces using the same core infrastructure.',
        },
        {
            question: 'How does the modular architecture work?',
            answer: 'Gono is structured into 4 layers: Layer 1 (Polkadot Relay Chain) provides shared security, Layer 2 (Gono Execution Rail) handles mandatory ERC-7053 indexing, Layer 3 (Modular Service Pallets) offers optional extensions like Store, Verify, Privacy, and x402 pallets, and Layer 4 (Application Layer) consists of user-facing applications. Developers can opt-in to specific pallets based on their application needs.',
        },
        {
            question: 'What is ERC-7053 and why is it important?',
            answer: 'ERC-7053 is the Ethereum standard for "Media Receipts" - immutable blockchain records of digital asset provenance. Every asset registered on Gono receives an ERC-7053 compliant receipt, creating a global ledger of media authenticity. This ensures that any digital content has a verifiable chain of custody that cannot be altered or erased.',
        },
        {
            question: 'How do x402 micropayments work?',
            answer: 'The x402 protocol revives HTTP status code 402 "Payment Required" for machine-to-machine commerce. When an AI agent requests data, it receives a 402 response with payment details. The agent pays in stablecoins (USDC/DAI) plus a small GONO protocol fee, then receives the data with a provenance receipt. This enables autonomous AI data marketplaces without human intervention.',
        },
        {
            question: 'What is the GONO token used for?',
            answer: 'GONO is the native utility token with four primary uses: Network Gas (paying for ERC-7053 indexing and transactions), Storage Endowment (subsidizing permanent Arweave storage), Validator Staking (securing the Polkadot Parachain and earning rewards), and Governance Rights (voting on protocol upgrades, pallet activations, and treasury allocation).',
        },
        {
            question: 'How does privacy work with zk-SNARKs?',
            answer: 'The Privacy Pallet uses zero-knowledge proofs (zk-SNARKs) to enable anonymous content registration. Journalists and whistleblowers can prove the authenticity of their content without revealing their identity. The cryptographic proof confirms the asset exists and meets certain criteria, while keeping the creator anonymous - perfect for high-stakes investigative journalism.',
        },
        {
            question: 'What are witness nodes and SANUB?',
            answer: 'Witness nodes are community validators in the Verify Pallet who attest to the authenticity of digital assets. SANUB (Stake-Aligned Neutral Unbiased Blockchain) is the reputation algorithm that weights attestations based on validator stake and historical accuracy. This creates a decentralized trust layer where AI oracles and human experts can collaborate on verification.',
        },
        {
            question: 'Is storage on Arweave mandatory?',
            answer: 'No, the Store Pallet is completely optional. Developers can choose to use Arweave for permanent decentralized storage, use their own storage solutions, or skip storage entirely if they only need provenance indexing. The modular design means you only use (and pay for) what your application requires.',
        },
        {
            question: 'How is Gono different from traditional NFT platforms?',
            answer: 'Unlike NFT platforms focused on collectibles and art markets, Gono is designed for provenance and verification across any digital asset. It supports modular privacy (zk-SNARKs), institutional-grade security (Polkadot), standardized receipts (ERC-7053), and autonomous AI commerce (x402). You can build journalism platforms, real estate trackers, or AI marketplaces - not just NFT galleries.',
        },
        {
            question: 'Can I build on Gono today?',
            answer: 'The core infrastructure is under active development. Developers can start experimenting with the Capture SDK for asset registration and explore the x402 protocol specification. The parachain testnet will launch in Q2 2026, with mainnet targeted for Q4 2026. Join our developer community to get early access and shape the protocol.',
        },
    ];

    return (
        <section className="px-6 py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-400">
                        Everything you need to know about Gono Protocol
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity"></div>

                            {/* FAQ Item */}
                            <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all">
                                {/* Question Button */}
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-800/30 transition-colors"
                                >
                                    <span className="text-lg font-semibold text-white pr-8">
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 w-6 h-6 text-indigo-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                                >
                                    <div className="px-6 pb-5 pt-2 border-t border-gray-800">
                                        <p className="text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-6">
                        Still have questions?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://github.com/gono-protocol"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                        >
                            Read the Docs
                        </a>
                        <a
                            href="https://discord.gg/gono-protocol"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-lg font-medium hover:border-indigo-500/50 hover:text-white transition-all"
                        >
                            Join Discord
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
