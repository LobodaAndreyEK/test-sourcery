import React from "react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <Link to={"/posts/" + post.id}>
      <div className="border h-full rounded-xl p-2 bg-orange-100 hover:bg-orange-300 transition-all text-gray-800">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p>{post.body.slice(0, 100) + "..."}</p>
      </div>
    </Link>
  );
}
