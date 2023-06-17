import "./Home.css";
import Cards from "../Cards/Cards";
import Searchbar from "../Searchbar/Searchbar";
import Filters from "../Filters/Filters";
import {useSelector}  from "react-redux";

export default function Home() {
  
  const searchTerm = useSelector((state)=>state.searchTerm)
  const countriesRedux = useSelector((state)=>state.countries)


  return (
    <div className="home">
      <h3 className="title">Home</h3>
      <Searchbar />
      {searchTerm.length?
      <h3 className="title">Searching countries by "{searchTerm}"</h3>:
      <h3 className="title">Showing all countries</h3>
      }
      <div className="home-content">
        <Cards countriesRedux={countriesRedux}/>
        <Filters/>
      </div>
    </div>
  );
}
