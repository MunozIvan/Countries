import "./Navbar.css"
import mundo4 from "../../assets/images/mundo4.svg"
import { Link } from "react-router-dom";



function Navbar() {
    return (
        <nav className="Navbar">
            <Link className="marca" to={"/home"}>
                <div className="navbar-left">
                    <img className="mundo4" src={mundo4} alt="mapamundi" />
                    <h1 className="empresa">Muñoz Countries</h1> 
                </div>
            </Link>  
            <div className="navbar-right">
                <Link className="flow" to={"/home"}>Home</Link>
                <Link className="flow" to={"/"}>Landing page</Link> 
                <Link className="flow" to={"/activities"}>Activities</Link> 
            </div>
        </nav> 
    );
  }
  
  export default Navbar;