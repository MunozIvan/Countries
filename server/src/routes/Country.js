const { Router } = require('express');
const axios = require('axios');
const router = Router();
const {Activity, Country} = require('../db.js')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {getDbInfo, getAllCountries} = require('../controllers/createDbCountries.js')


router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params
        let country = await Country.findByPk(id, {include: {model: Activity}
        })
        if (country) {//cambie el name
            return res.status(200).send(country) 
        } else {
            return res.status(404).send(error.message)
        }  
    } catch (error){ 
        return res.status(404).send(error.message)
    }
})

router.get("/", async (req,res) => {
    try {
        const name = req.query.name
        const getApiCountry = await Country.findAll();      
        if (!getApiCountry.length ) await getAllCountries()
        let getDbCountry = await getDbInfo()
        if (name) {  
            let countries = await Country.findAll ({ where: {
                name: {[Op.iLike]: '%' + name + '%'}},
                include: {model: Activity,}}) 
                if (countries.length) {
                    return res.status(200).send(countries) 
                }else{ return res.status(404).send('There is no country')
             }        
            } 
        return res.status(200).send( getDbCountry) 
    }catch(error){
        console.log(error)    
        return res.status(404).send(error.message)
    }
}) 
    


module.exports = router;