import React from "react";

const Download = () => {
  return (
    <div>
      <div className=" flex justify-between bg-[#468D93] text-white">
        <div className=" w-fit justify-center items-center px-10 py-10">
          <div className="text-3xl justify-center text-center font-bold  w-[650px]  mx-10">
            <p>
              The app is now avalable in diffrenet stores supporting all
              sysytem! Download the ontheshelf.app and shop from anywhere!
            </p>
          </div>
          <div className=" w-fit mx-16 px-5 py-5">
            <img
              src="google-play-badge.png"
              alt="iamge"
              className="w-[180px]"></img>
            <img src="pngwing.com.png" alt="iamge" className="w-[180px]"></img>
            <img
              src="pngwing.com (1).png"
              alt="iamge"
              className="w-[160px] mx-3"></img>
          </div>
        </div>
        <div className="px-10 py-10">
          <img
            src="pexels-pixabay-267350.jpg"
            alt="image"
            className=" rounded-xl h-[100%] w-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
