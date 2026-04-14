"use client"

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "ABOUT", href: "#" },
        { name: "BLOG", href: "#" },
        { name: "BOOKS", href: "#" },
        { name: "PAGES", href: "#" },
        { name: "SERVICES", href: "#" },
    ];

    return (
        <nav className="flex justify-between items-center py-5 bg-background base-container relative z-50">
            {/* Logo */}
            <div className="flex items-center gap-1">
                <span className="text-2xl font-black tracking-tighter cursor-pointer" onClick={() => window.location.href = "/"}>/////</span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-[14px] font-bold tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Menu Toggle Button */}
            <div className="flex items-center">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors lg:hidden z-50 relative"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-background z-40 lg:hidden flex flex-col pt-24 px-10 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-5xl font-heading tracking-tighter text-foreground hover:italic transition-all uppercase"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    
                    <div className="mt-auto pb-12">
                        <p className="text-[10px] font-bold tracking-[0.4em] text-foreground/40 uppercase mb-4">SOCIALS</p>
                        <div className="flex gap-6">
                            <span className="text-xs font-bold uppercase tracking-widest">LN</span>
                            <span className="text-xs font-bold uppercase tracking-widest">IG</span>
                            <span className="text-xs font-bold uppercase tracking-widest">TW</span>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}