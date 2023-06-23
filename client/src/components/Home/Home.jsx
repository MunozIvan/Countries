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
  const currentPage = useSelector((state)=>state.page)
  const dispatch = useDispatch()

  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countriesRedux.slice(indexOfFirstItem, indexOfLastItem);

  const isLastPage = indexOfLastItem === countriesRedux.length;
  const hasNextPage = currentItems.length >= itemsPerPage;

  useEffect(() => {
    dispatch(actions.getCountries())
  }, []); 

  const nextPage = () => {
    dispatch(actions.nextPage());
  };
  
  const prevPage = () => {
    dispatch(actions.prevPage());
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
            <div className="pagina-actual">
              {currentPage}
            </div>
            <button onClick={nextPage} disabled={!hasNextPage || isLastPage}>
              Next page
            </button>
          </div>
        </div>
        <Filters/>
      </div>
    </div>
  );
}
