import { newsMock } from "../../mocks/newsMock";
import { useEffect, useState } from "react";
import Blog from "./Blog";
const Home = () => {
  const [blogs] = useState(newsMock);
  console.log(blogs);

  useEffect(() => {
    const fetchback = async () => {
      const response = await fetch( "http://localhost:3000/productos",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({})
      });
      const data = await response.json();
      console.log(data);
    }

    fetchback()
  },[])

  return (
    <div>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.source.id} />
      ))}
    </div>
  );
};

export default Home;
