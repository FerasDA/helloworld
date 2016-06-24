# Hello World Bot

A simple twitter bot that tweets "Hello World" in different programming languages. 

Language examples used from the [hello-world](https://github.com/leachim6/hello-world) project.

## Installation

`git clone git@github.com:FerasDA/helloworldbot.git`

## Usage

1. Run `npm install` to download dependencies.
2. Create a [twitter application](https://apps.twitter.com/app/new) and get tokens/keys.
3. Open `helloworldbot.js` and replace the twitter keys/tokens with your own.
4. Set up a [cron job](https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-on-a-vps) to schedule tweets. 
  e.g. (run everyday at 5pm): `* 17 * * * node helloworldbot.js`


## Credits

Hello World Bot is written in [node.js](https://nodejs.org/en/) and uses Twitter API Client [twit](https://github.com/ttezel/twit) and generates tweets from the [hello-world](https://github.com/leachim6/hello-world) project.

Written by [Feras Deiratany](http://ferasdeiratany.com)

