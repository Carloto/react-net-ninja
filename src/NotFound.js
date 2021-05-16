import { Link } from "react-router-dom"

const NotFound = () => {
  return ( 
    <div className="not-fou">
      <h2>Sorry</h2>
      <p>That page was abducted by aliens</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
   );
}
 
export default NotFound;