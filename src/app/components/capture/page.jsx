"use client";
import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import Navbar from "../Navbar";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

const capture = () => {
  const [picture, setPicture] = useState("");
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPicture(imageSrc);
  }, [webcamRef]);

  const submitPicture = () => {
    console.log("Picture submitted:", picture);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl flex items-center justify-center mt-28 mb-8">
          Capture the plant's image
        </h2>
        <div>
          {picture === "" ? (
            <Webcam
              audio={false}
              height={400}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              width={400}
            />
          ) : (
            <img src={picture} alt="Captured" />
          )}
        </div>
        <div className="align-items-center">
          {picture !== "" ? (
            <div className="w-52 flex justify-evenly">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPicture("");
                }}
                className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded">
                Retake
              </button>
              <button
                onClick={submitPicture}
                className="btn btn-success bg-green-500 hover:bg-green-700 text-white font-bold mt-2 py-2 px-4 rounded">
                Submit
              </button>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
              className="btn btn-danger bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded">
              Capture
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default capture;
