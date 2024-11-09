// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import getYoutubeId from "get-youtube-id";
// import { CgSpinner } from "react-icons/cg";
// import {ytApi} from "@/helpers/ytApi";

// export default function Form({fetchData}) {
//   const [loading, setLoading] = useState(false);
//   const { register, handleSubmit } = useForm();

//   async function onSubmit(data) {
//     setLoading(true);
//     const yt_id = getYoutubeId(data.yturl);
//     const response = await ytApi(yt_id);
//     await fetchData(response);
//     setLoading(false)
//   }

//   return (
//     <>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex w-full max-w-lg items-center  flex-col gap-2 sm:flex-row"
//       >
//         <input
//           className="flex h-10 bg-white w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black  disabled:cursor-not-allowed disabled:opacity-50"
//           type="text"
//           placeholder="Youtube Link or URL"
//           {...register("yturl", { required: true })}
//         ></input>
//         <button
//           className={`${
//             loading
//               ? " bg-black/80 hover:bg-black/80 cursor-not-allowed"
//               : "bg-black hover:bg-black/80"
//           }
//               flex gap-2 items-center justify-center rounded-md  px-5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-full sm:w-auto`}
//           type="submit"
//           disabled={loading}
//         >
//           {loading && <CgSpinner className="animate-spin" />}

//           <span>{loading ? "Processing...." : "Download"}</span>
//         </button>
//       </form>
//     </>
//   );
// }

"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import getYoutubeId from "get-youtube-id";
import { CgSpinner } from "react-icons/cg";
import { ytApi } from "@/helpers/ytApi";

export default function Form({ fetchData }) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    setLoading(true);
    const yt_id = getYoutubeId(data.yturl);
    const response = await ytApi(yt_id);
    await fetchData(response);
    setLoading(false);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-lg items-center flex-col gap-2 sm:flex-row"
      >
        <input
          className="flex h-10 w-full rounded-md border border-black bg-white bg-opacity-50 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-black/70 transition duration-300 ease-in-out hover:border-gray-700 hover:shadow-lg hover:scale-105 transform disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Youtube Link or URL"
          {...register("yturl", { required: true })}
        />
        
        <button
          className={`flex gap-2 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-in-out w-full sm:w-auto ${
            loading
              ? "bg-gray-800 cursor-not-allowed hover:bg-gray-800"
              : "bg-black hover:bg-black/80 hover:scale-105 transform"
          }`}
          type="submit"
          disabled={loading}
        >
          {loading && <CgSpinner className="animate-spin text-white" />}
          <span>{loading ? "Processing..." : "Download"}</span>
        </button>
      </form>
    </>
  );
}
