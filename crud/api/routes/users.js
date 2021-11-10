const express = require('express');
const router = express.Router();

const data = require('../data/users');
const { v4: uuidv4 } = require('uuid');
const knex = require('../knex');
const TABLE = 'users';


router.get('/', async (req, res, next) => {
  let users;

  try {
    users = await knex(TABLE).select('*');
  } catch (error) {
    next(500);
  }

  res.status(200).json({ items: users });

});

router.post('/', async (req, res, next) => {
  let users;

  req.body.uuid = uuidv4();
  knex(TABLE).insert(req.body).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
      knex.destroy();
    });
  try {
    users = await knex(TABLE).select('*');
  } catch (error) {
    next(500);
  }

  res.status(200).json({ items: users });
});

router.put('/:uuid', async (req, res, next) => {
  const uuid = req.params.uuid;
  const { lastname, firstname, email, password } = req.body;
  let users;

  try {
    await knex(TABLE).where({ uuid }).update(req.body);
  } catch (error) {
    next(500);
  }
  try {
    users = await knex(TABLE).select('*');
  } catch (error) {
    next(500);
  }

  res.status(200).json({ items: users });
});

router.delete('/:uuid', async (req, res, next) => {
  const uuid = req.params.uuid;
  let users;

  try {
    await knex(TABLE).where({ uuid }).del();
  } catch (error) {
    next(500);
  }
  try {
    users = await knex(TABLE).select('*');
  } catch (error) {
    next(500);
  }

  res.status(200).json({ items: users });
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
