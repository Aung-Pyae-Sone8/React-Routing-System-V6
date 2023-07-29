import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFatch";
import { useEffect } from "react";

function BlogDetail() {

    let params = useParams();
    let url = 'http://localhost:3001/blogs/'+params.id
    let { data : blog, loading, error } = useFetch(url);

    let navigate = useNavigate(); // for redirect

    useEffect(()=>{
        if(error){
            // redirect home page
            setTimeout(()=> { // if error, wait 2 seconds
                navigate('/');
            }, 2000);
        }
    },[error,navigate])
    
    return (
        <div>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blog && (
                <div>
                    <h2>{blog.title}</h2>
                    <p>Posted by - {blog.author}</p>
                    <p>{blog.body}</p>
                </div>
            )}
        </div>
    )
}

export default BlogDetail 