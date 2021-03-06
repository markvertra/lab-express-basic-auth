/*jshint esversion: 6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/drinkedIn',  {useMongoClient: true});
mongoose.Promise = require('bluebird');

const userSchema = new Schema({
    username: {type: String},
    password: {type: String},
});

const User = mongoose.model('user', userSchema);
module.exports = User;
