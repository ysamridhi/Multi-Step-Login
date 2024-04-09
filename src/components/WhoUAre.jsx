import React, { useState } from "react";
import OptionCard from "./OptionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import designer from "../images/profile1.png";
import hiring from "../images/profile2.png";
import inspiration from "../images/profile3.png";
import logo from "../images/image.svg";

const WhyDribble = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {  
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      <nav className="flex gap-3 p-4 ">
        <h3 className="text-xl italic text-red-500 hidden sm:block">
          <img src={logo} alt="Dribbble" />
        </h3>
        <div className="bg-gray-100 p-3 ml-4 hover:bg-gray-200 rounded-md hidden sm:inline">
        <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center sm:h-screen">
        <div>
          <h1 className="font-bold text-3xl text-black text-center">
            What brings you to Dribbble?{" "}
          </h1>
          <p className="text-gray-500 mt-3 text-center">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </p>
        </div>
        <div className="mx-10 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10 ">
          <OptionCard
            image={designer}
            text="I'm a designer looking to share my work"
            description="This option is for designers who want to share their work."
            isSelected={selectedOptions.includes("designer")}
            onClick={() => handleOptionClick("designer")}
          />
          <OptionCard
            image={hiring}
            text="I'm looking to hire a designer"
            description="This option is for people who are looking to hire designers."
            isSelected={selectedOptions.includes("hiring")}
            onClick={() => handleOptionClick("hiring")}
          />
          <OptionCard
            image={inspiration}
            text="I'm looking for design inspiration"
            description="This option is for people who are looking for design inspiration."
            isSelected={selectedOptions.includes("inspiration")}
            onClick={() => handleOptionClick("inspiration")}
          />
        </div>
        <div
          className={`${
            selectedOptions.length === 0 ? "hidden" : "block"
          }  text-black font-bold mt-3`}
        >
          <p>Anything else? You can select multiple.</p>
        </div>
        <button
          className={`${
            selectedOptions.length === 0
              ? "bg-pink-200 cursor-not-allowed"
              : "bg-pink-500 cursor-pointed"
          } p-3 px-9 text-white font-bold rounded-md mt-3`}
        >
          Finish
        </button>
        <div
          className={`${
            selectedOptions.length === 0 ? "hidden" : "block"
          }  text-black font-bold mt-3`}
        >
          <p className="text-gray-400 text-sm">or Press RETURN</p>
        </div>
      </div>
    </>
  );
};

export default WhyDribble;
