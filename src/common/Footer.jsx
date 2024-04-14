import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#6AAEB4] text-white flex justify-between">
        <div className="h-fit mx-10 px-5 py-10">
          <h1 className="px-5 py-5 text-5xl font-bold">ontheshelf</h1>
          <p className="px-5 py-2 text-2xl">
            Fresh goods delivery to your doorstep
          </p>
        </div>
        <div className="px-10 py-10">
          <h3 className="text-2xl">Need help?</h3>
          <h3 className="">OurSupport is here for you 24/7</h3>
          <h5>(+123) 000 111 222 333</h5>
            <a href="#" className="text-4xl font-bold">
              ontheshelf@uizard.io
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
