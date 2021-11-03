const express = require('express');

// need instance of express, don't short circuit
const app = express();


// list of requires
// express is series of route -> function 
app.get('/', (req, res) => {
    res.send("Hello from my app")
} )

// listen on port with callback
app.listen(3000, ()=> {
    console.log("listening on port 3000")
})

