const { Router } = require('express');
const router = Router();
const {Activity, Country} = require('../db.js')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {searchDatabaseInfo, getAllCountries} = require('../controllers/createDbCountries.js')

router.get("/", async (req,res) => {// Busca todos los países
    try {
        let getDbCountry = await searchDatabaseInfo()

        return res.status(200).send( getDbCountry) 
    }catch(error){
        console.log(error)    
        return res.status(400).send(error.message)
    }
}) 

router.get("/name", async (req, res) => { //IMPORTANTE Ésta funcion tiene que estár declarada antes que el params de id ya que esa es más general y toma los casos de esta ruta

    try {
        const name = req.query.name.toLowerCase()
        const getApiCountry = await Country.findAll();      
        if (!getApiCountry.length ){
            await getAllCountries()
        } 
        let getDbCountry = await searchDatabaseInfo()
        if (name) {  
            let countries = await Country.findAll ({ where: {
                name: {[Op.iLike]: '%' + name + '%'}},
                include: {model: Activity,}}) 
                if (countries.length) {
                    return res.status(200).send(countries) 
                }else{ 
                    return res.status(404).send('There is no country in the database')
                }        
            } 
        return res.status(200).send( getDbCountry) 
    }catch(error){
        console.log(error)
        return res.status(400).send(error.message)
    }
})

router.get("/:id", async (req, res) => { // Busca país por id
    try {
        const {id} = req.params
        let country = await Country.findByPk(id, {include: {model: Activity}}) 

        if (country) {
            return res.status(200).send(country) 
        } else {
            return res.status(404).send(error.message)
        }  
    }catch (error){ 
        return res.status(404).send("ID not found")
    }
})

module.exports = router;