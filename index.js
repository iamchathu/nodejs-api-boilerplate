const express = require('express');

const app = express();


app.get("/", function (req, res) {
    res.send("Welcome to Demo API");
});

app.set('port', process.env.PORT || 9080);
app.set('ip', process.env.IP || "127.0.0.1");

app.listen(app.get('port'), function () {
    console.log('%s: Node server started on %s ...', Date(Date.now()), app.get('port'));
});

module.exports = app;