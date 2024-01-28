'use client'
import React, { useState } from 'react'

const FromComp = () => {

const handleSubmit=(e)=>{
  e.preventDefault()
   const fdata=e.target

   const formData={
    Name:fdata.Name.value,
    Age:fdata.Age.value,
    email:fdata.UserEmail.value,
    Address:fdata.Address.value,
    Value:fdata.SelectValue.value

   }
   console.log(JSON.stringify(formData));



  // e.preventDefault();
  // const formData = new FormData(e.target);
  // const formObject = {};
  // formData.forEach((value, key) => {
  //   formObject[key] = value;
  // });
  // console.log('Form Data:', formObject);
}

const[fullAddress,setFullAddress]=useState('mohit')

  
  return (
    <form onSubmit={(e)=>handleSubmit(e)} style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center" ,height:"100%", width:"100%"}}>
      <p>here is the form fill it...</p>
      <textarea placeholder='full name' onChange={(e)=>setFullAddress(e.target.value)} value={fullAddress}></textarea>
      <input name='Name' type='text' placeholder='name' style={{margin:"20px", width:"300px",height:"50px"}}/>
      <input name='Age' type='number' placeholder='enter age' style={{margin:"20px", width:"300px",height:"50px"}}/>
      <input name='UserEmail' type='text' placeholder='email' style={{margin:"20px", width:"300px",height:"50px"}}/>
      <input name='Address' type='text' placeholder='address' style={{margin:"20px", width:"300px",height:"50px"}}/>
      <select name='SelectValue' style={{margin:"20px", width:"300px",height:"50px"}}>
        <option selected>Select </option>
        <option value='abc'>abc</option>
        <option value='xyz'>xyz</option>
        <option value='pqr'>pqr</option>
      </select>

      <button type='submit'   style={{margin:"20px", width:"200px",height:"40px"}}>Submit</button>
    </form>
  )
}

export default FromComp
