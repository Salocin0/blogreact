
import { useEffect,useState } from "react";
import Blog from "./Blog";
const backurl = import.meta.env.VITE_BACK_URL;
const Home = () => {
  const [blogs,setBlogs] = useState([]);

  useEffect(() => {
    const fetchback = async () => {
      const response = await fetch( "http://localhost:3000/blogs");
      const data = await response.json();
      setBlogs(data.data)
      console.log(data.data);
    }

    fetchback()
  },[])
  console.log(backurl)
  return (
    <div>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Home;
