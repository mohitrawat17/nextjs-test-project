'use client'
import React, { useState } from 'react'
import { setLoggedUser } from '../Helper/userUtils'
import { useRouter } from 'next/navigation'

const Signin = () => {
    const[name,setName]=useState('')
    const[age,setAge]=useState(0)
    const[id,setId]=useState('')
    const router=useRouter()


    const handleClick=()=>{
        const localObj={
            name:name,
            age:age,
            id:id
        }
       setLoggedUser(localObj)
       router.push('/test')
    }


    return (
    <div>
      <input onChange={(e)=>setName(e.target.value)} type='text' placeholder='name'/>
      <input onChange={(e)=>setAge(e.target.value)} type='number' placeholder='age'/>
      <input onChange={(e)=>setId(e.target.value)} type='text' placeholder='id'/>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Signin
