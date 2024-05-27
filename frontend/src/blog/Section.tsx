import "./Section.css"
import {sectionContent} from "./content.ts";

export default function Section(props: sectionContent) {

    function renderParagraphs() {
        if (props.text) {
            return props.text.map(
                (paragraph, index) => <p key={index}>{paragraph}</p>
            )
        }
    }

    function renderList() {
        if (props.list) {
            return (
                <ul className="section__ul">
                    {props.list.map((content, index) => (
                        <li key={index}>{content}</li>
                    ))}
                </ul>
            )
        }
    }

    return (
        <section className="section">
            <div className="section__content">
                <h2 className="section__heading">{props.heading}</h2>
                {renderParagraphs()}
                {renderList()}
            </div>
        </section>
    )
}