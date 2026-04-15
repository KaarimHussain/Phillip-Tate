"use client"

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutTimeline() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });

        tl.from(".timeline-heading", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });

        const items = gsap.utils.toArray('.timeline-item');

        items.forEach((item: any, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });
    }, { scope: sectionRef });

    const timelineEvents = [
        {
            year: "1971",
            title: "BIRTH AND EARLY LITERARY INSPIRATION",
            description: "I was born in New York, where a love for storytelling and creativity was fostered early. I grew up surrounded by books and often spent time writing short stories and poems, which would later shape a passion for literature.",
            image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1974&auto=format&fit=crop"
        },
        {
            year: "1999",
            title: "GRADUATION AND FREELANCE WRITING BEGINNINGS",
            description: "I was born in New York, where a love for storytelling and creativity was fostered early. I grew up surrounded by books and often spent time writing short stories and poems, which would later shape a passion for literature.",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop"
        },
        {
            year: "2012",
            title: "BREAKTHROUGH BOOK SERIES SUCCESS",
            description: "I was born in New York, where a love for storytelling and creativity was fostered early. I grew up surrounded by books and often spent time writing short stories and poems, which would later shape a passion for literature.",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop"
        },
        {
            year: "2020",
            title: "CELEBRATING OVER TWO DECADES OF LITERARY SUCCESS",
            description: "I was born in New York, where a love for storytelling and creativity was fostered early. I grew up surrounded by books and often spent time writing short stories and poems, which would later shape a passion for literature.",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=1973&auto=format&fit=crop"
        }
    ];

    return (
        <section ref={sectionRef} className="w-full bg-white py-24 md:py-32 overflow-hidden">
            <div className="base-container flex flex-col items-center">

                {/* Heading */}
                <h2 className="timeline-heading text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight text-black uppercase mb-20 text-center leading-tight">
                    THE BEGINNING OF <br /> A STORYTELLER
                </h2>

                {/* Timeline Container */}
                <div className="relative w-full max-w-4xl mx-auto flex">

                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-[5%] top-0 bottom-0 w-px bg-black/20 hidden md:block">
                        <div className="sticky top-1/2 w-3 h-3 -ml-1 -translate-y-1/2 bg-black rounded-full" />
                    </div>

                    {/* Events List */}
                    <div className="flex flex-col gap-12 md:gap-16 w-full md:pl-[12%]">
                        {timelineEvents.map((event, index) => (
                            <div key={index} className="timeline-item relative w-full group">
                                <div className="relative w-full aspect-[2/1] md:aspect-[21/9] overflow-hidden bg-secondary">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />

                                    {/* Overlay Gradient for contrast */}
                                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/10" />

                                    {/* Large Background Year */}
                                    <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 z-10">
                                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-sans font-light tracking-tighter text-white opacity-90 drop-shadow-lg">
                                            {event.year}
                                        </h2>
                                    </div>

                                    {/* White Content Card */}
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] md:w-[45%] bg-white p-6 md:p-8 shadow-2xl transform translate-x-4 md:translate-x-8 group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">
                                        <p className="text-[9px] font-bold tracking-widest text-black/50 uppercase mb-2 font-sans">
                                            {event.year}
                                        </p>
                                        <h3 className="text-sm md:text-md font-heading uppercase text-black mb-3 md:mb-4 leading-snug">
                                            {event.title}
                                        </h3>
                                        <p className="text-[10px] md:text-xs leading-relaxed text-black/60 font-sans">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
