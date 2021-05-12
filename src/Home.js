import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'First', body:'I was here first...', author: 'me?', id: 1},
    {title: 'Aliens', body:'Can aliens breathe air?', author: 'me?', id: 2},
    {title: 'Response', body:'Yes...', author: 'alien', id: 3}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log("effect triggered");
    console.log(blogs);
  })

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All signals" handleDelete={handleDelete} />
    </div>
   );
}
 
export default Home;