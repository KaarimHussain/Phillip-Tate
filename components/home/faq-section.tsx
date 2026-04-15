"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function FAQSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(".faq-heading", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
        .from(".faq-item", {
            x: -20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.5");
    }, { scope: containerRef });

    const faqs = [
        {
            question: "ARE THERE ANY UPCOMING RELEASES FROM GABRIEL ALEXANDER?",
            answer: "Gabriel is currently working on a new psychological thriller titled 'The Silent Muse', expected to be released in late 2026. Stay tuned for official announcements on our newsletter."
        },
        {
            question: "DOES GABRIEL ALEXANDER OFFER ANY WRITING TIPS?",
            answer: "Yes, Gabriel frequently shares insights into his creative process on his blog. His primary advice is to 'write without the editor in the room' during your first draft."
        },
        {
            question: "HOW DOES GABRIEL APPROACH THE WRITING PROCESS?",
            answer: "He follows an editorial-first approach, focusing heavily on character psychology and atmospheric world-building before diving into the core plot mechanics."
        },
        {
            question: "WHAT ARE GABRIEL ALEXANDER'S MOST NOTABLE WORKS?",
            answer: "His most celebrated works include 'Echoes in the Leaves', 'What Comes Next?', and the award-winning 'Trap'."
        },
        {
            question: "WHAT INSPIRED GABRIEL ALEXANDER TO BECOME AN AUTHOR?",
            answer: "Growing up in a household of artists, Gabriel was always drawn to the power of narrative to explain the unexplained aspects of human nature."
        },
        {
            question: "WHERE CAN I PURCHASE GABRIEL ALEXANDER'S BOOKS?",
            answer: "His books are available at all major retailers including Amazon, Barnes & Noble, and through our direct studio shop."
        }
    ];

    return (
        <section ref={containerRef} className="bg-background py-32 md:py-48 px-5 md:px-0 overflow-hidden">
            <div className="base-container flex flex-col items-center">

                {/* Heading */}
                <h2 className="faq-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading tracking-tight text-black uppercase mb-20 text-center">
                    QUICK ANSWERS
                </h2>

                {/* Accordion */}
                <div className="w-full max-w-4xl">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="faq-item border-b border-black/10 px-2 py-2">
                                <AccordionTrigger className="hover:no-underline group py-6">
                                    <div className="flex items-center justify-between w-full text-left pr-4">
                                        <span className="text-[12px] md:text-[14px] font-bold tracking-[0.1em] text-black uppercase leading-relaxed group-hover:pl-2 transition-all duration-300">
                                            {faq.question}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-8 pr-12 text-black/60 font-sans leading-relaxed text-sm md:text-base border-l-2 border-black/5 pl-4 ml-2">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
