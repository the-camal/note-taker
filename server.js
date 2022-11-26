const express = require('express')
const path = require('path')


const app = express()
const PORT = process.env.PORT || 8000;

app.use(express.urlencaded({ extanded: true }));

app.use(express.jason());

app.use(express.static(path.join(__diname + '/app/public')));

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function(){
    console.log('app listening on PORT: ' + PORT)  
});
