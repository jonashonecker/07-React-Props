type Profile = {
    name: string,
    location: string,
    profession: string
}

export default function Profile(props: Profile) {
    return (
        <section>
            <p>Hey there! I'm <strong>{props.name}</strong> 👋🏻, from <strong>{props.location}</strong> 📍. I'm a <strong>{props.profession}</strong> 👨🏼‍💻</p>
        </section>
    )
}