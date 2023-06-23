import "./Detail.css";
import {useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "./Map";
import {useDispatch, useSelector}  from "react-redux";
import * as actions from "../../redux/actions";
import News from "../News/News";

export default function Detail() {
    const { id } = useParams(); 
    const countryDetail = useSelector((state)=>state.countryDetail)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getCountryDetail(id))
    }, [id]);
   
    if(countryDetail.Activities){
        var activitiesNames = []
        countryDetail.Activities.forEach(element => {
            activitiesNames.push(element.name)
        });
        var activitiesNames = activitiesNames.join(", ")
    }

    return (
        <div className="detail-container">
                {countryDetail && Object.keys(countryDetail).length > 0 ? (
                    <div className="detail-content">
                        <div className="tarjeta">
                            <img src={countryDetail.flag} className="detailImage" alt='Bandera' /> 
                            <div className="description">
                                <h2 className="name">{countryDetail.name}</h2>
                                <h3>Capital: {countryDetail.capital}</h3>
                                <h3>Continent: {countryDetail.continent}</h3>
                                <h3>Subregion: {countryDetail.subregion}</h3>
                                <h3>Area: {countryDetail.area} km²</h3>
                                <h3>Population: {countryDetail.population}</h3>
                                {countryDetail.Activities.length?
                                <h3>Activities: {activitiesNames}</h3>:
                                <></>}
                                <h4>Wikipedia's website: <a href={`https://en.wikipedia.org/wiki/${countryDetail.name}`}>https://en.wikipedia.org/wiki/{countryDetail.name}</a></h4>
                            </div>
                        </div>
                        <Map className="mapa" latitude={countryDetail.latitude} longitude={countryDetail.longitude}/>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
                {countryDetail && Object.keys(countryDetail).length > 0 ? (
                    <News/>
                ) : (
                    <p>Cargando...</p>
                )}
                
        </div>
        
    );
}