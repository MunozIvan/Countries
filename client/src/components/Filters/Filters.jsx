import "./Filters.css";
import * as actions from "../../redux/actions";
import {useDispatch,useSelector}  from "react-redux";
import { useEffect, useState} from "react";

function Filters(props){

  const activities = useSelector((state)=>state.activities)
  const dispatch = useDispatch()

  const [continent, setContinent] = useState("All");
  const [activity, setActivity] = useState("Default");
  const [character, setCharacter] = useState("Asc");
  const [population, setPopulation] = useState("Default");

  useEffect(() => {
    dispatch(actions.getActivities())
  }, []); 

  const handleContinentChange = (event) => {
    event.preventDefault();
    setContinent(event.target.value)
    dispatch(actions.applyFilters(character,event.target.value,population,activity))
    console.log(continent,activity,population,character);
    dispatch(actions.resetSearchterm())
  };

  const handleActivityChange = (event) => {
    event.preventDefault();
    
    setActivity(event.target.value)
    dispatch(actions.applyFilters(event.target.value,continent,population,event.target.value))
    console.log(continent,activity,population,character);
    dispatch(actions.resetSearchterm())
  };

  function handleCharacterChange(event){
    event.preventDefault();
    setCharacter(event.target.value)
    dispatch(actions.applyFilters(event.target.value,continent,population,activity))
    console.log(continent,activity,population,character);
    dispatch(actions.resetSearchterm())
  };

  const handlePopulationChange = (event) => {
    event.preventDefault();

    dispatch(actions.applyFilters(character,continent,event.target.value,activity))
    console.log(continent,activity,population,character);
    dispatch(actions.resetSearchterm())
  };

  

  return (
    <div className='filters'> 

      <div>
        <label htmlFor="filterContinent">Filter by continent:</label>
        <select id="filterContinent" onChange={handleContinentChange}>
            <option value='All' key='All'>All continents</option>
            <option value='Africa' key='Africa'>Africa</option>
            <option value='Antarctica' key='Antarctica'>Antarctica</option>
            <option value='Asia' key='Asia'>Asia</option>
            <option value='Europe' key='Europe'>Europe</option>
            <option value='North America' key='NorthAmerica'>North America</option>
            <option value='Oceania' key='Oceania'>Oceania</option>
            <option value='South America' key='SouthAmerica'>South America</option>
        </select>
      </div>

      <div>
        <label htmlFor="filterActivity">Filter by activity:</label>
        <select id="filterActivity" onChange={handleActivityChange}>
          <option value="Default">Default</option>
          {activities.map((activity)=>
            <option value={activity.name} key={activity.name}>{activity.name}</option>
            )}
        </select>
      </div>
    
      <div>
        <label htmlFor="SorterCharacter">Sort by character:</label>
        <select id="SorterCharacter" onChange={handleCharacterChange}>
            <option value='Asc' key='Asc'>A-Z</option>
            <option value='Desc' key='Desc'>Z-A</option> 
        </select>
      </div>
      
      <div>
        <label htmlFor="SorterPopulation">Sort by population:</label>
        <select id="SorterPopulation" onChange={handlePopulationChange}>
          <option value="Default">Default</option>
          <option value='Max' key='Max'>Max population</option>
          <option value='Min' key='Min'>Min population</option>
        </select>
      </div>
      
    </div>
  );
};

export default Filters;
