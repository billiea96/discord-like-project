import React, { useEffect } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Header() {
  const [user] = useAuthState(auth);
  const [signInWithGoggle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const goToChannels = () => {
    navigate("/channels");
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithGoggle("", { prompt: "select_account" })
      .then(() => {
        goToChannels();
      })
      .catch((error) => alert(error.message));
  };

  return (
    <header className="flex items-center justify-between py-4 px-6 bg-discord_blue">
      <a href="/">
        <img
          src="https://rb.gy/it5msp"
          className="w-32 h-12 object-contain"
          alt=""
          referrerPolicy="no-referrer"
        />
      </a>
      <div className="hidden lg:flex space-x-6 text-white">
        <a href="" className="link">
          Download
        </a>
        <a href="" className="link">
          Why Discord?
        </a>
        <a href="" className="link">
          Nitro
        </a>
        <a href="" className="link">
          Safety
        </a>
        <a href="" className="link">
          Support
        </a>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none 
        hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out 
        whitespace-normal font-medium"
          onClick={!user ? signIn : goToChannels}
        >
          {!user ? "Login" : "Open Discord"}
        </button>
        <MenuIcon className="h-9 text-white cursor-pointer lg:hidden" />
      </div>
    </header>
  );
}

export default Header;
