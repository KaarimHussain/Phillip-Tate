"use client"

import Image from "next/image"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function EchoesSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Parallax for background text
        gsap.to(".echoes-bg-text", {
            xPercent: -20,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
            }
        });

        // entrance for books
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%", // Triggered earlier
                toggleActions: "play none none reverse",
            }
        });

        tl.from(".echoes-book", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "expo.out",
            clearProps: "all" // Ensures styles are cleared after animation
        })
            .from(".echoes-meta", {
                opacity: 0,
                y: 20,
                duration: 0.8,
            }, "-=0.8");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="bg-black py-32 md:py-48 relative overflow-hidden">
            <div className="base-container flex flex-col items-center">

                {/* Top Logo and Meta */}
                <div className="echoes-meta flex flex-col items-center gap-2 mb-20 pointer-events-none z-20">
                    <span className="text-white text-3xl font-black italic tracking-tighter">/////</span>
                    <p className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">AWARD WINNING</p>
                </div>

                {/* Main Content Area */}
                <div className="relative w-full flex items-center justify-center py-20">

                    {/* Background Text */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 w-full overflow-hidden">
                        <h2 className="echoes-bg-text text-[15vw] md:text-[8vw] font-heading text-white/5 uppercase tracking-tighter whitespace-nowrap leading-none transition-all">
                            ECHOES IN THE LEAVES • ECHOES IN THE LEAVES • ECHOES IN THE LEAVES
                        </h2>
                    </div>

                    {/* Books Layout */}
                    <div className="flex items-center justify-center gap-6 md:gap-20 z-20 w-full">

                        {/* Left Book */}
                        <div className="echoes-book hidden md:block w-48 aspect-[3/4] translate-y-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] hover:z-40 transition-all duration-700 hover:scale-105">
                            <Image
                                src="https://blog-cdn.reedsy.com/directories/gallery/393/large_69de6d68415f7a2de4f663491dd77394.jpg"
                                alt="What Comes Next"
                                width={300}
                                height={400}
                                className="w-full h-auto object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        {/* Center Book (Main) */}
                        <div className="echoes-book w-64 md:w-96 aspect-[3/4] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] z-30 transition-all duration-700 hover:scale-[1.02]">
                            <Image
                                src="https://blog-cdn.reedsy.com/directories/gallery/394/large_4077e3046dc3d5031dd3e378d7104975.jpg"
                                alt="Echoes in the Leaves"
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover rounded-sm border border-white/5"
                            />
                        </div>

                        {/* Right Book */}
                        <div className="echoes-book hidden md:block w-48 aspect-[3/4] -translate-y-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] hover:z-40 transition-all duration-700 hover:scale-105">
                            <Image
                                src="https://blog-cdn.reedsy.com/directories/gallery/392/large_14eab3fcefba7378751f2baa18427633.jpg"
                                alt="Trap"
                                width={300}
                                height={400}
                                className="w-full h-auto object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Meta */}
                <div className="echoes-meta mt-20 z-20">
                    <a href="#" className="group flex flex-col items-center gap-2">
                        <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase group-hover:text-white transition-colors duration-300">
                            LET'S DIVE INTO MY JOURNEY
                        </span>
                        <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500" />
                    </a>
                </div>
            </div>
        </section>
    )
}
