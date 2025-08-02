// In react we can make components like this and export them to inject in the html document
// there are some conditions that we must follow like 

// 1 -> In Vite React extension of the file that returns a component must be .jsx
// 2 -> Name of the function must start with capital letter.
// 3 -> We can only return a single element. For returning multiple elements we can make use of
// <div><div/> or <></> fragment

function Anime(){ // In React we call these Components
    return(
        <>
            <h3>Natsume Yuujinchou</h3>
            <h3>is the Best</h3>
        </>
    )
}

export default Anime // for exporting the component