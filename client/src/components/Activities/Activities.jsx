import { useState, useEffect } from "react";
import "./Activities.css";
import axios from "axios";
import activity1 from "../../assets/images/activity1.svg"
import activity2 from "../../assets/images/activity2.svg"
import {useDispatch, useSelector}  from "react-redux";
import * as actions from "../../redux/actions";
import DeleteActivity from "./DeleteActivity";


function validate(activityName,duration,errors,setErrors){/*
  if(activityName.length>=30){
    setErrors({...errors,activityName:"Activity name must be lower than 30"})
  }else{
    setErrors({...errors,activityName:""})
  }*/

  if((duration>=25)){
    setErrors({...errors,duration:"Duration must be lower than 25"})
  }else{
    setErrors({...errors,duration:""})
  }
}


function Activities(props) {

  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("1");
  const [duration, setDuration] = useState("");
  const [season, setSeason] = useState("Spring");
  const [countries, setCountries] = useState([]);

  const [errors,setErrors] = useState({
    activityName:"",
    duration:""
  })

  const activities = useSelector((state)=>state.activities)

  const allCountries = useSelector((state)=>state.allCountries)

  const dispatch = useDispatch()


  ////////////////////CREATE HANDLERS//////////////////////////////

  const handleNameChange = (e) => {
    setName(e.target.value)
    if(e.target.value.length>=30){
      setErrors({...errors,activityName:"Activity name must be lower than 30 characters"})
    }else{
      setErrors({...errors,activityName:""})
    }
    //validate(e.target.value,duration,errors,setErrors)
  };

  const handleDurationChange = (e) => {
    const inputDuration = e.target.value;
    if ((parseInt(inputDuration) > 0)|| e.target.value==="") {
      setDuration(inputDuration);
    }

    validate(name,e.target.value,errors,setErrors)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(errors.activityName.length>0 || errors.duration.length>0){
      return window.alert("Please check form errors");
    }


    if(activities.find((element) => element.name=== name)){
      return window.alert("That activity already exists")
    }
    
    const parsedDuration = parseInt(duration)

    try {
      await axios.post(`http://localhost:3001/activities`, {
        name,
        difficulty,
        duration:parsedDuration,
        season,
        countries,
      });

      await dispatch(actions.getActivities());

    } catch (error) {
      console.log(error);
    }

    // Limpia los campos del formulario después de enviar los datos
    setName("");
    setDifficulty("");
    setDuration("");
    setSeason("");
    setCountries("");

    window.alert("Activity created");
  };

  return (
    <div className="activities">

      <div className="activities-create">
        <div className="formulario">
          <h2 className="title">Activity creation form</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="etiqueta">
                Name:
              </label>
              <input
                className="input-text"
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                placeholder="Activity name"
              />
              <span>{errors.activityName}</span>
            </div>

            <div className="form-group">
              <label htmlFor="difficulty" className="etiqueta">
                Difficulty:
              </label>
              <select
                className="input-select"
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                required
              >
                <option value="1">No difficulty</option>
                <option value="2">Easy</option>
                <option value="3">Moderate</option>
                <option value="4">Hard</option>
                <option value="5">For experts only</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="duration" className="etiqueta">
                Duration:
              </label>
              <input
                className="input-text"
                type="number"
                id="duration"
                value={duration}
                onChange={handleDurationChange}
                placeholder="In hours"
                required
              />
              <span>{errors.duration}</span>
            </div>
            <div className="form-group">
              <label htmlFor="season" className="etiqueta">
                Season:
              </label>
              <select
                className="input-select"
                id="season"
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                required
              >
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
              </select>
            </div>

            <div className="form-group">{/*
              <label htmlFor="countries" className="etiqueta">
              Countries:
            </label>
            <input
              className="input-text"
              type="text"
              id="countries"
              value={countries}
              onChange={(e) => setCountries(e.target.value.toUpperCase())}
              placeholder="Add id of the countries separated with spaces"
              required
            />
          */
            }
            <label htmlFor="countries" className="etiqueta">
                Countries:
              </label>
              <select
                className="input-select"
                id="countries"
                onChange={(e) => setCountries([...countries,e.target.value])}
                required
              >
                {allCountries.length&&allCountries.map((country)=>(
                  <option value={country.id}>{country.name}</option>
                ))}
              </select>
              <ul>
                {countries.map((country)=>(
                  <li>{country}</li>
                ))}
              </ul>
             </div> 


            <button type="submit" className="crear-actividad">
              Add Activity
            </button>
          </form>
        </div>
        <div className="activities-derecha">
            <div className="activities-derecha-estante">
              <p className="activities-derecha-estante-descripcion">Here you can add activities to our database</p>
              <img className="activity1" src={activity1} alt="activity" />
            </div>
            <div className="activities-derecha-estante">
              <img className="activity1" src={activity2} alt="activity" />
              <p className="activities-derecha-estante-descripcion">Remember to put the country id</p>
            </div>
          </div>
      </div>

      <DeleteActivity/>

    </div>
  );
}

export default Activities;
