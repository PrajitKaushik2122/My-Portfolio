const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();

console.log();

app.use(express.static(path.join(__dirname,'/files')))

app.get('/', (req,res) =>{
    res.send('home page');
});
app.all('*', (req, res) => {
    res.status(404).send(`<h1 style='color:red;'>Oops! Page not found</h1>
    <h2>please go back</h2>
    `);
});

app.listen(5000, () =>{
    console.log('listening on port 5000');
});