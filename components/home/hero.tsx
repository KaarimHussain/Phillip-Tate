"use client"

import FeatherBox from "@/components/feather-box";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";
import PhilipTateImage from "@/app/assets/images/Philip-tate.png";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

        tl.from(".hero-line", {
            y: 100,
            opacity: 0,
            stagger: 0.2,
        })
            .from(".hero-button", {
                scale: 0.8,
                opacity: 0,
            }, "-=0.8")
            .from(".hero-sub", {
                x: 50,
                opacity: 0,
                stagger: 0.2,
            }, "-=1")
            .from(".hero-award", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
            }, "-=0.8")
            .from(".hero-bg-image", {
                y: 100,
                opacity: 0,
                duration: 1.5,
            }, "-=1.5");
    }, { scope: container });

    return (
        <section ref={container} className="h-full w-full md:pb-0 pb-30 overflow-hidden relative">

            {/* Background Portrait Image */}
            <div className="hero-bg-image absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] z-0 opacity-80 pointer-events-none">
                <Image
                    src={PhilipTateImage}
                    alt="Philip Tate Portrait"
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            <div className="base-container flex flex-col justify-center min-h-screen relative z-10">

                {/* Primary Name */}
                <div className="flex flex-col gap-5 mb-16 md:mb-0">
                    <h1 className="hero-line text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight uppercase text-black leading-[0.9]">
                        GABRIEL <br />
                        ALEXANDER
                    </h1>
                    <div className="hero-button">
                        <Button className="uppercase w-fit px-6 py-6 md:px-10 md:py-8 rounded-full text-sm md:text-base border-black hover:bg-black hover:text-white transition-all">
                            <Bookmark className="w-4 h-4 mr-2" />
                            Let's Work Together
                        </Button>
                    </div>
                </div>

                {/* Secondary Name & Awards */}
                <div className="md:p-5 flex flex-col md:items-end">
                    <h2 className="hero-sub text-xl md:text-3xl font-bold text-black uppercase tracking-widest text-end mb-2 opacity-40">
                        PEN NAME
                    </h2>
                    <h1 className="hero-sub text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tighter text-black text-end leading-[0.8] mb-12">
                        Niven <br />
                        Everhart
                    </h1>

                    <div className="flex flex-row items-center justify-between gap-8 md:mt-0 mt-8">
                        <div className="hero-award">
                            <FeatherBox award={<>Mastery <br /> Award</>} year="2026 - 2027" />
                        </div>
                        <div className="hero-award">
                            <FeatherBox award={<>Inspire <br /> Award</>} year="2026 - 2027" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}