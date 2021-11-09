const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/tasks', (req, res, next) => {
  res.status(200).json({message : "Test"});
});

module.exports = router;
