import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='text-center bg-gray-500 h-28 text-5xl text-neutral-100 pt-5'>
      User : {id}
    </div>
  )
}

export default User
