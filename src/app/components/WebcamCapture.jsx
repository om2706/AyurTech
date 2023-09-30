import React, { useState, useRef, useCallback } from 'react';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}

const Capture = () => {
  const [picture, setPicture] = useState('');
  const webcamRef = useRef(null);

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setPicture(imageSrc);
    },
    [webcamRef]
  );

  const submitPicture = () => {
    // Add your submit logic here
    console.log('Picture submitted:', picture);
  }

  return (
    <div className='align-items-center ml-96'>
      <h2 className="mb-5 text-2xl ml-16">
        Capture the plant's image
      </h2>
      <div className='ml-1'>
        {picture === '' ? (
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
      <div className='align-items-center ml-24'>
        {picture !== '' ? (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                setPicture('');
              }}
              className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 ml-24 py-2 px-4 rounded"
            >
              Retake
            </button>
            <button
              onClick={submitPicture}
              className="btn btn-success bg-green-500 hover:bg-green-700 text-white font-bold mt-2 ml-24 py-2 px-4 rounded"
            >
              Submit
            </button>
          </>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="btn btn-danger bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 ml-24 py-2 px-4 rounded"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
}

export default Capture;
