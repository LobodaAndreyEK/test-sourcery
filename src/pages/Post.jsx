import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SinglePost() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return data ? (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4 uppercase">{data.title}</h2>
      <p>{data.body}</p>
      <span>Author: {data.userId}</span>
      <button
        className="self-start bg-amber-800 text-white rounded-md p-3 border border-green-50"
        onClick={() => navigate("/posts")}
      >
        Back to posts
      </button>
    </div>
  ) : null;
}
