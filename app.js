const express = require('express');
// chalk allows us to set colors on messages
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
//node package path, comes with node
const path = require('path')


const PORT = process.env.PORT || 3000

// need instance of express, don't short circuit
const app = express();
const sessionsRouter = require('./src/views/routers/sessionsRouter.js');

// use is middleware - morgan combined all info. tiny 
app.use(morgan('tiny'));

//static file allows serving up to browser - telling to look in "public" directory
//this will look for index.html, with no index.html, will move onto index.ejs
app.use(express.static(path.join(__dirname, '/public/')))

app.set('views', "./src/views");
app.set('view engine', 'ejs');

app.use('/sessions', sessionsRouter)

// express is series of route -> function 
app.get('/', (req, res) => {
    res.render('index', { title: 'Globomantics', data: ['a', 'b', 'c'] });
  });

/* listen on port with callback
 dont want to use console.log, use debug instead
 debug only runs in debug mode */
app.listen(PORT, ()=> {
    debug(`its running on ${chalk.greenBright(PORT)}`)
})

