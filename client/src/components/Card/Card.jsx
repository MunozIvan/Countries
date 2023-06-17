import "./Card.css"
import {Link} from "react-router-dom"

function Card(props){
    const {
      id,
      name,
      flag,
      capital,
    } = props;
  
    return (
      <div className="card">
        <Link className="linkDetail" to={`/countries/${id}`} >  
            <img src={flag} alt={name} />
            <div className="linkDetail-datos">
              <h2>{name}</h2>
              <p>Capital: {capital}</p>
            </div>
        </Link>
      </div>
    );
  };
  
  export default Card;