import {newsMock} from "../../mocks/newsMock"
import { useState } from "react"
import Blog from "./Blog"
const Home = () => {
    const [blogs] = useState(newsMock)
    console.log(blogs)

    return(
        <div>
            {blogs.map((blog)=>(<Blog blog={blog} key={blog.source.id}/>))}
        </div>
    )
}

export default Home