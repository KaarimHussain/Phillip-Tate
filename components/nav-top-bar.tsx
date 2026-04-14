import Marquee from "react-fast-marquee";

export default function TopNavbar() {
    const items = [
        "( BUSBYHOUSE )",
        "( SUSPENDEOSE VELITPRE MET PUIGER )",
        "( CODENASTER )",
        "( BEST SELLING AUTHOR )",
    ];

    return (
        <nav className="bg-primary py-2 overflow-hidden border-b border-white/5">
            <Marquee gradient={false} speed={40}>
                <div className="flex items-center gap-20 pr-20">
                    {items.map((item, index) => (
                        <span 
                            key={index} 
                            className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] font-sans"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </Marquee>
        </nav>
    );
}