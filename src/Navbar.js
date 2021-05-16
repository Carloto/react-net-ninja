import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Aliens and other real creatures</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Signal</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;