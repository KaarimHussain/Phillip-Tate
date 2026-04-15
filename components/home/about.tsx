"use client"

import { Bookmark } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".fade-up", {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="h-full w-full bg-primary">
            <div className="base-container min-h-screen py-24 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-15">

                    {/* Left Column */}
                    <div className="flex flex-col gap-5 justify-end relative">
                        <div className="fade-up flex flex-col items-center justify-center absolute -top-80 hidden md:block">
                            <p className="text-primary text-sm font-bold tracking-light uppercase mb-5 text-center">
                                Latest Published
                            </p>
                            <Image priority alt="Book Cover" src={"https://blog-cdn.reedsy.com/directories/gallery/386/large_2aadef14cafd2ae7b505307da73338d8.jpg"} className="h-auto shadow-2xl" width={250} height={100} />
                        </div>
                        <p className="fade-up text-primary-foreground text-sm font-light tracking-light relative max-w-sm">
                            I am a storyteller, a weaver of words, and a builder of worlds. My journey is one of passion, perseverance, and the relentless pursuit of the perfect narrative. From the spark of an idea to the final polish, I pour my heart and soul into every project, ensuring that each story leaves a lasting impression on the reader.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right gap-8">
                        <h1 className="fade-up text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-primary-foreground uppercase">
                            Echoes of <br /> Imagination
                        </h1>
                        <div className="fade-up">
                            <Button>
                                <Bookmark className="w-4 h-4 mr-2" />
                                Let's Dive into my journey
                            </Button>
                        </div>
                    </div>
                    <hr className="fade-up border-t border-white/10 my-16 md:my-20" />
                </div>
                <div>
                    <h1 className="fade-up text-4xl md:text-5xl font-medium tracking-light text-primary-foreground uppercase md:text-start text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="bg-secondary py-3 px-5 text-black">Eos corporis labore ipsum alias mollitia architecto</span>, quo iusto voluptatem a eligendi blanditiis, sequi saepe suscipit cumque?
                    </h1>
                </div>
            </div>
        </section>
    );
}