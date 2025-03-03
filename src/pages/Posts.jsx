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

  const getLongestPost = () => {
    const longestPostBadName = data?.find((post) => {
      return post?.body.length > 100;
    });
    if (longestPostBadName) {
      console.log("longestPostBadName", longestPostBadName);
    }
    if (!longestPostBadName) {
      return {
        foo: "bar",
      };
    }
    return longestPostBadName;
  };

  return (
    <div>
      <h2 className="page-heading">Posts</h2>
      <div className="flex gap-4 flex-wrap">
        {data &&
          data.map((post) => (
            <div className="max-w-[360px]" key={post.id}>
              <Link to={"/posts/" + post.id}>
                <span className="border h-full rounded-xl p-2 bg-orange-100 hover:bg-orange-300 transition-all text-gray-800">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p>{post.body.slice(0, 100) + "..."}</p>
                </span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
