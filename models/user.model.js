const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    tutor: {
      type: Boolean,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    firstname: {
      type: String,
      required: true,
      minlength: 3
    },
    lastname: {
      type: String,
      required: true,
      minlength: 3
    },
    timezone: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: false
    },
    contacts: {
      type: String,
      required: true
    },
    minutes: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
