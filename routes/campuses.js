const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

const ash = require('express-async-handler');

// router.get('/', function(req, res, next) {
//   Campus.findAll({include: [Student]}) // this is a JOIN;
//     .then(campuses => res.status(200).json(campuses))
//     .catch(err => next(err))
// });

router.get('/', ash(async(req, res) => {
  let campuses = await Campus.findAll({include: [Student]});
  res.status(200).json(campuses);
}));

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;