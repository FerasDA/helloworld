var TWITTER_CONSUMER_KEY = 'ENTER KEY HERE';
var TWITTER_CONSUMER_SECRET = 'Enter SECRET HERE';
var TWITTER_ACCESS_TOKEN = 'ENTER TOKEN HERE';
var TWITTER_ACCESS_TOKEN_SECRET = 'ENTER TOKEN SECRET HERE';

var Twit = require('twit');

var T = new Twit({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token: TWITTER_ACCESS_TOKEN,
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
});

console.log('hello world bot is running...');

function randomFolder() {
    var possible = "#abcdefghijklmnopqrstuvwxyz";
    return possible.charAt(Math.floor(Math.random() * possible.length));
}

function randomFile(files) {
    return files[Math.floor(Math.random() * files.length)];
}

function getHashtag(file) {
    return file.replace(/\.[^/.]+$/, "");
}
