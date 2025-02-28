import React, { useEffect, useState } from "react";
import Post from "../components/Post";

export default function Posts() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 10)));
  }, []);

  return (
    <div>
      <h2 className="page-heading">Posts</h2>
      <div className="flex gap-4 flex-wrap">
        {data &&
          data.map((post) => (
            <div className="max-w-[360px]" key={post.id}>
              <Post post={post} />
            </div>
          ))}
      </div>
    </div>
  );
}
