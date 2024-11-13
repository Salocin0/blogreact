import { useState,useEffect } from "react";
const backurl = import.meta.env.VITE_BACK_URL;
import MyBlog from "./MyBlog";
const MyBlogs = () => {
    const [blogs,setBlogs] = useState([]);

    const fetchback = async () => {
        const response = await fetch( `${backurl}blogs`);
        const data = await response.json();
        setBlogs(data.data)
        console.log(data.data);
      }

    useEffect(() => {
      fetchback()
    },[])

    const handleDelete = async (id) => {
        const response = await fetch(`${backurl}blogs/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        console.log(data);
        fetchback()
    }

    return (
      <div>
        {blogs.map((blog) => (
          <MyBlog blog={blog} key={blog.id} handleDelete={handleDelete} />
        ))}
      </div>
    );
}

export default MyBlogs