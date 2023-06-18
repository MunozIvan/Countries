import "./Filters.css";
import * as actions from "../../redux/actions";
import {useDispatch,useSelector}  from "react-redux";
import { useEffect} from "react";

function Filters(props){

  const activities = useSelector((state)=>state.activities)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getActivities())
  }, []); 

  function handleFilter1Change(event){
    event.preventDefault();
    dispatch(actions.orderByCharacter(event.target.value))
    dispatch(actions.resetSearchterm())
  };

  const handleFilter2Change = (event) => {
    event.preventDefault();
    dispatch(actions.orderByContinent(event.target.value))
    dispatch(actions.resetSearchterm())
  };

  const handleFilter3Change = (event) => {
    event.preventDefault();
    dispatch(actions.orderByPopulation(event.target.value))
    dispatch(actions.resetSearchterm())
  };

  const handleFilter4Change = (event) => {
    event.preventDefault();/*
    dispatch(actions.orderByPopulation(event.target.value))*/
    if(event.target.value!=="Default"){
      let countries = activities.find((element) => element.name=== event.target.value).Countries
      dispatch(actions.orderByActivity(countries))
    }else{
      dispatch(actions.getCountries())
    }
    dispatch(actions.resetSearchterm())
  };

  return (
    <div className='filters'> 

      <div>
        <label htmlFor="filter2">Filter by continent:</label>
        <select id="filter2" onChange={handleFilter2Change}>
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
        <label htmlFor="filter4">Filter by activity:</label>
        <select id="filter4" onChange={handleFilter4Change}>
          <option value="Default">Default</option>
          {activities.map((activity)=>
            <option value={activity.name} key={activity.name}>{activity.name}</option>
            )}
        </select>
      </div>
    
      <div>
        <label htmlFor="filter1">Sort by character:</label>
        <select id="filter1" onChange={handleFilter1Change}>
            <option value='Asc' key='Asc'>A-Z</option>
            <option value='Desc' key='Desc'>Z-A</option> 
        </select>
      </div>
      
      <div>
        <label htmlFor="filter3">Sort by population:</label>
        <select id="filter3" onChange={handleFilter3Change}>
          <option value="Default">Default</option>
          <option value='Max' key='Max'>Max population</option>
          <option value='Min' key='Min'>Min population</option>
        </select>
      </div>
      
    </div>
  );
};

export default Filters;
