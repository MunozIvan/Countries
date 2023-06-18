import "./Home.css";
import Cards from "../Cards/Cards";
import Searchbar from "../Searchbar/Searchbar";
import Filters from "../Filters/Filters";
import { useState, useEffect } from "react";
import {useDispatch, useSelector}  from "react-redux";
import * as actions from "../../redux/actions";

export default function Home() {
  const searchTerm = useSelector((state)=>state.searchTerm)
  const countriesRedux = useSelector((state)=>state.countries)
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countriesRedux.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    dispatch(actions.getCountries())
  }, []); 

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="home">
      <h3 className="title">Home</h3>
      <Searchbar className="searchbarComponent" />
      <div className="home-content">
        <div className="home-content-left">
          {searchTerm.length?
          <h4 className="searchTerm">Searching countries by "{searchTerm}"</h4 >:
          <h4 className="searchTerm">Showing all countries</h4 >
          }
          <Cards currentItems={currentItems}/>
          <div className="paginado">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Previous page
            </button>
            <button onClick={nextPage} disabled={currentItems.length < itemsPerPage}>
              Next page
            </button>
          </div>
        </div>
        <Filters/>
      </div>
    </div>
  );
}
