import "./Detail.css";
import {useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Map from "./Map";
import {useDispatch, useSelector}  from "react-redux";
import * as actions from "../../redux/actions";

export default function Detail() {
    const { id } = useParams(); 
    const countryDetail = useSelector((state)=>state.countryDetail)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getCountryDetail(id))
    }, [id]);
   

    return (
        <div className="detail-container">
            <Link to={"/home"}><div className="detail-overlay"/></Link>
                {countryDetail && Object.keys(countryDetail).length > 0 ? (
                    <div className="detail-content">
                        <div className="tarjeta">
                            <img src={countryDetail.flag} className="detailImage" alt='imagen personaje rick y morty' />
                            <div className="description">
                                <h2 className="name">{countryDetail.name}</h2>
                                <h3>Capital: {countryDetail.capital}</h3>
                                <h3>Continent: {countryDetail.continent}</h3>
                                <h3>Subregion: {countryDetail.subregion}</h3>
                                <h3>Area: {countryDetail.area}</h3>
                                <h3>Population: {countryDetail.population}</h3>
                                <h4>Wikipedia's website: <a href={`https://en.wikipedia.org/wiki/${countryDetail.name}`}>https://en.wikipedia.org/wiki/{countryDetail.name}</a></h4>
                            </div>
                        </div>
                        <Map className="mapa" latitude={countryDetail.latitude} longitude={countryDetail.longitude}/>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        
    );
}