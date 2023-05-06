const axios = require('axios');
require('dotenv').config();
colors = require('colors');

const username = process.env.USERNAME;
const token = process.env.TOKEN;
const cooldown = process.env.COOLDOWN || 60;

if (!username) {
    return console.log(`[ERROR]`.bold.red, `No username specified!`);
}

if (!token) {
    return console.log(`[ERROR]`.bold.red, `No token specified!`);
}

let attempt = 0;

const cron = require('cron');
new cron.CronJob(`*/${cooldown} * * * * *`, () => {
    attempt += 1;

    axios.post('https://discord.com/api/v9/users/@me/pomelo', { "username": username }, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    }).then((response) => {
        console.clear();
        console.log(`[SUCCESS]`.bold.green, `${username} should now be your new username, if not then restart the sniper! (Attempt ${attempt})`);
        process.exit();
    }).catch((error) => {
        console.clear();
        if (process.env?.ERROR_DETAILS?.toLowerCase() == "true") {
            console.log(error.response.data);
        }
        console.log(`[ERROR]`.bold.red, `Failed to snipe username, retrying in ${cooldown} seconds! (Attempt ${attempt})`);
    });
}, null, true).start();

console.clear();
console.log(`[SNIPER]`.bold.blue, `Starting soon!`);
