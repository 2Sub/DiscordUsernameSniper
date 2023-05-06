# Discord Username Sniper
This is for the new Discord username system, the feature isn't out yet but if you want to be prepared then this sniper may be useful for you.

## ⚠️ Caution
We recommend keeping the cooldown at a reasonable time, if you snipe too often then you could either be rate-limited or Discord may notice the activity coming from your account and decide to take action.

    We do not take responsibility for whatever happens to your account.

## Installation
#### You can either follow this guide or use the `run.bat` file provided (automatically installs and runs the sniper).
This requires [Node.js](https://nodejs.org/en/download) and npm to be installed. Once you have those installed, follow these steps:

    Clone this repository to your local machine.
    Navigate to the project directory in your terminal.
    Run `npm install` to install the required dependencies.

## Usage
#### You can either follow this guide or use the `run.bat` file provided (automatically installs and runs the sniper).
To use the sniper, follow these steps:

    Navigate to the project directory in your terminal.
    Run `node index.js` to start the sniper.
    The program will begin sniping the username based on the cooldown set.
    If the sniper successfully snipes the username, it will exit. Otherwise, it will keep running and attempting to snipe the username.

## Configuration
You'll need to configure this by setting up the .env file. Here's the variables you can configure:

    TOKEN: The user token for the account you want to use.
    USERNAME: The username that you want to snipe.
    COOLDOWN (Optional): The cooldown period in seconds between each attempt.
    ERROR_DETAILS (Optional): Logs more specific error messages rather than the default generic one.

Make sure to save the changes to the .env file after you've configured it.

#### This is not the best code, but we believe it serves its purpose of sniping usernames.
