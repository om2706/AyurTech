"use client";
import Link from "next/link";
import React from "react";
import { useDropzone } from "react-dropzone";
import { BsUpload } from "react-icons/bs";
import { BsCameraFill } from "react-icons/bs";

function Hero() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  console.log(acceptedFiles[0]);

  return (
    <>
      <div className="flex items-center flex-col">
        <form className="mt-24 mb-20 w-5/12">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button>
          </div>
        </form>
        <div className="w-full flex justify-evenly">
          <div className="flex flex-col items-center">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p className="bg-zinc-100 h-48 w-72 border-2 border-stone-200 flex text-center items-center justify-center p-4">
                Drag and drop your files here, or click here to upload
              </p>
            </div>
            <button
              type="button"
              className="text-white w-28 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-between items-center">
              <BsUpload className="text-lg" />
              <>Upload</>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/components/capture"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  w-40 flex justify-evenly items-center">
              <BsCameraFill className="text-lg" />
              <>Use Camera</>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
