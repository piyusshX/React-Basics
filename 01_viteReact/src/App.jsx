import Anime from "./Anime.jsx" // importing component from Anime.jsx

// for adding variables in jsx we use {varName} and this is expression/evaluate expression
// meaning curly bresis me hum js nhi likhte hai per uska evaluated outcome or result likhte hai

function App() {
    
    const username = "Blank"

    return (
        // We have use fragment to return more than one component 
        <> 
            <h1>React with Vite | {username}</h1>
            <Anime/>
        </>
    )
}

export default App
