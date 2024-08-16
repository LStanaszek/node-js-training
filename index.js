const express = require('express');
const app = express();
const port = 3000;

app.get('/', async(req,res) => {
    console.log("someone is here");
    res.json({message: "welcome to weather"});
});

app.get('/weather', async(req,res) => {
    console.log("request received");

    const lat = 52.9500;
    const lon = -1.1500;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`

});

app.listen(port, () => {
    console.log(`Server Active... Running on http://localhost:${port}`);
});