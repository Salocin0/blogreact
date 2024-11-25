import { useEffect, useState } from "react";
const MisProductos = () => {
    const [page, setPage] = useState(1);
    const [productos, setProductos] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    const fetchProductos = async () => {
        try {
            const response = await fetch(`http://localhost:3000/productos/paginado?page=${page}&limit=3`);
            const responsejson = await response.json();
            console.log(responsejson);
            setProductos(responsejson.data.productos);
            setTotalPages(responsejson.totalPages);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProductos();
    }, [page])

    const handleincrementPage = () => {
        setPage(page + 1);
    }
    const handledecrementPage = () => {
        setPage(page - 1);
    }

    if(loading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>Mis Productos</h1>
            {productos?.map((producto) => (
                <div key={producto.id} style={{ border: "1px solid black" }}>
                    <h2>{producto.nombre}</h2>
                    <p>{producto.precio}</p>
                </div>
            ))}
            <div>
                <button onClick={handledecrementPage} disabled={page === 1}>Anterior</button>
                <button onClick={handleincrementPage} disabled={page == totalPages}>Siguiente</button>
            </div>
        </div>
    )
}

export default MisProductos