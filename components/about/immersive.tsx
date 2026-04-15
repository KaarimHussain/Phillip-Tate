"use client"

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { BookOpen, Newspaper, PenTool } from "lucide-react";
import CentralImage from "@/app/assets/images/professiona-bio.png";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutImmersive() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });

        tl.from(".immersive-heading", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        })
            .from(".floating-tag", {
                opacity: 0,
                scale: 0.8,
                stagger: {
                    amount: 1,
                    from: "center"
                },
                duration: 1,
                ease: "back.out(1.7)"
            }, "-=0.5")
            .from(".center-portrait", {
                opacity: 0,
                scale: 1.1,
                duration: 1.5,
                ease: "expo.out"
            }, "-=1");

        // Subtle floating movement
        gsap.to(".floating-tag", {
            y: "random(-10, 10)",
            x: "random(-5, 5)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, { scope: sectionRef });

    const genres = [
        { name: "Philosophy", pos: "top-[20%] left-[5%] md:left-[15%]" },
        { name: "Graphic Novels", pos: "top-[10%] left-[30%]" },
        { name: "Autobiography", pos: "top-[10%] right-[30%]" },
        { name: "Mystery & Thriller", pos: "top-[35%] right-[5%] md:right-[15%]" },
        { name: "History", pos: "bottom-[30%] right-[25%]" },
        { name: "Health & Wellness", pos: "bottom-[25%] left-[25%]" },
    ];

    return (
        <section ref={sectionRef} className="w-full bg-white py-24 md:py-40 overflow-hidden relative">
            <div className="base-container flex flex-col items-center relative">

                {/* Background Large Text */}
                <div className="immersive-heading absolute top-0 left-1/2 -translate-x-1/2 text-center select-none pointer-events-none z-0">
                    <h2 className="text-[15vw] md:text-[12vw] font-heading text-black/[0.03] uppercase tracking-tighter leading-none">
                        IMMERSIVE
                    </h2>
                    <p className="text-[2vw] md:text-[1.5vw] font-bold tracking-[0.5em] text-black uppercase -mt-[5vw] md:-mt-[4vw]">
                        STORYTELLING
                    </p>
                </div>

                {/* Floating Elements Container */}
                <div className="relative w-full min-h-[600px] md:min-h-[800px] flex items-center justify-center mt-20 md:mt-0">

                    {/* Floating Genres */}
                    {genres.map((genre, i) => (
                        <div
                            key={i}
                            className={`floating-tag absolute ${genre.pos} z-20 text-[10px] md:text-xs font-bold tracking-widest uppercase text-black/40 hover:text-black transition-colors cursor-default hidden md:block`}
                        >
                            {genre.name}
                        </div>
                    ))}

                    {/* Central Portrait */}
                    <div className="center-portrait relative w-64 md:w-96 aspect-[3/4] z-10">
                        <Image
                            src={CentralImage}
                            alt="Storytelling Portrait"
                            fill
                            className="object-cover border-[12px] border-white"
                        />
                    </div>

                    {/* Prominent Book Cover (Bottom Right) */}
                    <div className="floating-tag absolute bottom-0 right-0 md:right-10 w-32 md:w-48 aspect-[3/4] z-30 shadow-2xl hidden md:block">
                        <Image
                            src="https://blog-cdn.reedsy.com/directories/gallery/394/large_4077e3046dc3d5031dd3e378d7104975.jpg"
                            alt="Journey Book"
                            fill
                            className="object-cover border-4 border-white"
                        />
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 text-[8px] font-bold tracking-widest uppercase shadow-md">
                            JOURNEY
                        </div>
                    </div>

                    {/* Mobile Genres List */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12 md:hidden">
                        {genres.map((genre, i) => (
                            <span key={i} className="text-[10px] font-bold tracking-widest uppercase text-black/50 border border-black/10 px-3 py-1 rounded-full">
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom Features */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 md:mt-32 pt-20 border-t border-black/5">
                    {[
                        { icon: <BookOpen className="w-5 h-5" />, label: "CREATIVE VISION", desc: "Integer gravida consectetur ante a ultricies. Donec ut scelerisque turpis." },
                        { icon: <PenTool className="w-5 h-5" />, label: "EXPERT NARRATIVE", desc: "Integer gravida consectetur ante a ultricies. Donec ut scelerisque turpis." },
                        { icon: <Newspaper className="w-5 h-5" />, label: "EDITORIAL PRECISE", desc: "Integer gravida consectetur ante a ultricies. Donec ut scelerisque turpis." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-4 px-6 group">
                            <div className="text-black/20 group-hover:text-black transition-colors duration-500">
                                {item.icon}
                            </div>
                            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase">{item.label}</h4>
                            <p className="text-[11px] leading-relaxed text-black/50 font-sans max-w-[200px]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
