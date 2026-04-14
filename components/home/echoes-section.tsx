import Image from "next/image"

export default function EchoesSection() {
    return (
        <section className="bg-black py-20 relative overflow-hidden">
            <div className="base-container flex flex-col items-center">

                {/* Top Logo and Meta */}
                <div className="flex flex-col items-center gap-2 mb-20 pointer-events-none z-20">
                    <span className="text-white text-3xl font-black italic tracking-tighter">/////</span>
                    <p className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">AWARD WINNING</p>
                </div>

                {/* Main Content Area */}
                <div className="relative w-full flex items-center justify-center py-20">

                    {/* Background Text */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 w-full overflow-hidden">
                        <h2 className="text-[8vw] font-heading text-white/10 uppercase tracking-tighter whitespace-nowrap">
                            ECHOES IN THE LEAVES
                        </h2>
                    </div>

                    {/* Books Layout */}
                    <div className="flex items-center justify-center gap-10 md:gap-20 z-20 w-full">

                        {/* Left Book */}
                        <div className="hidden md:block w-48 aspect-[3/4] translate-y-12 shadow-2xl transition-all duration-700 hover:scale-105 active:scale-95">
                            <Image
                                src="https://blog-cdn.reedsy.com/directories/gallery/393/large_69de6d68415f7a2de4f663491dd77394.jpg"
                                alt="What Comes Next"
                                width={300}
                                height={400}
                                className="w-full h-auto object-cover rounded-sm"
                            />
                        </div>

                        {/* Center Book (Main) */}
                        <div className="w-72 md:w-96 aspect-[3/4] shadow-[0_0_100px_rgba(0,0,0,0.5)] z-30 transition-all duration-700 hover:scale-[1.02] active:scale-100">
                            <Image
                                src="https://blog-cdn.reedsy.com/directories/gallery/394/large_4077e3046dc3d5031dd3e378d7104975.jpg"
                                alt="Echoes in the Leaves"
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover rounded-sm border border-white/5"
                            />
                        </div>

                        {/* Right Book */}
                        <div className="hidden md:block w-48 aspect-[3/4] -translate-y-12 shadow-2xl transition-all duration-700 hover:scale-105 active:scale-95">
                            <Image
                                src="https://blog-cdn.reedsy.com/directories/gallery/392/large_14eab3fcefba7378751f2baa18427633.jpg"
                                alt="Trap"
                                width={300}
                                height={400}
                                className="w-full h-auto object-cover rounded-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Meta */}
                <div className="mt-20 z-20">
                    <a href="#" className="text-[10px] font-bold tracking-[0.4em] text-white/60 hover:text-white transition-colors uppercase">
                        LET'S DIVE INTO MY JOURNEY
                    </a>
                </div>
            </div>
        </section>
    )
}
