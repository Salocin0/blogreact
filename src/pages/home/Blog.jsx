import "./Blog.css";
import { useNavigate } from "react-router-dom";
const Blog = ({ blog }) => {
    const navigate = useNavigate()
  const hanldeClick =() =>{
    navigate(`/blogs/${blog.source.id}`)
  }
    
  return (
    <div className="contenedor" onClick={hanldeClick}>
      <img src={blog.urlToImage} alt={blog.description} className="img" />
      <div className="datos">
        <h2 className="titulo">{blog.title}</h2>
        <div className="subdatos">
          <p className="autor">{blog.author}</p>
          <p className="fecha">
            {new Date(blog.publishedAt).toLocaleString("es")}
          </p>
        </div>
        <p className="descripcion">{blog.description}</p>
      </div>
    </div>
  );
};

export default Blog;
