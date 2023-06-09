const axios = require('axios');
const {Activity, Country} = require('../db.js')
const URL ='/server/api/db.json'

const getApiCountries = async () => {//Carga la base de datos con la info de la api
  const apiCountriesResponse = await axios.get('http://localhost:5000/countries');
    var apiCountries = apiCountriesResponse.data.map((pais) => {
      return {
        id: pais.cca3,
        name: pais.name.common,
        flag: pais.flags.svg,
        continent: pais.continents ? pais.continents.join("-") : 'Not found',
        capital: pais.capital ? pais.capital.join("-") : 'Not found',
        subregion: pais.subregion? pais.subregion : pais.continents.join("-"),
        area: pais.area,
        population: pais.population
      }
    })
    await Country.bulkCreate(apiCountries);
}

const getDbInfo = async () => {
  return await Country.findAll(
      {
          include: {
              model: Activity,
          },
          order:  [['name', 'ASC']],
      })}

const getAllCountries = async () => {
  const apiInfo = await getApiCountries()
  const dbInfo = await getDbInfo()
  const allInfo = apiInfo.concat(dbInfo)
  return allInfo
}

module.exports = {
  getApiCountries,
  getDbInfo,
  getAllCountries,
};