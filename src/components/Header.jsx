import React from "react";
import { Link } from "react-router-dom";
import ReactLogo from "../assets/react.svg";

export default function Header() {
  return (
    <nav className="my-4 flex gap-10 items-center">
      <img src={ReactLogo} alt="React Logo" />
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/contacts">Contact us</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <button
          onClick={() => {
            sessionStorage.clear();
            window.reload;
          }}
        >
          Logout
        </button>
      </ul>
    </nav>
  );
}
