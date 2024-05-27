import './App.css'
import Blog from "./blog/Blog.tsx";
import Profile from "./profile/Profile.tsx"

function App() {

    return (
        <>
            <Blog/>
            <Profile name="Jonas" location="Saarland" profession="Fullstack WebDev"/>
        </>
    )
}

export default App
