const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.status(200).json({message : "Tasks"});
});

router.post('/', function(req, res, next){
    const { description } = req.body;

    const task = {
        description : description,
    };

    res.status(201).json({ task: task });
});

router.put('/:uuid', function(req, res, next){
    const item = {};

    item.uuid = "1";
    item.description = "Faire la course";
    item.status = 2;
    item.created_at = "2022-11-07T00:00:00.000Z";


    const { uuid, description, status, created_at } = req.body;

    //mise à jour des valeurs à partir des données récupérées dans le body
    item.description = description;
    item.uuid = uuid;
    item.status = status;
    item.created_at = created_at;
    //TODO: mise à jour en BDD

    res.status(200).json(item);//réponse json avec statut 201
});

router.delete('/:uuid', function(req, res, next){
    const uuid = req.params.uuid;//un paramètre dynamique de l'url 
    res.status(200).json({message : "DELETE Marche"});
});

module.exports = router;
