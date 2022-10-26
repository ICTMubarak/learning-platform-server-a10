const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors =require('cors');

const courses = require('./courses.json');

app.use(cors());

app.get('/',(req, res)=>{
    res.send('Learn with mubarak server is running')
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    console.log('loking cor data for id: ', id);
    const course =courses.find(corse => corse.id === id) || {};
    res.send(course);
})

app.listen(port, ()=>{
    console.log(`Learn with mubarak server running in port=${port}`);
})
