import Logo from "./Logo.tsx";
import {c1, c2} from "./content.ts";
import Section from "./Section.tsx";


export default function Blog() {
    return (
        <>
            <Logo/>
            <main>
                <Section heading={c1.heading} text={c1.text}/>
                <Section heading={c2.heading} list={c2.list}/>
            </main>
        </>
    )
}
