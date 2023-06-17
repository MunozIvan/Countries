const initialState = {
  countries: [],
  countryDetail: {},
  searchTerm:"",
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        searchTerm:"",
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
        searchTerm:action.searchName,
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
            countries: action.payload
        }
    case "ORDER_BY_ACTIVITY":
      const allActivities = state.allActivities;
      const activityFilter =
        action.payload === "All"
          ? allActivities.filter((e) => e.activities.length > 0)
          : allActivities.filter((c) =>
              c.activities.find(
                (element) => element.name.toLowerCase() === action.payload
              )
            );
      return {
        ...state,
        countries: activityFilter,
      };
    default:
      return state;
  }
};

export default rootReducer;
