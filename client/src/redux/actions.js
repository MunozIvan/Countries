import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const APPLY_FILTERS = "APPLY_FILTERS";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const RESET_SEARCHTERM = "RESET_SEARCHTERM";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";

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
      return dispatch({
        type: APPLY_FILTERS,
        payload: {orderByCharacter:orderByCharacter,  orderByContinent:orderByContinent, orderByPopulation:orderByPopulation,orderByActivity:orderByActivity},
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

export function prevPage() {
  return {
    type: PREV_PAGE,
  };
}

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}


export function resetSearchterm() {
  return {
    type: RESET_SEARCHTERM,
  };
}
