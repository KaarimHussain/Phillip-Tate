export default function Footer() {
    return (
        <footer className="bg-primary py-32 border-t border-black/5">
            <div className="base-container flex flex-col items-center text-center">

                {/* Established Tag */}
                <p className="text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase mb-8">
                    ESTABLISHED 1971
                </p>

                {/* Main Heading */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading tracking-tighter text-white mb-16 leading-none">
                    The Future is <br className="md:hidden" /> <span className="italic">Bespoke.</span>
                </h2>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-12 mb-20">
                    <a href="#" className="text-[11px] font-bold tracking-[0.2em] text-white/60 hover:text-white transition-colors uppercase">PRIVACY POLICY</a>
                    <a href="#" className="text-[11px] font-bold tracking-[0.2em] text-white/60 hover:text-white transition-colors uppercase">TERMS & CONDITIONS</a>
                    <a href="#" className="text-[11px] font-bold tracking-[0.2em] text-white/60 hover:text-white transition-colors uppercase">LINKEDIN</a>
                    <a href="#" className="text-[11px] font-bold tracking-[0.2em] text-white/60 hover:text-white transition-colors uppercase">INSTAGRAM</a>
                </div>

                {/* Sub-Footer */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-px bg-white/10 mb-4" />
                    <p className="text-[9px] font-medium tracking-widest text-white/30 uppercase">
                        © 2026 GABRIEL ALEXANDER. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-2 text-white/20 text-[10px] uppercase font-bold tracking-widest mt-2">
                        <span>MADE BY</span>
                        <span className="text-white/40 tracking-tighter italic font-heading">Phillip Tate Studio</span>
                    </div>
                </div>

            </div>
        </footer>
    )
}
