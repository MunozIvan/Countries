import "./Landing.css"
import { Link } from "react-router-dom";
import mundo3 from "../../assets/images/mundo3.svg"
import mundo2 from "../../assets/images/mundo2.svg"



function Landing() {
    return (
      <div className="landing">
        <div className="landing-izquierda">
          <h4 className="bienvenida">
            Welcome to my individual proyect about countries
          </h4>
          <h6 className="bienvenida-descripcion">
            This is a SPA made by Iván Muñoz and its purpose was to practice technologies for a fullstack project.
          </h6>
          <Link to={"/home"} className="bienvenida-link">
            <button className="bienvenida-boton">
              Go to the Homepage
            </button>
          </Link>
        </div> 
        <div className="lineaDivisoria"/>
        <div className="landing-derecha">
          <div className="landing-derecha-estante">
            <p className="landing-derecha-estante-descripcion">Search from 250 countries and see their information</p>
            <img className="mundo3" src={mundo3} alt="mapamundi" />
          </div>
          <div className="landing-derecha-estante">
            <img className="mundo2" src={mundo2} alt="mapamundi" />
            <p className="landing-derecha-estante-descripcion"> Create activities in your favorites countries </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Landing;