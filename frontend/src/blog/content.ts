export type sectionContent = {
    heading: string;
    text?: string[];
    list?: string[];
}

const c1: sectionContent = {
    heading: "Why Minimalism is Important",
    text: [
        "By reducing clutter and distractions, minimalism helps users focus on the content and functionality that matter most.",
        "A minimalist design simplifies navigation and interaction, making it easier for users to find what they need and achieve their goals. With fewer elements and simpler designs, minimalist websites typically load faster, providing a better user experience and improving SEO.",
        "Minimalism often results in a clean, modern look that can be more visually appealing and professional. Simplified designs can be more accessible to users with disabilities, ensuring a broader audience can use the site effectively."
    ]
}

const c2: sectionContent = {
    heading: "Key Points of Minimalism",
    list: [
        "Simplicity: Minimalism emphasizes simplicity and clarity in design, focusing on essential elements and removing unnecessary distractions.",
        "Functionality: Minimalist designs prioritize functionality, ensuring that every element serves a clear purpose and contributes to the user experience.",
        "Whitespace: Also known as negative space, whitespace is an integral part of minimalist design, allowing content to breathe and improving readability."
    ]
}

export {c1, c2}