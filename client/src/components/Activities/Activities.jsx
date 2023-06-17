import { useState } from "react";
import "./Activities.css"
import {useDispatch}  from "react-redux";
import axios from "axios";

function Activities(props){
    const [name, setName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [duration, setDuration] = useState('');
    const [season, setSeason] = useState('Spring');
    const [countries, setCountries] = useState("");

    const dispatch = useDispatch()
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      // Aquí puedes enviar los datos del formulario a través de una función o una llamada a la API
      const arrayPaises = countries.split(" ")

      try {
        await axios.post(`http://localhost:3001/activities`,{ name, difficulty ,duration, season, countries:arrayPaises,});
      } catch (error) {
        console.log(error);
      }
      // Limpia los campos del formulario después de enviar los datos
      setName('');
      setDifficulty('');
      setDuration('');
      setSeason('');
      setCountries('');
    };
  
    return (
      <div className="formulario">
        <h2 className="title">Formulario de Creación de Actividades</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name" className="etiqueta">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="difficulty" className="etiqueta">Difficulty:</label>
            <select
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
            <label htmlFor="duration" className="etiqueta">Duration:</label>
            <input
              type="text"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="season" className="etiqueta">Season:</label>
            <select
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

          <div className="form-group">
            <label htmlFor="countries" className="etiqueta">Countries:</label>
            <textarea
                id="countries"
                value={countries}
                onChange={(e) => setCountries(e.target.value.toUpperCase())}
                required
            />
            </div>

          <button type="submit">Crear Actividad</button>
        </form>
      </div>
    );
};
  
export default Activities;