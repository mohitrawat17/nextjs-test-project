"use client";
import React, { useEffect, useState } from "react";
import { getApiData } from "../api";
import { useParams } from "next/navigation";

const Route_data =() => {
    const params=useParams()
    const id=params.id
    const [data,setData]=useState({})
    const getData=async()=>{
        const data = await getApiData(id);
        setData(data)
    }
    useEffect(()=>{
getData()
console.log(params);
    },[])
    return(
        <>
             <div>My Post: {data.id} {data.body}</div>

        </>
    );
}

export default Route_data

