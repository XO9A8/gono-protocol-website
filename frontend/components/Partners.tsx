import { api } from "@/lib/api";

export default async function Partners() {
    const partners = await api.getPartners();

    // Fallback data if API fails
    const partnerList = partners || [
        { id: 1, name: "Polkadot", category: "Infrastructure" },
        { id: 2, name: "Substrate", category: "Infrastructure" },
        { id: 3, name: "Arweave", category: "Storage" },
        { id: 4, name: "C2PA", category: "Standards" },
        { id: 5, name: "Parity Technologies", category: "Infrastructure" },
        { id: 6, name: "Web3 Foundation", category: "Ecosystem" },
    ];

    return (
        <section className="py-16 border-y border-white/[0.08] bg-[#111111]">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm text-zinc-500 uppercase tracking-wider mb-10">
                    Built with industry-leading partners
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {partnerList.map((partner) => (
                        <div
                            key={partner.id}
                            className="opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer group"
                        >
                            <span className="text-lg md:text-xl font-semibold text-zinc-400 group-hover:text-white tracking-wide transition-colors">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
