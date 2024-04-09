import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/image.svg"

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState("");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newAvatar = URL.createObjectURL(file);
      setAvatar(newAvatar);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const avatarContainerClass = avatar
    ? "w-32 h-32 rounded-full overflow-hidden flex items-center justify-center mb-2"
    : "w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center mb-2";

  return (
    <>
    <nav>
    <img src={logo} alt="logo" className="m-3 fill-pink-500" onClick={()=> navigate("/")}/>
    </nav>
    <div className="flex flex-col items-center justify-center sm:h-screen bg-white">
      <div className="w-full px-8 py-12 bg-white sm:w-1/2">
        <div className="mb-6 flex flex-col">
          <h1 className="text-black text-3xl font-bold text-start mb-3">
            Welcome! Let's create your profile
          </h1>
          <p className="text-gray-500 text-start">
            Let others get to know you better! You can do these later
          </p>
        </div>
        <div className="mb-6 flex flex-col">
          <h2 className=" font-bold text-black mb-3 text-lg">Add an avatar</h2>
          <div className="sm:flex sm:gap-10 sm:justify-start sm:items-center ">
            <div className={avatarContainerClass}>
              {avatar ? (
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <span className="text-gray-500">
                  <FontAwesomeIcon icon={faCamera} />
                </span>
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="avatar-upload"
                className="text-black border  border-gray-300 rounded-md p-2 cursor-pointer font-bold text-sm hover:bg-gray-100"
              >
                Choose image
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
              <p className="text-gray-500 text-sm mt-3">
                <FontAwesomeIcon icon={faChevronRight} /> Or choose one of our
                defaults
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Add your location
          </h2>
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter a location"
            className="w-full text-lg  px-3 py-2 border-b-2 border-gray-300 :hover:none focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          className={`w-full px-3 py-2 mt-2 text-white rounded-md border-none outline-none ${
            !avatar || !location
              ? "bg-pink-200 cursor-not-allowed"
              : "bg-pink-500 cursor-pointer"
          } sm:w-1/3`}
          onClick={() => navigate("/whoUAre")}
        >
          Next
        </button>
        {avatar && location && (
          <p className=" text-sm mt-4 text-gray-500 text-start">
            or Press <span className="font-bold">RETURN</span>
          </p>
        )}
      </div>
    </div>
    </>
  );
};

export default ProfileSetup;
