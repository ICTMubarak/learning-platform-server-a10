const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req, res)=>{
    res.send('Learn with mubarak server is running')
});

app.listen(port, ()=>{
    console.log(`Learn with mubarak server running in port=${port}`);
})
