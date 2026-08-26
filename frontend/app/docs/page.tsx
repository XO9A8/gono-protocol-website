import { Navbar, Footer } from "@/components";

export default function DocsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-16 px-6 bg-gradient-to-b from-gray-950 to-black flex items-center justify-center">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-500 text-sm font-medium mb-8 uppercase tracking-wider">
                        Documentation
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-200 via-red-300 to-red-200 bg-clip-text text-transparent">
                        Coming Soon
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        Comprehensive developer documentation and API references are on the way.
                    </p>
                    <p className="text-gray-400">
                        In the meantime, feel free to explore our{" "}
                        <a href="/whitepaper" className="text-red-500 hover:text-red-400 underline">
                            whitepaper
                        </a>{" "}
                        or check out our{" "}
                        <a href="https://github.com/Meherajs/gono-protocol-website" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline">
                            GitHub
                        </a>
                        .
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
