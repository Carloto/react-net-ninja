import { useState } from "react";
import {useHistory} from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('alien');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog) 
    }).then(() => {
      console.log('new signal sent');
      setIsPending(false);
      history.push('/');
    });
  }

  return ( 
    <div className="create">
      <h2>Send a New Signal</h2>
      <form onSubmit={handleSubmit}>
        <label>Signal title:</label>
        <input type="text" required value={title} onChange={e => setTitle(e.target.value)}/>
        <label>Signal body:</label>
        <textarea required value={body} onChange={e => setBody(e.target.value)}></textarea>
        <label>Signal author:</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="me?">me?</option>
          <option value="alien">alien</option>
        </select>
        {!isPending && <button>Send Signal</button>}
        {isPending && <button disabled>Sending Signal...</button>}
      </form>
    </div>
   );
}
 
export default Create;