import "./Filters.css";
import * as actions from "../../redux/actions";
import {useDispatch}  from "react-redux";

function Filters(props){

  const dispatch = useDispatch()

  function handleFilter1Change(event){
    event.preventDefault();
    dispatch(actions.orderByCharacter(event.target.value))
  };

  const handleFilter2Change = (event) => {
    event.preventDefault();
    dispatch(actions.orderByContinent(event.target.value))
  };

  const handleFilter3Change = (event) => {
    event.preventDefault();
    dispatch(actions.orderByPopulation(event.target.value))
  };

  return (
    <div className='filters'> 
      <div>
        <label htmlFor="filter1">Sort by character:</label>
        <select id="filter1" onChange={handleFilter1Change}>
            <option value='Asc' key='Asc'>A-Z</option>
            <option value='Desc' key='Desc'>Z-A</option> 
        </select>
      </div>
      <div>
        <label htmlFor="filter2">Sort by continent:</label>
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
