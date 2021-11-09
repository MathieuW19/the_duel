const express = require('express');
const router = express.Router();

const data = require('../data/users');
const { v4: uuidv4 } = require('uuid');

router.get('/', function (req, res, next) {

  res.status(200).json({ items: data });
});

router.post('/', function (req, res, next) {
  const { uuid, lastname, firstname } = req.body;

  const user = {
    uuid: uuidv4(),
    firstname: firstname,
    lastname: lastname,
  };

  res.status(201).json({ user: user });
});

router.put('/:uuid', function (req, res, next) {

  //TODO : rechercher en BDD l'item dont l'uuid = :uuid
  //on considère qu'il s'agit du résultat de la requête en BDD dans la table humans
  const item = {};

  item.firstname = "John";//obtenu depuis la bdd
  item.lastname = "Terry";//idem


  const { firstname, lastname } = req.body;

  //mise à jour des valeurs à partir des données récupérées dans le body
  item.firstname = firstname;
  item.lastname = lastname;

  //TODO: mise à jour en BDD

  res.status(200).json(item);//réponse json avec statut 201
});

router.delete('/:uuid', function (req, res, next) {
  const uuid = req.params.uuid;//un paramètre dynamique de l'url 
  res.status(200).json({ message: "DELETE Marche" });
});

router.get('/:uuid', function (req, res, next) {
  const uuid = req.params.uuid;

  data.forEach(d => {
    if (d.uuid == uuid)
      res.json(d);
  });

});

module.exports = router;
