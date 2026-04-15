"use client"

import Image from "next/image"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedBook() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(".featured-header", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".book-card", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out"
            }, "-=0.5");
    }, { scope: containerRef });

    const books = [
        {
            id: "01",
            title: "FADING DREAMS",
            image: "https://blog-cdn.reedsy.com/directories/gallery/387/large_ea9eeea06749f329947519b2284f7a41.jpg",
            link: "LEARN MORE"
        },
        {
            id: "02",
            title: "AWAKENING",
            image: "https://blog-cdn.reedsy.com/directories/gallery/380/large_73a1bc9065255e29a32f56ca0efcdd8a.jpg",
            link: "LET'S DIVE INTO MY JOURNEY →",
            isFeatured: true
        },
        {
            id: "03",
            title: "WHAT COMES NEXT?",
            image: "https://blog-cdn.reedsy.com/directories/gallery/397/large_1546e99e80565913a3a21fffb7f8eb93.jpg",
            link: "LEARN MORE"
        }
    ];

    return (
        <section ref={containerRef} className="h-full w-full bg-white py-24 md:py-32 overflow-hidden">
            <div className="base-container flex flex-col items-center">
                {/* Header */}
                <div className="featured-header text-center space-y-2 mb-20">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase">theguardian</p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading tracking-tight text-black uppercase leading-tight">FEATURE BOOKS</h2>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 w-full items-start">
                    {books.map((book) => (
                        <div key={book.id} className={`book-card flex flex-col items-center space-y-8 ${book.isFeatured ? 'md:-mt-12' : ''}`}>
                            <div className="w-full relative group">
                                <span className="absolute -top-6 -left-2 text-[10px] font-bold text-black/50">{book.id}</span>
                                <div className="bg-secondary p-8 md:p-10 flex items-center justify-center relative overflow-hidden">
                                    <div className="w-full aspect-[3/4] shadow-2xl transition-transform duration-700 group-hover:scale-105">
                                        <Image
                                            src={book.image}
                                            alt={book.title}
                                            width={500}
                                            height={"500"}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    {book.isFeatured && (
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                                                <span className="text-xs">👁</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {book.isFeatured ? (
                                <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-black uppercase mt-12 hover:tracking-[0.3em] transition-all duration-300">
                                    {book.link}
                                </a>
                            ) : (
                                <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-black uppercase border-b border-black/20 pb-1 hover:border-black transition-colors">
                                    {book.link}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}