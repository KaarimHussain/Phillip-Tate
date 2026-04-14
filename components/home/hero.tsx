import FeatherBox from "@/components/feather-box";
import { Button } from "@/components/ui/button";
import { Bookmark, BookMarked } from "lucide-react";

export default function Hero() {
    return (
        <>
            <div className="h-full w-full md:pb-0 pb-30">
                <div className="base-container flex flex-col justify-center min-h-screen">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-light uppercase text-black">
                            GABRIEL <br />
                            ALEXANDER
                        </h1>
                        <Button className="uppercase w-fit px-5 py-5 md:px-10 md:py-7 rounded-full text-sm md:text-md">
                            <Bookmark />
                            Let's Work Together
                        </Button>
                    </div>
                    <div className="p-5 flex flex-col md:items-end">
                        <h2 className="text-xl md:text-3xl font-bold text-black uppercase tracking-light text-end">
                            PEN NAME
                        </h2>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-light text-black text-end">
                            Niven <br />
                            Everhart
                        </h1>
                        <div className="flex flex-row items-center justify-between gap-5 md:mt-0 mt-10">
                            <FeatherBox award={<>
                                Mastery <br />
                                Award
                            </>} year="2026 - 2027" />
                            <FeatherBox award={<>
                                Inspire <br />
                                Award
                            </>} year="2026 - 2027" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}