import React from 'react'

// We can make components of Things like cards or any other piece of code that are used too often in our
// code just like the card given below. We used it by just typing <CompName/> and also we can dynamically 
// change the content of the component by using props. When we make components like these they have access 
// to props and by using them we can dynamically manupulate its content. Initially props is empty and we can
// add properties in it when we use it. For Example -> <CompName username-"Piyush" age="19" /> here in this example 
// username and age are added in the props.
// Note -> we cannot directly pass an Array or Object in props instead we can declare Array or Object in 
// a variable and the pass it in props like <CompName someObj={varName} />.

// FOR MORE DETAILS ABOUT PROPs GO TO -> App.jsx

// function Card(props) { // we can use props like object like in this case but we will need to write 
// props.key1, props.key2,... and so on 
  
function Card({charName="Blank", description, imgURL}) { // Or we can directly use props like this. Here we don't need to 
// write props.key1, we can simply use key1 instead of it props.key1. This method is just convinent

  return (
    <div>
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
            src={imgURL}
            alt={charName}
            class="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white"> {charName} </h1>
            <p className="mt-2 text-sm text-gray-300">
              {description}
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                Know more →
            </button>
            </div>
        </div>
    </div>
  )
}

export default Card