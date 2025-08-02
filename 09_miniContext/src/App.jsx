import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1 className='mb-10'>Context API Concept</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
