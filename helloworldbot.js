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

const fs = require('fs');

function getTweet() {
    var letterFolder = randomFolder();
    var folderPath = __dirname + '/hello-world/' + letterFolder + '/';
    
    fs.readdir(folderPath, function (err, files) {
        if (err) {
            throw err;
        }
        var file = randomFile(files);
        var hashtag = getHashtag(file);

        console.log("Today's tweet is from the #" + hashtag + " language; file: " + file);

        var filePath = __dirname + '/hello-world/' + letterFolder + '/' + file;
        var content;
        fs.readFile(filePath, 'utf8', function read(err, data) {
            if (err) {
                throw err;
            }
            content = data + ' #' + hashtag;
            console.log(content);
            tweet(content);
        });
    });
}
    

   
function tweet(content) {
    T.post('statuses/update', { status: content }, function(err, data, response) {
        console.log(data)
    })
}


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

getTweet();