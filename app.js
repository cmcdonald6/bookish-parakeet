const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

//set the view engine to ejs
app.set('view engine', 'ejs')

let myName = 'Cody'

app.get('/', (req, res) => {
/*  res.send('Hello from Cody!! Again...')
    res.send(myName)
*/  
    res.send(`<h3>Hello from ${ myName }!! Again...</h3>`)
})

app.get('/show', (req, res) => {
//    res.sendFile('index.html');
res.sendFile('index.html' , { root : __dirname});          

})

app.get('/ejs', (req, res) => {
    //ejs stuff goes here
    //use res.render to load up an ejs view file
    res.render('index', { myName: myName }); //left myName is ejs, right myName is node
    console.log("in /ejs before render: ", myName);

})

app.get('/name', (req, res) => {
    console.log("in get to slash name: ", req.query.ejsFormName);
    

})

app.listen(PORT)
    console.log(`Listening on port ${ PORT }`)