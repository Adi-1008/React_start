import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Adi-1008')
        .then(response => response.json())
        .then(data => {setData(data)})
    }, [])
  return (
    <div className='text-3xl bg-gray-500 text-center m-4 text-white'>
      GitHub followers : {data.followers}
      <img src={data.avatar_url} alt="Profile pic" width="200px" />
    </div>
  )
}

export default Github
