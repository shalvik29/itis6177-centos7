const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors());

app.get("/", (req, res) => {
  axios.get('https://28180ghydc.execute-api.us-east-2.amazonaws.com/default/Project3')
    .then(response => {
res.send("server date and time " + response.data.date + " " +response.data.time);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
