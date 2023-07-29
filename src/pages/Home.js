import useFetch from '../hooks/useFatch';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {

    let url = "http://localhost:3001/blogs";
    let {data : blogs , loading, error} = useFetch(url);

  return (
    <div className='Home'>
      {error && <div>{error}</div>}
      {loading && <div>loading...</div>}
      {blogs && blogs.map(blog => (
        <div key={blog.id} className='card'>
            <h3>{blog.title}</h3>
            <p>posted by - {blog.author}</p>
            <Link to={`/blogs/${blog.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
