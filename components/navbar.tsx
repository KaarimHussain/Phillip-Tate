"use client"

import { Menu, X, ArrowUpRight, Send, Hash, MessageCircle, Share2, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showFAB, setShowFAB] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const fabRef = useRef<HTMLButtonElement>(null);

    // Menu Open/Close Animations
    useGSAP(() => {
        if (isOpen) {
            const tl = gsap.timeline();
            tl.fromTo(menuRef.current,
                { y: "-100%" },
                { y: "0%", duration: 0.8, ease: "power4.inOut" }
            )
                .from(".menu-link", {
                    y: 50,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "power3.out"
                }, "-=0.2")
                .from(".menu-footer", {
                    opacity: 0,
                    duration: 0.5
                }, "-=0.3");
        }
    }, [isOpen]);

    // FAB Visibility Logic
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowFAB(true);
            } else {
                setShowFAB(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // FAB Entrance Animation
    useGSAP(() => {
        if (showFAB) {
            gsap.fromTo(fabRef.current,
                { scale: 0, opacity: 0, rotate: -45 },
                { scale: 1, opacity: 1, rotate: 0, duration: 0.6, ease: "back.out(1.7)" }
            );
        } else if (fabRef.current) {
            gsap.to(fabRef.current, { scale: 0, opacity: 0, rotate: 45, duration: 0.4 });
        }
    }, [showFAB]);

    const generalLinks = [
        { name: "HOMEPAGE", href: "/" },
        { name: "ABOUT ME", href: "/about" },
        { name: "MY BOOKS", href: "#" },
        { name: "CONTACT ME", href: "#" },
    ];

    const otherLinks = [
        { name: "SERVICES", href: "#" },
        { name: "PRICING", href: "#" },
        { name: "BLOG ARCHIVE", href: "#" },
    ];

    const socials = [
        { name: "Facebook", icon: <Share2 className="w-3 h-3" /> },
        { name: "Quora", icon: <MessageCircle className="w-3 h-3" /> },
        { name: "Medium", icon: <Hash className="w-3 h-3" /> },
        { name: "Instagram", icon: <Globe className="w-3 h-3" /> },
        { name: "Reddit", icon: <Hash className="w-3 h-3" /> },
        { name: "Telegram", icon: <Send className="w-3 h-3" /> },
    ];

    const closeMenu = () => {
        gsap.to(menuRef.current, {
            y: "-100%",
            duration: 0.6,
            ease: "power4.inOut",
            onComplete: () => setIsOpen(false)
        });
    };

    return (
        <>
            <nav className="flex justify-between items-center py-5 bg-background base-container relative z-[100]">
                {/* Logo */}
                <div className="flex items-center gap-1">
                    <span className="text-2xl font-black tracking-tighter cursor-pointer" onClick={() => window.location.href = "/"}>/////</span>
                </div>

                {/* Hamburger Button */}
                <div className="flex items-center">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-full transition-colors group"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                {/* Full Screen Menu */}
                {isOpen && (
                    <div
                        ref={menuRef}
                        className="fixed inset-0 bg-black text-white z-[110] flex flex-col p-6 md:p-12 overflow-y-auto font-sans"
                    >

                        {/* Menu Header */}
                        <div className="flex justify-between items-center mb-20">
                            <span className="text-2xl font-black tracking-tighter">/////</span>
                            <button
                                onClick={closeMenu}
                                className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
                            >
                                <X className="w-4 h-4" /> CLOSE
                            </button>
                        </div>

                        {/* Menu Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 flex-1">

                            {/* Left Column: Latest Article & Other Links */}
                            <div className="flex flex-col gap-16">
                                <div className="menu-link space-y-8">
                                    <p className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">LATEST ARTICLE</p>
                                    <div className="relative group max-w-md">
                                        <div className="aspect-[3/2] bg-white/5 overflow relative">
                                            <div className="absolute inset-0 flex items-center justify-center border border-white/10">
                                                <p className="text-[9px] font-bold tracking-[0.4em] text-white/20 uppercase">Featured Image Placeholder</p>
                                            </div>
                                            <div className="absolute -right-10 -top-10 w-40 h-40 border border-white/20 rounded-full flex items-center justify-center text-[8px] uppercase tracking-widest text-center p-8 animate-[spin_20s_linear_infinite]">
                                                WORDS THAT INSPIRE • WORLDS THAT CAPTIVATE •
                                            </div>
                                        </div>
                                        <div className="mt-8 space-y-4">
                                            <p className="text-xs text-white/60 leading-relaxed font-sans max-w-sm">
                                                Mauris hendreritonly tincidunt nisifdf id iaculis erat malesuada et Pellentesque consecteasdtur nisl eu lobortis laoreet ligula nunc tristique lorem vitae faucibus mihendreritonly.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="menu-link space-y-6">
                                    <p className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">OTHER LINKS</p>
                                    <div className="flex flex-col gap-4">
                                        {otherLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="text-[10px] font-bold tracking-[0.2em] border-b border-white/20 pb-1 w-fit hover:border-white transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: General Links */}
                            <div className="flex flex-col gap-10">
                                <p className="menu-link text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">GENERAL LINKS</p>
                                <div className="flex flex-col gap-8 md:gap-12">
                                    {generalLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="menu-link group flex items-center gap-6"
                                        >
                                            <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
                                            <span className="text-5xl md:text-7xl lg:text-8xl font-heading tracking-tighter hover:italic transition-all uppercase">
                                                {link.name}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Menu Footer */}
                        <div className="menu-footer mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
                            <div className="flex flex-wrap justify-center gap-3">
                                {socials.map((social) => (
                                    <button key={social.name} className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                                        {social.icon} {social.name}
                                    </button>
                                ))}
                            </div>
                            <div className="text-right space-y-1">
                                <p className="text-[9px] font-bold tracking-widest text-white/40 uppercase">DESIGN BY DIVI PIXEL COPYRIGHT</p>
                                <p className="text-[9px] font-bold tracking-widest text-white/20 uppercase">© 2026. ALL RIGHTS RESERVED.</p>
                            </div>
                        </div>

                    </div>
                )}
            </nav>

            {/* Floating Action Button */}
            <button
                ref={fabRef}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-8 right-8 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl z-[90] transition-transform hover:scale-110 active:scale-95 ${showFAB ? 'flex' : 'hidden'} opacity-0 scale-0`}
            >
                <Menu className="w-6 h-6" />
            </button>
        </>
    )
}