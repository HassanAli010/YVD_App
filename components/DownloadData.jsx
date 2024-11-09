import React from "react";
import Image from "next/image";

export default function DownloadData({ ytData }) {

  return (
    <>
      <section className="flex flex-col gap-4 sm:px-28 sm:flex-row">
        <div className="sm:w-1/2">
          <Image
            src={ytData?.thumbnail[2].url}
            width={500}
            height={500}
            alt="yt Thumbnail"
          />

          <p className="scroll-m-20 break-words bg-white/75 mt-4 text-xl font-bold tracking-tight">
            {ytData?.title}
          </p>
        </div>
        <div className=" flex flex-col  sm:w-1/2">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Resolution
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {ytData?.formats.reverse().map((video) => {
                      return (
                        <tr key={video.itag}>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            {video.qualityLabel}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            <a
                              href={video.url}
                              className="bg-green-600 p-3 rounded-lg text-white hover:bg-green-600/80"
                              target="_blank"
                              download={ytData?.title}>
                              Download
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
