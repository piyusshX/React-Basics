import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams() // userid will store whatever is after url/user/
  return (
    <div className='flex justify-center'>
        <div className='bg-gray-400 text-white text-3xl w-full text-center h-24 content-center'>
            User : {userid}
        </div>
    </div>
  )
}

export default User

