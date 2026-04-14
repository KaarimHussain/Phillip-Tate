export default function TopNavbar() {
    const items = [
        "( BUSBYHOUSE )",
        "( SUSPENDEOSE VELITPRE MET PUIGER )",
        "( CODENASTER )",
        "( BEST SELLING AUTHOR )",
    ];

    return (
        <nav className="bg-primary py-3 px-10 overflow-hidden border-b border-border/50">
            <div className="flex items-center justify-center gap-12 whitespace-nowrap animate-in fade-in duration-700">
                {items.map((item, index) => (
                    <span 
                        key={index} 
                        className="text-[10px] font-bold text-primary-foreground/60 uppercase tracking-[0.2em] font-sans"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </nav>
    );
}