const { Schema, model } = require("mongoose");

const shelterSchema = new Schema({
  name: { type: String, unique: true },
  location: {
    type: {
      type: String,
    },
    coordinates: [Number],

    telephone: String,
    email: String,
    // dogs-for-adoption: ENLACE A PERROS

    comments: String,
  },

  timestamps: true,
});

dogSchema.index({ location: "2dsphere" });

// module.exports = mongoose.model("Dog", dogSchema);

const Shelter = model("Shelter", shelterSchema);

module.exports = Shelter;
