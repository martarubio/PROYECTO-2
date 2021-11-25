module.exports = (app) => {
  app.use("/", require("./base.routes"));
  app.use("/", require("./auth.routes"));
  app.use("/", require("./dogs.routes"));
  app.use("/", require("./shelter.routes"));
};
