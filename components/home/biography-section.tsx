"use client"

import FeatherBox from "@/components/feather-box";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";
import BioBg from "@/app/assets/images/professiona-bio.png"
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function BiographySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(".bio-heading", {
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        })
            .from(".bio-item", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            }, "-=0.8")
            .from(".bio-award", {
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.5");
    }, { scope: containerRef });

    const awards = [
        { name: "LITERARY AWARD", year: "2018 - 2024" },
        { name: "AUTHOR AWARD", year: "2018 - 2024" },
        { name: "FICTION HONOR", year: "2018 - 2024" },
        { name: "WRITING AWARD", year: "2018 - 2024" },
    ];

    return (
        <section ref={containerRef} className="bg-white py-32 md:py-48 overflow-hidden">
            <div className="base-container flex flex-col items-center">

                {/* Large Heading */}
                <h2 className="bio-heading text-5xl md:text-6xl lg:text-7xl xl:text-[120px] font-heading tracking-tighter text-black uppercase mb-16 md:mb-24 text-center leading-none">
                    GABRIEL <br /> ALEXANDER
                </h2>

                {/* Info Grid */}
                <div className="grid md:grid-cols-3 gap-16 items-center mb-10 w-full">
                    {/* Left Text */}
                    <div className="bio-item space-y-6">
                        <p className="text-xs leading-relaxed text-black/70 font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nunc a cursus nisl. Donec eu tortor nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin at neque sed ligula dictum auctor sit amet non erat. In non nisim sapien ut egestas lacus.
                        </p>
                        <a href="#" className="text-[10px] font-bold tracking-[0.3em] text-black uppercase border-b border-black/10 pb-2 inline-block hover:border-black transition-all duration-300">
                            LET'S DIVE INTO MY JOURNEY
                        </a>
                    </div>

                    {/* Middle Birth Info */}
                    <div className="bio-item flex flex-col items-center justify-center text-center">
                        <p className="text-[10px] font-bold tracking-[0.5em] text-black/40 uppercase mb-4">YEAR OF BIRTH</p>
                        <h3 className="text-8xl font-sans font-medium tracking-tighter">1971</h3>
                    </div>

                    {/* Right Text */}
                    <div className="bio-item space-y-6 md:text-right">
                        <p className="text-xs leading-relaxed text-black/70 font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nunc a cursus nisl. Donec eu tortor nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin at neque sed ligula dictum auctor sit amet non erat. In non nisim sapien ut egestas lacus.
                        </p>
                        <a href="#" className="text-[10px] font-bold tracking-[0.3em] text-black uppercase border-b border-black/10 pb-2 inline-block hover:border-black transition-all duration-300">
                            EXPLORE MY NARRATIVE
                        </a>
                    </div>
                </div>

                {/* Image Placeholder */}
                <div className="bio-item w-full aspect-[21/9] mb-24 md:mb-32 flex items-center justify-center relative group mx-auto"
                >
                    <Image
                        src={BioBg}
                        alt="Author Portrait"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full pt-20 border-t border-black/10">
                    {awards.map((award, index) => (
                        <div key={index} className="bio-award flex flex-col items-center">
                            <FeatherBox
                                award={<span className="text-[11px] font-bold leading-tight">{award.name}</span>}
                                year={award.year}
                            />
                        </div>
                    ))}
                </div>

                <div className="bio-award mt-24 flex flex-col items-center uppercase tracking-[0.6em] text-[10px] font-bold text-black/30">
                    <span className="mb-4 text-xl">✦</span>
                    HONORARY AWARDS
                </div>
            </div>
        </section>
    )
}
