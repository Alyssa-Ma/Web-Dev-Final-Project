const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

const ash = require('express-async-handler');

/** GET ALL CAMPUSES */

router.get('/', ash(async(req, res) => {
  let campuses = await Campus.findAll({include: [Student]});
  res.status(200).json(campuses);
}));

/** GET CAMPUS BY ID*/
router.get('/:id', ash(async(req, res) => {
  let campus = await Campus.findByPk(req.params.id, {include: [Student]});
  res.status(200).json(campus);
}));

/** POST CAMPUS */

router.post('/', async(req, res) => {
  try {
    await Campus.create({name: req.body.name, address: "123 Hunter Ave"});
    return res.status(200).json("Success")
  } catch (error) {
    console.error(error)
    return res.status(500).json("server error")
  }

})

/** DELETE CAMPUS */

router.delete('/:id', async(req, res) => {
  try {
    await Campus.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json("Deleted Campus")
  } catch (error) {
    return res.status(500).json("server error")
  }
})


// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;