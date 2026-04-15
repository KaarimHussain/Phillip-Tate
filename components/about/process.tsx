"use client"

import { ArrowDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutProcess() {
    const containerRef = useRef<HTMLDivElement>(null);

    const steps = [
        {
            title: "WRITING SCHEDULE",
            desc: "Integer gravida consectetur ante a ultricies. Donec ut scelerisque turpis.",
            bg: "bg-[#4A2C1A]",
            hasImage: true,
            image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "YEARLY PLANS",
            desc: "Integer gravida consectetur ante a ultricies. Donec ut scelerisque turpis.",
            bg: "bg-black",
            alignBottom: true
        },
        {
            title: "CREATIVE BLUEPRINT",
            desc: "Integer gravida consectetur ante a ultricies. Donec ut scelerisque turpis.",
            bg: "bg-[#0A0A0A]",
        },
        {
            title: "PUBLICATION ROADMAP",
            desc: "Integer gravida consectetur ante a ultricies. Donec ut scelerisque turpis.",
            bg: "bg-black",
            alignBottom: true
        }
    ];

    useGSAP(() => {
        gsap.from(".process-col", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-white pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full min-h-[500px]">
                {steps.map((step, index) => (
                    <div 
                        key={index}
                        className={`process-col relative p-10 flex flex-col justify-center border-r border-white/5 last:border-0 min-h-[400px] md:min-h-[500px] overflow-hidden ${step.bg}`}
                    >
                        {step.hasImage && (
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={step.image} 
                                    alt="Process background" 
                                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#4A2C1A]/80 to-black/90" />
                            </div>
                        )}

                        <div className={`relative z-10 flex flex-col items-center text-center space-y-6 ${step.alignBottom ? 'mt-auto pt-20' : ''}`}>
                            <h3 className="text-sm font-bold tracking-[0.3em] text-white/50 uppercase">
                                {step.title}
                            </h3>
                            <p className="text-[12px] leading-relaxed text-white/70 max-w-[200px] font-sans">
                                {step.desc}
                            </p>
                            <ArrowDown className="w-4 h-4 text-white/20 animate-bounce" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
