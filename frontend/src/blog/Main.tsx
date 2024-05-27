import SectionWithList from "./SectionWithList.tsx";
import Section from "./Section.tsx";
import SectionWithQuote from "./SectionWithQuote.tsx";

export default function Main () {
    return (
        <main>
            <SectionWithList/>
            <Section/>
            <SectionWithQuote/>
        </main>
    )
}