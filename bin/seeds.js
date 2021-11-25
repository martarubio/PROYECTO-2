const mongoose = require("mongoose");
const Dog = require("../models/Dog.model");
const Shelter = require("../models/Shelter.model");
const User = require("../models/User.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/llevame-contigo";

mongoose.connect(MONGO_URI, {});

// PONER AQUI LOS REGISTROS DE LAS 3 COLECCIONES. LUEGO EJECUTAR $ node bin/seeds.js

const dogs = [
  {
    name: "Frozen",
    gender: "Hembra",
    age: "2 años",
    size: "pequeño",
    location: "Asociación Abrazo Animal",
    img_url: "/public/images/en_adopcion/Frozen_01.jpg",
    comments:
      "FROZEN es todavía algo desconfiada en momentos puntuales con las personas, pero avanza rápidamente y una vez que se encuentra segura, se muestra tal y como es, cariñosa, agradecida y muy dulce, algo pesada incluso dándonos besitos y achuchones sin parar!!! Muy sociable y paciente con otros perros. Evita conflictos y se lleva bien con cualquier ser vivo que le pongas delante.Frozen ha dado positivo a leishmania, pero sus analíticas están perfectas. ",
  },

  {
    name: "Zambra",
    gender: "Hembra",
    age: "5 meses",
    size: "mediano",
    location: "Asociación Abrazo Animal",
    img_url: "/public/images/en_adopcion/Zambra_01.jpg",
    comments:
      "A ZAMBRA la recogimos del CPA con una avulsión de tuberosidad tibial en la pata derecha trasera. Ya esta operada y recuperándose perfectamente, aunque cuesta que haga reposo porque todo lo que quiere es jugar y pasarlo bien. Una perrita de personalidad abierta. Cariñosa y muy agradecida. Sumisa con las personas.Muy sociable y juguetona con otros perros. Activa y locuela durante los paseos, le encanta inspeccionar y curiosear a su alrededor. Se adapta rápidamente a nuevos entornos",
  },
  {
    name: "Chacho",
    gender: "Macho",
    age: "3 meses",
    size: "mediano",
    location: "Asociación las Nieves",
    img_url: "/public/images/en_adopcion/Chacho_01.jpg",
    comments:
      "CHACHO entró solo en el CPA y de allí lo recogimos nosotros, con tan solo un mes de edad, estaba aún casi mamando. Han pasado ya varias semanas y el pequeñajo se esta convirtiendo en un perrete divino, por dentro y por fuera. No sabemos muy bien la mezcla que tiene, pero es guapo a rabiar!! Cariñoso, muy listo, extrovertido pero cauteloso. Ahora empieza a descubrir el mundo alrededor de él y a disfrutar de los juegos con sus compis cachorros. Convive también con perros adultos de distintos tamaños y no les tiene ningún miedo. Un croquetito tierno y muy achuchable!!",
  },
  {
    name: "Héroe",
    gender: "Macho",
    age: "6 meses",
    size: "pequeño",
    location: "Asociación las Nieves",
    img_url: "/public/images/en_adopcion/Heroe_01.jpg",
    comments: "HÉROE no ha tenido ninguna suerte en la vida hasta ahora. Entró en el CPA con una herida muy profunda en el cuello y tiene las patitas deformadas por la falta de buena alimentación y ejercicio. Jamás podremos entender que pasa por la cabeza de las «personas» que les causan estos maltratos a seres tan inocentes e indefensos.A pesar del daño que le han hecho, Héroe es un perro que no guarda ningún rencor al ser humano, todo lo contrario, se deshace con cada caricia que le dedicas.Un ser maravilloso que se merece una familia que le quiera y le cuide como todos se merecen.",
  },
  {
    name: "Cubata",
    gender: "Hembra",
    age: "10 años",
    size: "pequeño",
    location: "Terrican",
    img_url: "/public/images/en_adopcion/Cubata_01.jpg",
    comments: "CUBATA es una perra muy simpática y extrovertida. Convive perfectamente con otros perros. Ha pasado toda su vida junto a Maddie y Snowie. Probablemente su mayor hobbie, después de recibir mimitos, sea comer!!! Es una zampona de mucho cuidado.Cubata tiene tumores mamarios en ambas cadenas, a partir de la semana que viene empezaremos con sus cirugías.Va a necesitar dos intervenciones, por lo que nos llevará unos cuantos meses tenerla completamente preparada.Pero puede salir en acogida mientras tanto.",
  }
];
const shelters = [
  {
    name: "Asociación Abrazo Animal",
    city: "Las Rozas",
    location: {
      type: "Point",
      coordinates: [40.55022757484458, - 3.8933768478707917]
    },
    telephone: "0014500",
    email: "ayuda@abrazoanimal.org",
    comments:
      "Abrazo Animal está legalmente constituida y debidamente inscrita en el Registro de Asociaciones de la Comunidad de Madrid nº 35.433.Título de Entidad Colaboradora de la Comunidad de Madrid, nº C059-CM.N.I.F.: G87179644. Las Matas (Las Rozas, Madrid)",
  },

  {
    name: "Asociación las Nieves",
    city: "Navalcarnero",
    location: {
      type: "Point",
      coordinates: [40.2867253131319, -4.016682619574731]
    },
    telephone: "5550000",
    email: "ayuda@lasnieves.org",
    comments:
      "La Asociación LAS NIEVES es una organización sin ánimo de lucro, totalmente independiente y sin ningún tipo de convenio o subvención por parte de las diferentes administraciones",
  },
  {
    name: "Terrican",
    city: "Villaviciosa de Odón",
    location: {
      type: "Point",
      coordinates: [40.36585540390226, -3.914728262175414]
    },
    telephone: "007890000",
    email: "ayuda@terrican.org",
    comments:
      "TERRICAN ADOPTA nace en el año 2019 fruto de la inquietud de un grupo de personas comprometidas con los animales para ofrecer un futuro mejor a aquellos amigos que por diferentes circunstancias han sido abandonados por sus dueños y sufren de maltrato, indiferencia y abandono.",
  },
];
const users = [
  {
    username: "MARTA",
    email: "martarrubio@telefonica.net",
    passwordHash:
      "$2a$10$4PdWdhuAnYt/t8VOUWDOzelEkMcfn1ZU3mM5CPgM3JYItAxlMeDdS",
  },
];

// Dog.create(dogs)
//   .then((dogs) => console.log(`Created ${dogs.length} dogs!`))
//   .catch((err) => console.log("Error creating dogs", err));

Shelter.create(shelters)
  .then((shelters) => console.log(`Created ${shelters.length} shelters!`))
  .catch((err) => console.log("Error creating shelters"));

// User.create(users)
//   .then((users) => console.log(`Created ${users.length} users!`))
//   .catch((err) => console.log("Error creating users"));
