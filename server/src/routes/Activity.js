const { Router } = require('express');
const router = Router();
const {Activity} = require('../db.js')
const {searchDatabaseActivities} = require('../controllers/createDbCountries.js')

router.post("/", async (req, res) => {
    try {
        let { name, difficulty,  duration,  season, countries} = req.body;
        if (!name || !difficulty || !duration || !season) {
            res.status(400).send("Some data is missing")
        } else {

            let nuevo = await Activity.create({name,difficulty, duration, season}) //// Crea una nueva actividad en la base de datos

            let arr = [] //Agrega los países relacionados a la actividad
            for (let i = 0; i < countries.length; i++) {
                arr[i] = await nuevo.addCountry(countries[i])
            }
            res.status(202).send("Actividad created")
        }

    } catch (error ){
        console.log(error)    
        return res.status(404).send(error.message)
    }
})

router.get("/", async (req, res) => {
    try {
        let getDbActivities= await searchDatabaseActivities()

        return res.status(200).send( getDbActivities) 
    } catch (error ){
        console.log(error)    
        return res.status(404).send(error.message)
    }
})

router.delete("/", async (req, res) => {
     let {id} = req.body
    try {
        await Activity.destroy({where:{id: id}})
        return res.status(200).json("actividad borrada")
    } catch (error ){
        console.log(error)    
        return res.status(404).send(error.message)
    }
})

module.exports = router;