const { Schema, model } = require("mongoose");

const dogSchema = new Schema(
  {
    name: { type: String, unique: true },
    gender: { type: String, enum: ["Macho", "Hembra"] },
    age: String,
    size: String,
    location: {
      type: { type: String },
      //   ENLACE A CENTRO
    },
    img_url: String,
    comments: String,
    id: String,
  },
  {
    timestamps: true,
  }
);

// module.exports = mongoose.model("Dog", dogSchema);

const Dog = model("Dog", dogSchema);

module.exports = Dog;
