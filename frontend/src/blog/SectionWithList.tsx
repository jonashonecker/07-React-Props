import "./Section.css"

export default function SectionWithList() {
    return (
        <section className="section">
            <div className="section__content">
                <h2 className="section__heading">Key Points of Minimalism</h2>
                <ul className="section__ul">
                    <li><strong>Simplicity:</strong> Minimalism emphasizes simplicity
                        and clarity in
                        design, focusing on
                        essential elements and removing unnecessary distractions.
                    </li>
                    <li><strong>Functionality:</strong> Minimalist designs prioritize
                        functionality,
                        ensuring that every element
                        serves a clear purpose and contributes to the user experience.
                    </li>
                    <li><strong>Whitespace:</strong> Also known as negative space, whitespace is an integral part of
                        minimalist
                        design, allowing content to breathe and improving readability.
                    </li>
                </ul>
            </div>
        </section>
    )
}