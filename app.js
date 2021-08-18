const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require('body-parser')
const app = express();
const port = 11000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best Dance academy in Hapur so far join it fastly."
    const params = { 'title': 'PubG is the best game', 'content': con }
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res) => {
    console.log(req.body);
    const con = "This is the best Dance academy in Hapur so far join it fastly."
    const params = { 'title': 'PubG is the best game', 'content': con }
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res) => {
    console.log(req.body);
    const con = "This is the best Dance academy in Hapur so far join it fastly."
    const params = { 'title': 'This is the best dance acacdemy in Hapur' }
    res.status(200).render('contact.pug', params);
})
app.get('/about', (req, res) => {
    console.log(req.body);
    const con = "This is the best Dance academy in Hapur so far join it fastly."
    const params = { 'title': 'This is the best dance acacdemy in Hapur' }
    res.status(200).render('about.pug', params);
})
app.get('/classinfo', (req, res) => {
    console.log(req.body);
    const con = "This is the best Dance academy in Hapur so far join it fastly."
    const params = { 'title': 'This is the best dance acacdemy in Hapur' }
    res.status(200).render('classinfo.pug', params);
})
app.get('/services', (req, res) => {
    console.log(req.body);
    const con = "This is the best Dance academy in Hapur so far join it fastly."
    const params = { 'title': 'This is the best dance acacdemy in Hapur' }
    res.status(200).render('services.pug', params);
})


// Start the Server
app.listen(port, () => {
    console.log(`The server is started succesfully at ${port}`);
})