import React, { useEffect, useState } from "react";
import Post from "../components/Post";

export default function Posts() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 10)));
  }, []);

  // write some bad code with low quality
  const getSomeData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data.slice(0, 10);
  };

  const test = () => {
    console.log("test");
  };

  const asd = () => {
    if (dummyRandom > 0.5) {
      console.log("asd");
    } else {
      console.log("asd2");
    }
  };

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
