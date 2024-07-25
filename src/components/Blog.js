import React, { useState } from "react";
import axios from "axios";

export default function Blog() {
  const [arr, setArr] = useState([]);
  const getArray = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setArr(response.data);
  };
  return (
    <div>
      <h1>BLog application</h1>
      {arr.map((post) => (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
      <button onClick={getArray}>Get</button>
    </div>
  );
}
