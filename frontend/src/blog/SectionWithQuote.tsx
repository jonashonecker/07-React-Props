import "./Section.css"

export default function SectionWithQuote() {
    return (
        <section className="section">
            <div className="section__content">
                <div className="section__blockQuote">
                    <blockquote>
                        <p>
                            <em>
                                Minimalism is not a lack of something. It's simply the perfect amount of something.
                            </em>
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}