import "./Home.css"
import axios from 'axios';
import { useEffect, useState} from "react";
import Card from "../Card/Card";


export default function Home() {
    const [countries,setCountries] = useState([])
    useEffect(() => {
        axios(`http://localhost:3001/countries/`)
        .then(({ data }) => {
            setCountries(data);
        }).catch((error)=>{
            window.alert(error.message)
        });
    }, []); 

   return(
      <div className='home'>
        <div className='cards'>
            {countries.map((pais)=>
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
        <div className="filtros">

        </div>
      </div>
   )
}