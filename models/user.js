const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true, trim: true, minlength: 3 },
  lastName: { type: String, required: true, trim: true, minlength: 3 },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  contact: { type: String, required: false },

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

