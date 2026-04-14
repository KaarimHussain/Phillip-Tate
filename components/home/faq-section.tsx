import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
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
        <section className="bg-background py-32 px-5 md:px-0">
            <div className="base-container flex flex-col items-center">

                {/* Heading */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading tracking-tight text-black uppercase mb-20 text-center">
                    QUICK ANSWERS
                </h2>

                {/* Accordion */}
                <div className="w-full max-w-4xl">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-black/10 px-2 py-2">
                                <AccordionTrigger className="hover:no-underline group py-6">
                                    <div className="flex items-center justify-between w-full text-left pr-4">
                                        <span className="text-[12px] md:text-[14px] font-bold tracking-[0.1em] text-black uppercase leading-relaxed">
                                            {faq.question}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-8 pr-12 text-black/60 font-sans leading-relaxed text-sm">
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
