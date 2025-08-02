import React from 'react'

function Btn({btnColor, btnText, textColor, onClick}) {
  return (
    <button className="outline-none px-4 py-1 shadow-lg rounded-full" 
      style={{backgroundColor: btnColor, color: textColor}} onClick={onClick}>
      {btnText}
    </button>
  )
}

export default Btn