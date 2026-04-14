import FeatherBox from "@/components/feather-box";

export default function BiographySection() {
    const awards = [
        { name: "LITERARY AWARD", year: "2018 - 2024" },
        { name: "AUTHOR AWARD", year: "2018 - 2024" },
        { name: "FICTION HONOR", year: "2018 - 2024" },
        { name: "WRITING AWARD", year: "2018 - 2024" },
    ];

    return (
        <section className="bg-white py-32">
            <div className="base-container flex flex-col items-center">

                {/* Large Heading */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-heading tracking-tighter text-black uppercase mb-16 text-center leading-none">
                    GABRIEL <br /> ALEXANDER
                </h2>

                {/* Info Grid */}
                <div className="grid md:grid-cols-3 gap-12 items-center mb-24 w-full">
                    {/* Left Text */}
                    <div className="space-y-6">
                        <p className="text-xs leading-relaxed text-black/70 font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nunc a cursus nisl. Donec eu tortor nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin at neque sed ligula dictum auctor sit amet non erat. In non nisim sapien ut egestas lacus.
                        </p>
                        <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-black uppercase border-b border-black/20 pb-1 inline-block hover:border-black transition-colors md:text-start text-center w-full">
                            LET'S DIVE INTO MY JOURNEY
                        </a>
                    </div>

                    {/* Middle Birth Info */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-[10px] font-bold tracking-[0.5em] text-black/40 uppercase mb-2">BIRTH</p>
                        <h3 className="text-7xl font-sans font-medium tracking-tighter">1971</h3>
                    </div>

                    {/* Right Text */}
                    <div className="space-y-6 text-right">
                        <p className="text-xs leading-relaxed text-black/70 font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nunc a cursus nisl. Donec eu tortor nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin at neque sed ligula dictum auctor sit amet non erat. In non nisim sapien ut egestas lacus.
                        </p>
                        <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-black uppercase border-b border-black/20 pb-1 inline-block hover:border-black transition-colors md:text-end text-center w-full">
                            EXPLORE MY NARRATIVE
                        </a>
                    </div>
                </div>

                {/* Image Placeholder */}
                <div className="w-full aspect-[21/9] bg-secondary rounded-sm mb-24 flex items-center justify-center border border-black/5 animate-pulse">
                    <p className="text-[10px] font-bold tracking-[0.4em] text-black/20 uppercase">Author Portrait Placeholder</p>
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full pt-12 border-t border-black/10">
                    {awards.map((award, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <FeatherBox
                                award={<span className="text-[10px] break-words">{award.name}</span>}
                                year={award.year}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col items-center uppercase tracking-[0.5em] text-[10px] font-bold text-black/70">
                    <span className="mb-2">✦</span>
                    AWARDS
                </div>
            </div>
        </section>
    )
}
