import { React, useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  // We can call the api using fetch and get the data like given below but RRD gives us a special function
  // called loader function which provide data to the route element before it renders.

  // Know more -> https://reactrouter.com/en/main/route/loader

  // const [data, setData] = useState("") 
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(response => response.json())
  //   .then(data => {
  //     setData(data)
  //   })
  // }, [])
  
  const data = useLoaderData()

  return (
    <div className='bg-gray-600 text-2xl text-white m-4 p-4 flex justify-center content-center'>
      <div className='flex'>
        <img src={data.avatar_url} alt="gituser" width={100} className='mr-5' />
        <div>
          Name : {data.name} 
          <br />
          Github Username : {data.login}
          <br />
          Github Followers : {data.followers}
        </div>
      </div>
    </div>
  )
}

export default Github


// go to main.jsx -> router -> <Github />

export const gitInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}