"use client";
import DownloadData from "@/components/DownloadData";
import Form from "@/components/Form";
import React, { useState } from "react";

export default function Home() {
  const [ytData, setYtData] = useState(null);


  function fetchData(data) {
    setYtData(data);
  }

  return (
    <>
      <div className=" min-h-screen flex gap-5 p-5 pt-20 items-center w-full flex-col sm:pt-28">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        YouTube Dream Downloader
        </h1>

        <Form fetchData={fetchData} />
        
        {ytData&&<DownloadData ytData={ytData}/>}

      </div>
    </>
  );
}
