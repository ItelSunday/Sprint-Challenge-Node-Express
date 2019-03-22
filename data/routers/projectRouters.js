const express = require('express');
const router = express.Router();

const db = require('../helpers/projectModel');

router.get('/', (req, res) => {
        db
        .get()
        .then(project => {
            console.log(project);
            res.status(200).json(project);
        })
        .catch(() => {
            res.status(404).json({ message: 'ID not found' });
        })
});

module.exports = router;