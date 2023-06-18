const initialState = {
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
    case "ORDER_BY_CHARACTER":
      return {
        ...state,
        countries: action.payload,
      };
    case "ORDER_BY_POPULATION":
      return {
        ...state,
        countries: action.payload,
      };
    case "ORDER_BY_CONTINENT":
      return {
        ...state,
        countries: action.payload,
      };
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };
    case "ORDER_BY_ACTIVITY":
      return {
        ...state,
        countries: action.payload,
      };
    case "RESET_SEARCHTERM":
      return {
        ...state,
        searchTerm: "",
      };
    default:
      return state;
  }
};

export default rootReducer;
