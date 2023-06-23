import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const APPLY_FILTERS = "APPLY_FILTERS";
export const ORDER_BY_CHARACTER = "ORDER_BY_CHARACTER";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const ORDER_BY_CONTINENT = "ORDER_BY_CONTINENT";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const ORDER_BY_ACTIVITY = "ORDER_BY_ACTIVITY";
export const RESET_SEARCHTERM = "RESET_SEARCHTERM";

const url = `http://localhost:3001`;

export function getCountries() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/countries/`);
      return dispatch({
        type: GET_COUNTRIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/countries/${id}`);
      return dispatch({
        type: GET_COUNTRY_DETAIL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCountriesByName(searchName) {
    return async function (dispatch) {
      try {
        const res = await axios.get(`${url}/countries/name?name=${searchName}`);
        return dispatch({
          type: GET_COUNTRIES_BY_NAME,
          searchName:searchName,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
}

export function applyFilters(orderByCharacter,  orderByContinent, orderByPopulation,orderByActivity) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/countries/`);
      var filteringCountries = res.data
      // Aplicar el filtro orderByContinent
      if(orderByContinent!=="All"){
        filteringCountries = filteringCountries.filter((country) => country.continent.includes(orderByContinent))
      }
      
      //APLICAR FILTRO DE ACTIVIDADES ACA
      if(orderByActivity!=="Default"){
        filteringCountries = filteringCountries.filter((country) => country.Activities.find((actividad)=>actividad.name===orderByActivity))
      }
      
      // Aplicar el filtro orderByCharacter
      if(orderByCharacter==="Asc"){
        filteringCountries = filteringCountries.sort((a, b) => a.name.localeCompare(b.name))
      }else{
        filteringCountries = filteringCountries.sort((a, b) => b.name.localeCompare(a.name))
      }

      // Aplicar el filtro orderByPopulation
      if(orderByPopulation!=="Default"){
        if(orderByPopulation === "Min"){
          filteringCountries = filteringCountries.sort((a, b) => a.population - b.population)
        }else{
          filteringCountries = filteringCountries.sort((a, b) => b.population - a.population)
        }
      }

      
      return dispatch({
        type: APPLY_FILTERS,
        payload: filteringCountries,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${url}/activities/`);
      return dispatch({
        type: GET_ACTIVITIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deleteActivity(name) {
  return async function (dispatch) {
    try {
      const res = await axios.delete(`${url}/activities/`,{name});
      return dispatch({
        type: DELETE_ACTIVITY,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function resetSearchterm() {
  return {
    type: RESET_SEARCHTERM,
  };
}
