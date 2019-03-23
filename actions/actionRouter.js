const express = require('express');
const router = express.Router();
// database
const actionDb = require('../data/helpers/actionModel');


// GET() ACTIONS
router.get('/', (_, res) => {
    actionDb.get()
    .then(actions => {
        res.status(200).json(actions); // POSTMANerror: .json(action)
    })
    .catch(err => {
        res.status(404).json({ message: "400.Error:Something went wrong", err});
    });
});

// GET ACTIONS by ID - get()
router.get('/:id', (req, res) => {
    const { id } = req.params;

    actionDb.get(id)
    .then(action => {
        if (action) {
            res.status(200).json(action);
        } else {
            res.status(404).json({ message: "Cannot find ID", err});
        }
    })
    .catch(err => {
        res.status(500).json({ message: "500.Error:Something went wrong", err});
    });

});


// CREATE new action - insert() 
router.post('/', (req, res) => {
    const { project_id, description, notes } = req.body;

    actionDb.insert({ project_id, description, notes })
    .then(newAction => {
        res.status(201).json(newAction); 
    })
    .catch(err => res.status(500).json({ message: "Add project and description" }))
});


// UPDATE ACTION - update()
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { project_id, description, notes  } = req.body;

    actionDb.update(id, { project_id, description, notes })
    .then(action => {
        console.log(action)
        if (action) {
            res.status(200).json({ message: `Action ${action.id} updated` });
        } else {
            res.status(404).json({ message: "Cannot find ID"})
        }
    })
    .catch(err => res.status(500).json({ message: "500.Error:Something went wrong" }));
});

// DELETE - remove()
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    actionDb.remove(id)
    .then(count => {
        if (count) {
            res.status(200).json({ message: `${count} action deleted`});
        } else {
            res.status(404).json({ message: "404 Error" });
        }
    })
    .catch(err => {
        res.status(500).json({ message: "500.Error:Something went wrong"})
    });
});






module.exports = router;