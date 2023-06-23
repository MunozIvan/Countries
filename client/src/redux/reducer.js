const initialState = {
  page:1,
  allCountries:[],
  countries: [],
  activities: [],
  countryDetail: {},
  searchTerm: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        searchTerm: "",
        countries: action.payload,
        allCountries: action.payload,
      };
    case "GET_COUNTRY_DETAIL":
      return {
        ...state,
        countryDetail: action.payload,
      };
    case "GET_COUNTRIES_BY_NAME":
      return {
        ...state,
        searchTerm: action.searchName,
        countries: action.payload,
      };
    case "APPLY_FILTERS":
      console.log(action.payload)

      var filteringCountries = [...state.allCountries]
      // Aplicar el filtro orderByContinent
      if(action.payload.orderByContinent!=="All"){
        filteringCountries = filteringCountries.filter((country) => country.continent.includes(action.payload.orderByContinent))
      }
      
      //APLICAR FILTRO DE ACTIVIDADES ACA
      if(action.payload.orderByActivity!=="Default"){
        filteringCountries = filteringCountries.filter((country) => country.Activities.find((actividad)=>actividad.name===action.payload.orderByActivity))
      }
      
      // Aplicar el filtro orderByCharacter
      if(action.payload.orderByCharacter==="Asc"){
        filteringCountries = filteringCountries.sort((a, b) => a.name.localeCompare(b.name))
      }else{
        filteringCountries = filteringCountries.sort((a, b) => b.name.localeCompare(a.name))
      }

      // Aplicar el filtro orderByPopulation
      if(action.payload.orderByPopulation!=="Default"){
        if(action.payload.orderByPopulation === "Min"){
          filteringCountries = filteringCountries.sort((a, b) => a.population - b.population)
        }else{
          filteringCountries = filteringCountries.sort((a, b) => b.population - a.population)
        }
      }
      return {
        ...state,
        countries: filteringCountries,
        page:1,
        searchTerm: "",
      };
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };
    case "DELETE_ACTIVITIES":
      return {
        ...state,
      };
    case "RESET_SEARCHTERM":
      return {
        ...state,
        searchTerm: "",
      };
      case "PREV_PAGE":
      return {
        ...state,
        page: state.page-1,
      };
      case "NEXT_PAGE":
      return {
        ...state,
        page: state.page+1,
      };
    default:
      return state;
  }
};

export default rootReducer;
