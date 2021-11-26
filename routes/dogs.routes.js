const router = require("express").Router();
const Dog = require("../models/Dog.model");


router.get("/dogs-list", (req, res, next) => {

  Dog
    .find()
    .then((allDogs) => res.render("dogs/dogs-list", { allDogs }))
    .catch(err => console.log(err))

});


router.get("/create", (req, res) => res.render("dogs-create"));

router.post("/create", (req, res) => {
  const {
    name, gender, age, size, location, img_url, comments, id, adoptedBy,
  } = req.body;

  Dog.create({
    name, gender, age, size, location, img_url, comments, id, adoptedBy,
  })
    .then((createdDog) => res.redirect("/dogs-list"))
    .catch((err) => console.log(err));
});


router.get('/dogs/:id', (req, res, next) => {

  Dog.findById(req.params.id)

    .then(theDog => res.render('dogs/dog-details', { dog: theDog }))
    .catch(err => next(new Error(err)));
});
router.get("/dedicatoria", (req, res) => res.render("dedicatoria"))
router.get("/noticias", (req, res) => res.render("noticias"))


module.exports = router;


