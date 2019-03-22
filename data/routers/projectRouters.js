const express = require('express');
const router = express.Router();

const db = require('../helpers/projectModel');

router.get('/:id', (req, res) => {
    const id = req.params.id;
        db
        .get(id)
        .then(project => {
            console.log(project);
            res.status(200).json(project);
        })
        .catch();
});

module.exports = router;