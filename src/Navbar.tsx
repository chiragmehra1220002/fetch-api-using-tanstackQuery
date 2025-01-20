
import {  Link } from "react-router-dom"
const Navbar:React.FC= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/rq">Users</Link>
    </li>
    
  </div>
  );
}
export default Navbar;