const express = require('express');
const Model = require('../models/userModel');

const router = express.Router();

router.post('/add', (req, res) => {

    const model = new Model(req.body);
    model.save()
        .then(data => {
            console.log('data successfully saved', data);
            res.status(200).json({ message: 'success' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyusername/:username', (req, res) => {

    Model.findOne({username : req.params.username})
        .then(data => {
            console.log('data successfully fetched', data);
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})


module.exports = router;