import "./Navbar.css"
import { Link } from "react-router-dom";



function Navbar() {
    return (
        <nav class="Navbar">
            <div class="navbar-left">
                <Link className="marca" to={"/home"}>Muñoz Countries</Link> 
            </div>
            <div class="navbar-right">
                <Link className="flow" to={"/home"}>Home</Link>
                <Link className="flow" to={"/"}>Landing page</Link> 
                <Link className="flow" to={"/"}>Activities</Link> 
            </div>
        </nav> 
    );
  }
  
  export default Navbar;