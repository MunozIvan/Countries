import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const ORDER_BY_CHARACTER = "ORDER_BY_CHARACTER";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const ORDER_BY_CONTINENT = "ORDER_BY_CONTINENT";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const ORDER_BY_ACTIVITY = "BY_ACTIVITY";

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

export function orderByCharacter(ordering) {
    return async function (dispatch) {
        try {
          const res = await axios.get(`${url}/countries/`);
          const orderCountries =
            ordering === "Asc"
            ? res.data.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;
                })
            : res.data.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0;
                });
          return dispatch({
            type: ORDER_BY_CHARACTER,
            payload: orderCountries,
          });
        } catch (error) {
          console.log(error.message);
        }
      };
}

export function orderByPopulation(ordering) {
    return async function (dispatch) {
        try {
          const res = await axios.get(`${url}/countries/`);
          if(ordering === "Default"){
            return dispatch({
                type: ORDER_BY_POPULATION,
                payload: res.data,
              });
          }
          const orderCountries =
          ordering === "Min"
            ? res.data.sort(function (a, b) {
                if (a.population > b.population) {
                    return 1;
                }
                if (b.population > a.population) {
                    return -1;
                }
                return 0;
                })
            : res.data.sort(function (a, b) {
                if (a.population > b.population) {
                    return -1;
                }
                if (b.population > a.population) {
                    return 1;
                }
                return 0;
                });
          return dispatch({
            type: ORDER_BY_POPULATION,
            payload: orderCountries,
          });
        } catch (error) {
          console.log(error.message);
        }
      }; 
}

export function orderByContinent(ordering) {
    return async function (dispatch) {
        try {
          const res = await axios.get(`${url}/countries/`);
          if(ordering === "All"){
            return dispatch({
                type: ORDER_BY_CONTINENT,
                payload: res.data,
              });
          }
          const orderCountries =
          res.data.filter((country) => country.continent.includes(ordering))
          return dispatch({
            type: ORDER_BY_CONTINENT,
            payload: orderCountries,
          });
        } catch (error) {
          console.log(error.message);
        }
      };
}

export function orderByActivity(payload) {
  return {
    type: ORDER_BY_ACTIVITY,
    payload,
  };
}

/*


export function postActivity(payload) {
    return async function () {
        try {
            const res = await axios.post(`${url}/activity/`, payload)
            return res;
        } catch (error) {
            console.log(error)
        }
    }
}

export function deleteActivity(id) {
   try {
      return async (dispatch) => {
       const {data} = await axios.delete(`${url}/activity/`, id)
            return dispatch({
               type: 'REMOVE_FAV',
               payload: data,
         });
         
      };
   } catch (error) {
      console.log(error.message);
   }
}

export function byOrder(payload) {
    return {
        type: BY_ODER,
        payload
    }
}

export function byPopulation(payload) {
    return {
        type: BY_POPULATION,
        payload
    }
}

export function byContinent(payload) {
    return {
        type: BY_CONTINENT,
        payload
    }
}

export function byActivity(payload) {
    return {
        type: BY_ACTIVITY,
        payload
    }
}

export function getByName(name) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${url}/countries?name=${name}`)
            return dispatch({
                type: BY_NAME,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAILURE,
                payload: error.response.data.msg
            })
        }
    }
}

export function getActivity() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${url}/activity`);
            return dispatch({
                type: GET_ACTIVITY,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}*/
