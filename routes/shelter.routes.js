const router = require("express").Router();
const Shelter = require("../models/Shelter.model");


router.get("/index-shelters", (req, res, next) => {
  Shelter.find()

    .then((allShelters) =>
      res.render("shelters/index-shelters", { allShelters })
    )
    .catch((err) => console.log(err));
});

router.get("/casa_acogida", (req, res) => res.render("casa_acogida"))
router.get("/voluntario_albergue", (req, res) => res.render("voluntario_albergue"))
router.get("/donativo", (req, res) => res.render("donativo"))


router.get("/create", (req, res) => res.render("shelters-create"));

router.post("/create", (req, res) => {
  const { name, type, city, location, telephone, email, comments } = req.body;
  Shelter.create({ name, type, city, location, telephone, email, comments })
    .then((createdShelter) => res.redirect("/shelters"))
    .catch((err) => console.log(err));
});

router.get('/shelter-map/:id', (req, res, next) => {

  Shelter.findById(req.params.id)
    .then(theShelter => res.render('shelters/shelter-map', { shelter: theShelter }))
    .catch(err => next(new Error(err)));
});

router.get("/shelters/api/:id", (req, res, next) => {
  Shelter.findById(req.params.id)
    .then((allShelters) =>
      res.json({ allShelters })
    )
    .catch((err) => console.log(err));
});





module.exports = router;


