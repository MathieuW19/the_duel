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

  const uuid = req.params.uuid;
  const { lastname, firstname } = req.body;

  data.forEach(d => {
    if (d.uuid == uuid) {
      d.firstname = firstname;
      d.lastname = lastname;
      res.json(d);
    }
  });
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
