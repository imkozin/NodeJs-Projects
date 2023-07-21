const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
})

hbs.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running');
})