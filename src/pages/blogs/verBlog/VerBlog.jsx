import { useParams } from "react-router-dom"
import { useState } from "react"
import { newsMock } from "../../../mocks/newsMock"
import DetalleBlog from "./DetalleBlog"
const VerBlog = () => {
    //con el id buscar el blog que hay que mostrar
    const {idblog} = useParams()

    const [blogs] = useState(newsMock)
    
    const blog = blogs[idblog-1] // array empieza en 0 y el id en 1
    console.log(blog)
    //console.log(blogs.filter((blog)=>{blog.source.id===idblog}))
    return (
        <DetalleBlog blog={blog}/>
    )
}

export default VerBlog