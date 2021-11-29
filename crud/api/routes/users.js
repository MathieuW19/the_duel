const express = require('express');
const router = express.Router();

const data = require('../data/users');
const { v4: uuidv4 } = require('uuid');
const knex = require('../knex');
const joi = require('../model/user.validator');
const bcrypt = require('bcryptjs');
const TABLE = 'users';
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const middle = require('../middleware/Token');


function generateAccessToken(username) {
  dotenv.config();
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

router.get('/', async (req, res, next) => {
  let users;

  try {
    users = await knex(TABLE).select('*');
  } catch (error) {
    next(500);
  }

  //res.status(200).json({ items: users });

});

router.post('/', async (req, res, next) => {
  let users;

  req.body.uuid = uuidv4();
  const salt = bcrypt.genSaltSync(10);
  req.body.password = bcrypt.hashSync(req.body.password, salt);

  let test = joi.validateAsync(req.body);
  console.log(test);

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
  let users;

  const salt = bcrypt.genSaltSync(10);
  req.body.password = bcrypt.hashSync(req.body.password, salt);
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

router.get('/:uuid',middle, async (req, res, next) => {
  const uuid = req.params.uuid;
  let users;

  const token = generateAccessToken({ username: req.params.uuid });
  res.json(token); 

  try {
    users = await knex(TABLE).where({ uuid }).select('*');
  } catch (error) {
    next(500);
  }
  //res.status(200).json({ items: users });

});

module.exports = router;
