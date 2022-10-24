const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./courses.json');

app.get('/',(req, res)=>{
    res.send('Learn with mubarak server is running')
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, ()=>{
    console.log(`Learn with mubarak server running in port=${port}`);
})
