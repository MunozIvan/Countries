import "./Cards.css"
import { useEffect} from "react";
import Card from "../Card/Card";
import {useDispatch}  from "react-redux";
import * as actions from "../../redux/actions";

function Cards(props){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getCountries())
    }, []); 
    
    
    return (
        <div className='cards'>
            {props.currentItems.map((pais)=>
            <Card
            key={pais.id}
            id={pais.id}
            name={pais.name}
            flag={pais.flag}
            continent={pais.continent}
            capital={pais.capital}
            subregion={pais.subregion}
            area={pais.area}
            population={pais.population}
            />
            )}
        </div>
    );
  };
  
  export default Cards