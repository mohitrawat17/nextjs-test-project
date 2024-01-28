"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const values = ["one", "two", "three", "four", "five"];
  const [data, setData] = useState(0);
  const sliderFunc = () => {
   const timer= setTimeout(() => {
    if (data) {
        if (data == values.length - 1) {
          setData(0);
        } else {
          setData(data + 1);
        }
      } else {
        if (data == 0) {
          setData(data + 1);
        }
      }
    }, 2000);

    return (()=>{
     clearTimeout(timer)
    })
  };

  const handleBtn = (click) => {
    console.log(data);
    if (click) {
      if (data == values.length - 1) {
        setData(0);
      } else {
        setData(data + 1);
      }
    } else {
      if (data == 0) {
        setData(values.length - 1);
      } else {
        setData(data - 1);
      }
    }
  };

  useEffect(() => {

    sliderFunc();
    console.log(data);

  }, [data]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        justifyContent: "center",
        height: "600px",
        background: "lightcyan",
      }}
    >
      <button onClick={() => handleBtn(0)}>previous</button>
      <p>{values[data]}</p>
      <button onClick={() => handleBtn(1)}>next</button>
    </div>
  );
};

export default page;
