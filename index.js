const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const course = require('./course.json');

app.get('/',(req, res)=>{
    res.send('Learn with mubarak server is running')
});

app.get('/course', (req, res) => {
    res.send(course);
})

app.listen(port, ()=>{
    console.log(`Learn with mubarak server running in port=${port}`);
})
