import "./Detail.css";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
    const [country, setCountry] = useState({});
    const { id } = useParams(); 
    const [wikipedia,setWikipedia] = useState("")

    useEffect(() => {
        axios(`http://localhost:3001/countries/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCountry(data);
                    setWikipedia(`https://en.wikipedia.org/wiki/${data.name}`)
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch(error => {
                console.error(error);
                window.alert('Could not load Country´s data');
            });
    }, [id]);
   

    return (
        <div className="detail-container">
            <Link to={"/home"}><div className="detail-overlay"/></Link>
            <div className="detail-content">
                {country && Object.keys(country).length > 0 ? (
                    <div className="tarjeta">
                        <img src={country.flag} className="detailImage" alt='imagen personaje rick y morty' />
                        <div className="description">
                            <h2 className="name">{country.name}</h2>
                            <h3>Capital: {country.capital}</h3>
                            <h3>Continent: {country.continent}</h3>
                            <h3>Subregion: {country.subregion}</h3>
                            <h3>Area: {country.area}</h3>
                            <h3>Population: {country.population}</h3>
                            <h4>Wikipedia page: <a href={wikipedia}>{wikipedia}</a></h4>
                        </div>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </div>
    );
}