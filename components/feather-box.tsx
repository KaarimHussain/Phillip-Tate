import FeatherIcon from "@/app/assets/Feather.png";
import Image from "next/image";

interface FeatherBoxProps {
    className?: string;
    award?: React.ReactNode;
    year?: React.ReactNode;
}

export default function FeatherBox({ className, award, year }: FeatherBoxProps) {
    return (
        <>
            <div className="flex items-center">
                <Image src={FeatherIcon} className="w-10 h-10 md:w-20 md:h-20 object-center object-cover rotate-0" alt="Feather" />
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-sm md:text-xl font-medium tracking-light text-black uppercase text-center">{award}</h1>
                    <small className="text-xs md:text-sm font-medium tracking-light text-black uppercase text-center">{year}</small>
                </div>
                <Image src={FeatherIcon} className="w-10 h-10 md:w-20 md:h-20 object-center object-cover rotate-180" alt="Feather" />
            </div>
        </>
    )
}
