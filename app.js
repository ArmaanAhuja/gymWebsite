const express = require('express'); 
const fs = require('fs'); 
const mongoose = require('mongoose'); 
const path = require('path'); 
const port = 80; 
const bodyParser = require('body-parser');
const { json } = require('body-parser');

//! connecting to mongodb
mongoose.connect('mongodb://localhost:27017/clientsdbs', {useNewUrlParser: true, useUnifiedTopology: true}); 

const app = express(); 

//! Static files
app.use("/static" ,express.static('static')); 
app.use(express.urlencoded()); 

//! Setting the pug template engine
app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname, 'views')); 

//! Mongoose Schema
const clientSchema = new mongoose.Schema({
    firstName: String , 
    lastName: String, 
    age: String, 
    email: String , 
    phone: String, 
    add: String
}); 

var clientModel = mongoose.model('clientModel', clientSchema); 


//! Endpoints
app.get('/', (req, res)=> {
    // res.send("Hello world!!"); 
    const paramsHome = {}; 
    res.status(200).render('home.pug', paramsHome); 
})
app.get('/about', (req, res)=> {
    const paramsAbout ={}; 
    res.status(200).render('about.pug',paramsAbout )
})

app.get('/contact', (req, res)=> {
    const paramsContact ={}; 
    res.status(200).render('contact.pug',paramsContact ); 
})
app.get('/pricing', (req, res)=> {
    const paramsPricing = {}; 
    res.status(200).render('pricing.pug', paramsPricing); 
})

app.get('/trainers',(req, res)=> {
    const paramsTrainers = {}; 
    res.status(200).render('trainers.pug', paramsTrainers); 
})

app.post('/contact', (req, res)=> {
     firstName = req.body.firstName; 
     lastName = req.body.lastName; 
     age = req.body.age; 
     email = req.body.email; 
     phone = req.body.phone; 
     add = req.body.add; 
     
 
     let client = {
        firstName: firstName, 
        lastName: lastName, 
        age: age, 
        email: email, 
        phone: phone, 
        add: add
     }
     let clientStr = JSON.stringify(client); 
     fs.appendFileSync('client.txt', clientStr + "\n\n", 'utf-8'); 
     
     let newClient = new clientModel({
         firstName: firstName, 
         lastName: lastName, 
         age: age, 
         email: email, 
         phone: phone, 
         add: add
        })
        newClient.save(); 
        
        res.redirect('/'); 
    })
app.listen(port, ()=> {
    console.log("The gym website is listening at port 80"); 
})