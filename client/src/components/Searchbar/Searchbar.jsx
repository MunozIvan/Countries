import "./Searchbar.css"
import { useState } from 'react'; 
import {useDispatch}  from "react-redux";
import * as actions from "../../redux/actions";

function Searchbar(props){
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actions.getCountriesByName(searchTerm))
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className="button">
        Buscar
      </button>
    </form>
  );
};
  
export default Searchbar;