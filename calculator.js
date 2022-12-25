const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res)
{
    var v1 = Number(req.body.n1);
    var v2 = Number(req.body.n2);
    var result = v1+v2;
    res.send("total "+result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});