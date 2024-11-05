// import Image from "next/image";
import "./layout.tsx";
import { SectionHero } from "./components/SectionHero";
import { Line } from "./components/Line";
import { SectionServices } from "./components/SectionServices"
import { SectionWhychoose } from "./components/SectionWhychoose"
import { StraightLine } from "./components/StraightLine"
import { SectionBottom } from "./components/SectionBottom"


export default function Home() {
    return(
        <div>
            <SectionHero />
            <Line />
            <SectionServices />
            <SectionWhychoose />
            <StraightLine />
            <SectionBottom />
        </div>
    )
}