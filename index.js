let express = require("express");
let app = express();

// console.log("__dirname = ", __dirname);
app.use('/public', express.static(__dirname + "/public"));

app.listen(3000, function() {
    console.log("App is running on port 3000");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/data/origin", function(req, res) {
    const value = {
        'name': 'AAA',
        'bloodType': 'O',
        'value': 0
    };
    res.send(value);
});