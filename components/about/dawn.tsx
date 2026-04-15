"use client"

import FeatherBox from "@/components/feather-box";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Bookmark } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutDawn() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(".dawn-heading", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
        .from(".dawn-book-container", {
            y: 80,
            opacity: 0,
            stagger: 0.2,
            duration: 1.2,
            ease: "back.out(1.5)"
        }, "-=0.6")
        .from(".dawn-award", {
            scale: 0.8,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.5");
    }, { scope: containerRef });

    const books = [
        {
            title: "DAWN",
            image: "https://blog-cdn.reedsy.com/directories/gallery/393/large_69de6d68415f7a2de4f663491dd77394.jpg",
            isMain: false,
        },
        {
            title: "GABRIEL ALEXANDER",
            image: "https://blog-cdn.reedsy.com/directories/gallery/394/large_4077e3046dc3d5031dd3e378d7104975.jpg",
            isMain: true,
        },
        {
            title: "FRAGMENTS",
            image: "https://blog-cdn.reedsy.com/directories/gallery/392/large_14eab3fcefba7378751f2baa18427633.jpg",
            isMain: false,
        }
    ];

    const awards = [
        { name: "LITERARY AWARD", year: "2018 - 2024" },
        { name: "AUTHOR AWARD", year: "2018 - 2024" },
        { name: "FICTION HONOR", year: "2018 - 2024" },
        { name: "WRITING AWARD", year: "2018 - 2024" },
    ];

    return (
        <section ref={containerRef} className="w-full bg-[#F5F3EF] py-24 md:py-32 overflow-hidden">
            <div className="base-container flex flex-col items-center">
                
                {/* Heading Area */}
                <div className="text-center mb-24 flex flex-col items-center">
                    <h2 className="dawn-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading tracking-tight text-black uppercase mb-8 leading-tight">
                        THE DAWN OF A <br /> WORDSMITH
                    </h2>
                    <a href="#" className="dawn-heading flex items-center gap-2 text-[9px] font-bold tracking-[0.3em] text-black uppercase hover:opacity-60 transition-opacity">
                        <Bookmark className="w-3 h-3 fill-black" />
                        LET'S DIVE INTO MY JOURNEY
                    </a>
                </div>

                {/* Books Display */}
                <div className="flex flex-col md:flex-row items-end justify-center gap-12 md:gap-16 w-full mb-32 relative">
                    {books.map((book, index) => (
                        <div key={index} className={`dawn-book-container flex flex-col items-center group ${book.isMain ? 'w-64 md:w-80 z-20' : 'w-48 md:w-56 z-10'}`}>
                            
                            {/* Book + Pedestal Wrapper */}
                            <div className="relative w-full aspect-[3/4] flex justify-center items-end">
                                
                                {/* The Pedestal (Brown "U" Shape) */}
                                {/* Using a solid rectangle with padding creates the pocket effect from the reference */}
                                <div className="absolute bottom-0 w-[110%] h-[35%] bg-[#5c3e2e] shadow-xl translate-y-4 rounded-sm" />
                                
                                {/* Book Cover */}
                                <div className={`relative w-full aspect-[3/4] bg-white shadow-2xl transition-transform duration-700 group-hover:-translate-y-6 ${book.isMain ? '-mb-8' : '-mb-4'}`}>
                                    <Image 
                                        src={book.image}
                                        alt={book.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Inner shadow overlay feeling */}
                                    <div className="absolute inset-0 shadow-[inset_10px_0_20px_rgba(0,0,0,0.1)] pointer-events-none" />
                                </div>

                            </div>

                            {/* Book Title */}
                            <p className="mt-12 text-[10px] font-bold tracking-[0.2em] text-black uppercase">
                                {book.title}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl mx-auto">
                    {awards.map((award, index) => (
                        <div key={index} className="dawn-award flex flex-col items-center">
                            <FeatherBox
                                award={<span className="text-[9px] md:text-[11px] font-bold leading-tight tracking-widest">{award.name}</span>}
                                year={award.year}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
