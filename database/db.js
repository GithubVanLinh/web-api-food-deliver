
var mongoose = require('mongoose');

const url = process.env.DB_LocalHost || process.env.url;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

module.exports = mongoose;
