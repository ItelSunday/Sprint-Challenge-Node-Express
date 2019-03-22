const express = require('express');
const router = express.Router();
// database
const projectDb = require('../data/helpers/projectModel');


// GET()
router.get('/', (_, res) => {
    projectDb.get()
    .then(projects => {
        res.status(200).json(projects); // POSTMANerror: .json(project)
    })
    .catch(err => {
        res.status(404).json({ message: "400.Error:Something went wrong", err});
    });
});

// GET by ID - get()
router.get('/:id', (req, res) => {
    const { id } = req.params;

    projectDb.get(id)
    .then(project => {
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: "Cannot find ID", err});
        }
    })
    .catch(err => {
        res.status(500).json({ message: "500.Error:Something went wrong", err});
    });

});


// CREATE new project - insert() 
router.post('/', (req, res) => {
    const { name, description } = req.body;

    projectDb.insert({ name, description })
    .then(newProject => {
        res.status(201).json(newProject); 
    })
    .catch(err => res.status(500).json({ message: "Add name and description" }))
});


// UPDATE - update()
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    projectDb.update(id, { name, description })
    .then(project => {
        console.log(project)
        if (project) {
            res.status(200).json({ message: `Project ${project.id} updated` });
        } else {
            res.status(404).json({ message: "Cannot find ID"})
        }
    })
    .catch(err => res.status(500).json({ message: "500.Error:Something went wrong" }));
});

// DELETE - remove()
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    projectDb.remove(id)
    .then(count => {
        console.log(count)
        if (count) {
            res.status(200).json({ message: `${count} project deleted`});
        } else {
            res.status(404).json({ message: "404 Error" });
        }
    })
    .catch(err => {
        res.status(500).json({ message: "500.Error:Something went wrong"})
    });
});


// GET() projectActions 
router.get('/:id/actions', (_, res) => {
    const { id } = req.params;

    projectDb.getProjectActions(id)
    .then(actions => {
        res.status(200).json(actions); // POSTMANerror: .json(project)
    })
    .catch(err => {
        res.status(500).json({ message: "500.Error:Something went wrong", err});
    });
});


module.exports = router;