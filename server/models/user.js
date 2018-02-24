const mongoose = require('mongoose');
require('mongoose-type-email');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: mongoose.SchemaTypes.Email
});

var UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {UserModel};