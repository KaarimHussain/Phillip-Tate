import { Menu } from "lucide-react";

export default function Navbar() {
    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "ABOUT", href: "#" },
        { name: "BLOG", href: "#" },
        { name: "BOOKS", href: "#" },
        { name: "PAGES", href: "#" },
        { name: "SERVICES", href: "#" },
    ];

    return (
        <nav className="flex justify-between items-center py-5 bg-background base-container">
            {/* Logo */}
            <div className="flex items-center gap-1">
                <span className="text-2xl font-black tracking-tighter">/////</span>
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-[16px] font-bold tracking-[0.1em] text-foreground/80 hover:text-foreground transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Menu Icon */}
            <div className="flex items-center">
                <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
                    <Menu className="w-5 h-5" />
                </button>
            </div>
        </nav>
    )
}