import "./DetalleBlog.css";
import { useNavigate } from "react-router-dom";
const DetalleBlog = ({ blog }) => {
  const navigate = useNavigate();
  const hanldeClick = () => {
    navigate(`/`);
  };

  return (
    <>
      <div className="contenedorDetalle">
        <img src={blog.urlToImage} alt={blog.description} className="img" />
        <div className="datos">
          <h2 className="titulo">{blog.title}</h2>
          <div className="subdatos">
            <p className="autor">{blog.author}</p>
            <p className="fecha">
              {new Date(blog.publishedAt).toLocaleString("es")}
            </p>
          </div>
          <p className="descripcion">{blog.content}</p>
        </div>
      </div>
      <div>
        <button onClick={hanldeClick}>Volver</button>
      </div>
    </>
  );
};

export default DetalleBlog;
