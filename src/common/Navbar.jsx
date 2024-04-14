import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {


  return (
    <div>
      <div class="flex flex-col sm:flex-row justify-between items-center px-5 py-5">
        <div class="mb-5 sm:mb-0">
          <h1 class="lg:text-5xl font-semibold text-[#458C93] sm:text-5xl">
            ontheshelf
          </h1>
        </div>
        <div class="mx-10 sm:mx-0 flex flex-row sm:flex-col lg:flex-row gap-5 items-center">
          <button
            class="px-10 py-3 bg-[#40878E] rounded-xl text-white"
           >
            Login / Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
