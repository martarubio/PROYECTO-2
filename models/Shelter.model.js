const { Schema, model } = require("mongoose");

const shelterSchema = new Schema(
  {
    name: { type: String, unique: true },
    city: String,
    type: String,
    location: {
      type: {
        type: String,
      },
      coordinates: [Number],
    },
    telephone: String,
    email: String,
    comments: String,
  },
  { timestamps: true }
);

shelterSchema.index({ location: "2dsphere" });

const Shelter = model("Shelter", shelterSchema);

module.exports = Shelter;
