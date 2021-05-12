import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'First', body:'I was here first...', author: 'me?', id: 1},
    {title: 'Aliens', body:'Can aliens breathe air?', author: 'me?', id: 2},
    {title: 'Response', body:'Yes...', author: 'alien', id: 3}
  ]);

  return ( 
    <div className="home">
      {blogs.map((blog) => 
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      )}
    </div>
   );
}
 
export default Home;