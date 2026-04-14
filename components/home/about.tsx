import { Bookmark } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="h-full w-full bg-primary">
                <div className="base-container min-h-screen py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-15">
                        <div className="flex flex-col gap-5 justify-end relative">
                            <div className="flex flex-col items-center justify-center absolute -top-60 hidden md:block">
                                <p className="text-primary text-sm font-bold tracking-light uppercase mb-5">
                                    Latest Published
                                </p>
                                <Image priority alt="Book Cover" src={"https://blog-cdn.reedsy.com/directories/gallery/386/large_2aadef14cafd2ae7b505307da73338d8.jpg"} className="h-auto " width={250} height={100} />
                            </div>
                            <p className="text-primary-foreground text-sm font-light tracking-light relative">
                                I am a storyteller, a weaver of words, and a builder of worlds. My journey is one of passion, perseverance, and the relentless pursuit of the perfect narrative. From the spark of an idea to the final polish, I pour my heart and soul into every project, ensuring that each story leaves a lasting impression on the reader.
                            </p>
                        </div>
                        <div className="flex flex-col items-end">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-light text-primary-foreground text-end">
                                Echoes of <br /> Imagination
                            </h1>
                            <Button className="uppercase w-fit px-5 py-5 md:px-10 md:py-7 rounded-full text-sm md:text-md">
                                <Bookmark />
                                Let's Dive into my journey
                            </Button>
                        </div>
                    </div>
                    <hr className="border border-zinc-900 my-10" />
                    <h1 className="text-4xl md:text-5xl font-medium tracking-light text-primary-foreground uppercase md:text-start text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="bg-secondary py-3 px-5 text-black">Eos corporis labore ipsum alias mollitia architecto</span>, quo iusto voluptatem a eligendi blanditiis, sequi saepe suscipit cumque?
                    </h1>
                </div>
            </div>
        </>
    )
}