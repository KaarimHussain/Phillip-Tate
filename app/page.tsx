import About from "@/components/home/about";
import BiographySection from "@/components/home/biography-section";
import EchoesSection from "@/components/home/echoes-section";
import FAQSection from "@/components/home/faq-section";
import FeaturedBook from "@/components/home/featured-book";
import Hero from "@/components/home/hero";
import MarqueeText from "@/components/home/marquee-text";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <MarqueeText />
            <FeaturedBook />
            <EchoesSection />
            <BiographySection />
            <FAQSection />
        </>
    );
}
