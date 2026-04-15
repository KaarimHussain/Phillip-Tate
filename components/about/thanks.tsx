"use client"

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutThanks() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(".thanks-heading", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        })
            .from(".thanks-list", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4")
            .from(".testimonial-img", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.5")
            .from(".testimonial-text", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8");
    }, { scope: containerRef });

    const lists = [
        {
            title: "Family",
            names: ["John and Mary Smith", "Emily Smith"]
        },
        {
            title: "Teachers & Mentors",
            names: ["Professor James Anderson", "Dr. Susan Thompson", "Ms. Eleanor Reed", "Mr. Thomas Grant"]
        },
        {
            title: "Friends & Colleagues",
            names: ["David Johnson", "Sarah Williams", "Jessica Miller", "Michael Green", "Laura Bennett", "Rachel Adams", "Chris Turner", "Olivia Martinez", "Anna Collins"]
        },
        {
            title: "Inspirational Figures",
            names: ["Mark Twain", "Maya Angelou", "Virginia Woolf", "Ralph Waldo Emerson"]
        },
        {
            title: "Special Thanks",
            names: ["Jane Doe", "The Readers", "Lisa Brown", "Tom Harris", "Alice Reed", "John Parker", "Victoria Evans", "Mark Phillips"]
        }
    ];

    return (
        <section ref={containerRef} className="w-full bg-[#fcfbfa] py-24 md:py-32">
            <div className="base-container">

                {/* Top Section: Acknowledgements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-24">

                    {/* Intro text */}
                    <div className="thanks-heading flex flex-col justify-between">
                        <div>
                            <h4 className="text-[10px] font-bold tracking-widest uppercase text-black/50 mb-4">SPECIAL THANKS</h4>
                            <h2 className="text-2xl md:text-3xl font-sans font-light tracking-tight text-black leading-snug max-w-sm">
                                Acknowledging those who <br className="hidden md:block" />
                                have shaped my journey
                            </h2>
                        </div>
                        <p className="text-xs text-black/60 font-sans leading-relaxed mt-16 md:mt-0 max-w-sm">
                            Thank you for your unwavering support and inspiration. Your presence in my life has made all the difference.
                        </p>
                    </div>

                    {/* Lists Array Grid (Spans 2 columns) */}
                    <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
                        {lists.map((list, index) => (
                            <div key={index} className="thanks-list">
                                <h4 className="text-[11px] font-bold tracking-wider text-black mb-4">{list.title}</h4>
                                <ul className="space-y-2">
                                    {list.names.map((name, i) => (
                                        <li key={i} className="text-[11px] text-black/70 font-sans">{name}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section: Image Testimonial */}
                <div className="testimonial-img relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden rounded-sm shadow-xl mt-10 md:mt-20">
                    <Image
                        src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop"
                        alt="Testimonial background"
                        fill
                        className="object-cover brightness-50"
                    />

                    {/* Left: Spin Badge */}
                    <div className="absolute left-8 md:left-16 bottom-8 md:bottom-1/2 md:translate-y-1/2 w-48 h-48 md:w-64 md:h-64 border border-white/20 rounded-full flex items-center justify-center text-[8px] md:text-[10px] uppercase tracking-widest text-white text-center p-8 animate-[spin_20s_linear_infinite] opacity-70">
                        WORDS THAT INSPIRE • WORLDS THAT CAPTIVATE •
                    </div>

                    {/* Right: Quote */}
                    <div className="testimonial-text absolute right-8 md:right-32 bottom-8 md:bottom-1/2 md:translate-y-1/2 max-w-lg z-10 p-6">
                        <h3 className="text-xl md:text-3xl font-heading text-white/90 leading-snug mb-8">
                            Niven Everhart's storytelling is captivating from the first page, with rich characters and immersive worlds. A must-read for any fiction lover!
                        </h3>
                        <div>
                            <p className="text-[11px] font-bold tracking-widest uppercase text-white">SARAH MITCHELL</p>
                            <p className="text-[10px] text-white/50 font-sans tracking-wide mt-1">Editor at PageTurner Publishing</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
