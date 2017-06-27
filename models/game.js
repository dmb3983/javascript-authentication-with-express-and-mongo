var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var GameSchema = new mongoose.Schema({
    user: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true,
      trim: true
    },
    
});

module.exports = mongoose.model('Game', GameSchema);