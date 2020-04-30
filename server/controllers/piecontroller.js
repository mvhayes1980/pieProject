// const express = require('express');
// const router = express.Router();
const router = require('express').Router(); // These are "chained" (see above, does same thing)
const Pie = require('../db').import('../models/pie')
const validateSession = require('../middleware/validate-session');


// router.get('/', (req, res) => res.send('Pies are super great!!'))

router.get('/', (req, res) =>{
    Pie.findAll()           // a Sequelize query method to get all objects/rows stored in a table
    .then(pie => res.status(200).json(pie)) // response
    .catch(err => res.status(500).json({
        error:err
    }))
})

router.post('/', validateSession, (req, res) => {   // User not allowed to post unless validated
    const pieFromRequest = {
        nameOfPie: req.body.nameOfPie,
        baseOfPie: req.body.baseOfPie,
        crust: req.body.crust,
        timeToBake: req.body.timeToBake,
        servings: req.body.servings,
        rating: req.body.rating
    }
    Pie.create(pieFromRequest)
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json(req.errors))
})


router.get('/:name', (req, res) => {
    Pie.findOne({ where: { nameOfPie: req.params.name }})
      .then(pie => res.status(200).json(pie))
      .catch(err => res.status(500).json({ error: err}))
  })
router.put('/:id', (req, res) => {
    Pie.update(req.body, { where: { id: req.params.id }})
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json({
        error: err
 }))
})

router.delete('/:id', (req, res) => {
    Pie.destroy({
      where:{
        id: req.params.id
      }
    })
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json({
      error: err
    }))
});


module.exports = router;