const express = require('express');
const router = express.Router();

const data = require('../data/users');
const { v4: uuidv4 } = require('uuid');

router.get('/', function (req, res, next) {

  res.status(200).json({ items: data });
  
});

router.post('/', function (req, res, next) {
  const { lastname, firstname } = req.body;

  if (lastname === "" || firstname === "") {
    const error = new Error();
    error.status = 400;
    error.message = "Tous les champs doivent être renseignés";
    throw error;
  }

  const user = {
    uuid: uuidv4(),
    firstname: firstname,
    lastname: lastname,
  };
  data.push(user);

  res.status(201).json({ data: data });
});

router.put('/:uuid', function (req, res, next) {

  const uuid = req.params.uuid;
  const { lastname, firstname } = req.body;
  const item = data.find(d => d.uuid === uuid);

  if (lastname === "" || firstname === "") {
    const error = new Error();
    error.status = 400;
    error.message = "Tous les champs doivent être renseignés";
    throw error;
  }

  if (item !== undefined) {
    item.lastname = lastname;
    item.firstname = firstname;
    data.push(item);
    res.status(201).json({ data: data });
    
  } else {
    const error = new Error();
    error.status = 400;
    error.message = "Pas d'élément à updater";
    throw error;
  }

});

router.delete('/:uuid', function (req, res, next) {
  const uuid = req.params.uuid;

  const item = data.find(d => d.uuid === uuid);

  if (item !== undefined) {
    data.splice(data.indexOf(item), 1);
  } else {
    const error = new Error();
    error.status = 400;
    error.message = "Pas d'élément à supprimer";
    throw error;
  }

  res.status(200).json({ data: data });
});

router.get('/:uuid', function (req, res, next) {
  const uuid = req.params.uuid;

  const item = data.find(d => d.uuid === uuid);

  if (item !== undefined)
  res.status(200).json({ item: item });
  else {
    const error = new Error();
    error.status = 400;
    error.message = "Aucun élément avec ce uuid";
    throw error;
  }

});

module.exports = router;
