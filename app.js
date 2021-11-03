const express = require('express');
// chalk allows us to set colors on messages
const chalk = require('chalk');
const debug = require('debug')('app');

// need instance of express, don't short circuit
const app = express();


// list of requires
// express is series of route -> function 


app.get('/', (req, res) => {
    res.send("Hello from my app")
} )

/* listen on port with callback
 dont want to use console.log, use debug instead
 debug only runs in debug mode */
app.listen(3000, ()=> {
    debug(`shhh its running on ${chalk.greenBright('3000')}`)
})

