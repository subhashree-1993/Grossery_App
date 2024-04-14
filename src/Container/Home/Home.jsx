import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { data } from "./Store";
import { workdata } from "./howwork";
import { TypeAnimation } from "react-type-animation";

const Home = ({ text }) => {
  const [show, setshow] = useState(false);
  const [buttonText, setButtonText] = useState("See All");

  const haldleshow = () => {
    setshow(!show);

    if (buttonText === "See All") {
      setButtonText("Hide");
    } else {
      buttonText === "All";
      setButtonText("See");
    }
  };

  // Login page

  // useeffect
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return (
    <div>
      <div>
        {/* Hero */}
        <div className="h1tag1 w-full justify-center items-center">
          <div className=" text-center  justify-center px-10 py-10 ">
            <h1 className=" text-white text-8xl mt-10 font-semibold">
              Fresh goods delivered to
            </h1>
            <TypeAnimation
              sequence={[
                "your doorstep!",
                5000,
                " your doorstep!",
                5000,
                "",
                500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="flex  px-5 py-10 justify-center text-6xl text-white font-semibold "
            />
          </div>
          <div className=" m-auto  justify-center">
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search For Near Store"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-[#458C92] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* gif section */}

      <div className="flex justify-center flex-row">
        <div className="contsin flex-col flex gap-3 ">
          <img src="supermarket.gif" alt="img" />
          <h1>80 Stores</h1>
          <p>All around the country</p>
        </div>
        <div className="contsin flex-col flex gap-3">
          <img src="noodle.gif" alt="img" />
          <h1>Fresh foods</h1>
          <p>we guarantee quality</p>
        </div>
        <div className="contsin flex-col flex gap-3">
          <img src="delivery-scooter.gif" alt="img" />
          <h1>Fast Delivery</h1>
          <p>Fastest on the market</p>
        </div>
        <div className="contsin flex-col flex gap-3">
          <img src="route.gif" alt="img" />
          <h1>Live tracking</h1>
          <p>Track your oder in real time</p>
        </div>
      </div>

      {/* Popular store section */}
      <div className="container25 text-3xl font-semibold">
        <h1>Popular Stores</h1>
        <button onClick={haldleshow}>{buttonText}</button>
      </div>
      <div className=" flex flex-col gap-10">
        <div className=" flex gap-10 justify-center">
          <div className="flex flex-wrap justify-center">
            {Object.keys(data).map((key) => (
              <motion.div
                key={key}
                className="w-96 overflow-hidden bg-[#6AAEB4]  rounded-xl m-4 hover:shadow-lg">
                <div className="overflow-hidden justify-center items-center py-10">
                  {data[key].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-5">
                      <img
                        src={item.image}
                        alt={item.store}
                        className="w-24 h-24"
                      />
                      <p className="text-lg text-white">{item.store}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {show && (
          <div className=" flex gap-10 justify-center">
            <div className="flex flex-wrap gap-10 justify-center">
              {Object.keys(data).map((key) => (
                <motion.div
                  key={key}
                  onClick={() => {
                    navigate(`/store/${key}`);
                  }}
                  className="w-96 overflow-hidden bg-[#6AAEB4] rounded-xl m-4">
                  <div className="overflow-hidden justify-center items-center">
                    {data[key].map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img
                          src={item.image}
                          alt={item.store}
                          className="w-24 h-24"
                        />
                        <p>{item.store}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Four Section */}
      <section>
        <div className=" px-5 py-5 mt-10">
          <h1 className="text-3xl mx-28 font-bold">How it Works?</h1>
        </div>
        <div className="flex12">
          <div className="flex justify-center">
            {Object.keys(workdata).map((key) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.1 }}
                className="m-4 p-6 bg-[#6AAEB4] rounded-lg shadow-md text-white">
                <div className="overflow-hidden justify-center items-center py-10 ">
                  {workdata[key].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <h1>{item.h1tag}</h1>
                      <p>{item.ptag}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
