"use client";
import React, { useEffect, useState } from "react";
import { getApi } from "./api";
import Link from "next/link";

const Fake_API = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await getApi();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data.map((data) => {
        return (
            <>
            <Link href={`fakeapi/${data.id}`} style={{cursor:"pointer",textDecoration:'none',color:'black'}}>title {data.id} : {data.title}</Link>
            <br/>
            </>
        )
      })}
      
    </div>
  );
};

export default Fake_API;
