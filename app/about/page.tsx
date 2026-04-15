import AboutHero from "@/components/about/hero";
import AboutImmersive from "@/components/about/immersive";
import AboutProcess from "@/components/about/process";
import AboutTimeline from "@/components/about/timeline";
import AboutDawn from "@/components/about/dawn";
import AboutThanks from "@/components/about/thanks";
import FAQSection from "@/components/home/faq-section";

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutProcess />
            <AboutImmersive />
            <AboutTimeline />
            <AboutDawn />
            <AboutThanks />
            <FAQSection />
        </main>
    )
}