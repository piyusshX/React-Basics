import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

// Props Example -

// function App() {
//   let myObj = {
//     username: "Blank",
//     age: 19
//   }
//   let newArr = ["deku", "shoto", "ka chan"]

//   return (
//     <>
//       <h1 className='text-black bg-slate-400 p-2 rounded-md m-4'>Tailwind</h1>
//       <Card uname="Shadow" someObj={myObj} someArr={newArr} />
//     </>
//   )
// }

function App() {
  let shadowURL = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b5b848ab-3bc9-44c6-b2dc-abe2b7e70ae0/dgfcasr-210da597-6963-4632-a8c0-68325c33a102.jpg/v1/fit/w_750,h_1132,q_70,strp/cid_kagenou__shadow__power_enhanced_by_kalizakiz_dgfcasr-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjg5OSIsInBhdGgiOiJcL2ZcL2I1Yjg0OGFiLTNiYzktNDRjNi1iMmRjLWFiZTJiN2U3MGFlMFwvZGdmY2Fzci0yMTBkYTU5Ny02OTYzLTQ2MzItYThjMC02ODMyNWMzM2ExMDIuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LmjnSiCmwGntnDvWK79VUJmn51oRW6a-IIzFDJ3O1n8"
  let roseURL = "https://i.pinimg.com/736x/b0/cd/3e/b0cd3e92818d4ae36d21c143f0c9eb7a.jpg"
  return (
    <>
      <div className='flex flex-wrap gap-4'>
        <Card charName="Shadow" description="Waga na wa Shadow Kage ni hisomi Kage wo Karu mono" imgURL={shadowURL} />
        <Card charName="Rose" description="Sid will you Believe in me no matter what happens next..." imgURL={roseURL} />
      </div>
    </>
  )
}

export default App
