"use client"

import Image from "next/image";
import PhilipTate from "@/app/assets/images/Philip-tate.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function AboutHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

        tl.from(".about-hero-title", {
            y: 80,
            opacity: 0,
            stagger: 0.2,
        })
            .from(".about-hero-breadcrumb", {
                x: -20,
                opacity: 0,
            }, "-=0.8")
            .from(".about-hero-card", {
                y: 40,
                opacity: 0,
            }, "-=0.6")
            .from(".about-hero-image", {
                x: 100,
                opacity: 0,
                duration: 1.5,
            }, "-=1.5");
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-white pt-20 pb-0 overflow-hidden min-h-screen flex items-center">
            <div className="base-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">

                {/* Left Column: Content */}
                <div className="flex flex-col z-10">
                    <div className="space-y-4 mb-2">
                        <h1 className="about-hero-title text-6xl md:text-7xl lg:text-8xl font-heading tracking-tighter text-black uppercase leading-[0.8]">
                            THE MIND <br />
                            BEHIND THE <br />
                            STORIES
                        </h1>
                    </div>

                    <div className="about-hero-breadcrumb flex items-center gap-3 text-[10px] font-bold tracking-[0.4em] text-black/40 uppercase mt-12 mb-5">
                        <span>AUTHOR</span>
                        <span className="text-black/20">→</span>
                        <span className="text-black">ABOUT</span>
                    </div>

                    {/* Story Inset Card */}
                    <div className="about-hero-card flex flex-col md:flex-row gap-6 bg-[#F8F5F2] p-6 max-w-xl border border-black/5">
                        <div className="w-full md:w-32 aspect-[3/4] relative shrink-0 shadow-lg">
                            <Image
                                src="https://blog-cdn.reedsy.com/directories/gallery/394/large_4077e3046dc3d5031dd3e378d7104975.jpg"
                                alt="Book Cover"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-3 py-2">
                            <h3 className="text-xs font-bold tracking-widest uppercase text-black">
                                BEHIND THE PAGES: A WRITER'S JOURNEY
                            </h3>
                            <p className="text-[11px] leading-relaxed text-black/60 font-sans max-w-sm">
                                Join Niven Everhart via voyage through the highs and lows of a writing career. From humble beginnings to literary acclaim, this is the odyssey of an author who has left an indelible mark on the world of words.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Portrait */}
                <div className="about-hero-image relative lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2 flex justify-end items-end pointer-events-none">
                    <div className="relative w-full max-w-[700px]">
                        <Image
                            src={PhilipTate}
                            alt="Philip Tate Portrait"
                            className="w-full h-auto object-contain"
                            priority
                        />
                        {/* Vertical side text simulation */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right flex items-center gap-4 text-[9px] font-bold tracking-[0.5em] text-black/20 uppercase whitespace-nowrap translate-x-12">
                            <span>ABOUT NIVEN</span>
                            <div className="w-12 h-px bg-black/20" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}