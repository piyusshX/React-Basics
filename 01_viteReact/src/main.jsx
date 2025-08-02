import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
    <App />
)

// <----------------------------------------------------------------------------------------------------->

// Since we know that App.jsx is a function we simply write a function here and render it on web page

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// createRoot(document.getElementById('root')).render(
//     // <MyApp/>
//     // Since MyApp is a function we can also do this
//     MyApp()
// )

// So can we give react our custom element and render it?

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.hianime.to/',
//         target: '_blank'
//     },
//     children: 'Click me to Watch Anime'
// }

// Answer is not for this case

// But if we can simply return a tag/element like this it can be render on the web page
const anotherElement = (
    <a href="https://www.myanimelist.com" target='_blank'>Visit MyAnimeList</a>
)

// createRoot(document.getElementById('root')).render(
//     anotherElement
// )

// The reason that reactElement is not working is beacuse reactElement ka structure humne apne hisaab se 
// banaya hai aur React expect to get element in a specific format meaning it is a syntactiacl problem.



// <----------------------------- Custom Element in react -------------------------------------------->

// We can also crete an Custom Element in react but we need to follow the syntax

// Syntax -

// const ElementName = React.createElement(
//     'tagName',
//     {attribute1: 'attributeVal', attribute1: 'attributeVal', .... },
//     'innerHTML text',
//      evaluated_Expression // variables
// )

const hero = " Deku"

const ReactElement = React.createElement(
    'a',
    {href: 'https://www.hianime.to', target: '_blank'},
    'Click here to watch Anime',
    hero
)

// createRoot(document.getElementById('root')).render(
//     ReactElement
// )
