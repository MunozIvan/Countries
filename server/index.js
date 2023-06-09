const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const { getApiCountries } = require("./src/controllers/createDbCountries")
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  const allCountries = Country.findAll();
  if(!allCountries.length){
    getApiCountries() //Carga la base de datos con la info de la api
    console.log('DB creado')
  }
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
