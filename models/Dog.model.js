const { Schema, model } = require("mongoose");

const dogSchema = new Schema(
  {
    name: { type: String },
    gender: { type: String, enum: ["Macho", "Hembra"] },
    age: String,
    size: String,
    location: {
      type: { type: Schema.Types.ObjectId, ref: "Shelter" },
    },
    img_url: String,
    comments: String,
    adoptedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Dog = model("Dog", dogSchema);

module.exports = Dog;
