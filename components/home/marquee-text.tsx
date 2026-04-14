import Marquee from "react-fast-marquee"

export default function MarqueeText() {
    const items = [
        "BEST SELLING",
        "AWARD WINNING",
        "BEST SELLING",
        "AWARD WINNING",
        "BEST SELLING",
        "AWARD WINNING",
    ];

    return (
        <section className="bg-[#f2f2f2] border-y border-black/5 py-3">
            <Marquee gradient={false} speed={50}>
                {items.map((item, index) => (
                    <div key={index} className="flex items-center mx-12">
                        <span className="text-[20px] font-medium tracking-[0.2em] text-black uppercase">
                            {item}
                        </span>
                    </div>
                ))}
            </Marquee>
        </section>
    )
}