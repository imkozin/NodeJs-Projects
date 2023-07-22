const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const start = require('./config/db.js');
const todoRoutes = require('./routes/todos.js')
// Connect to MongoDB
start();

const app = express();
const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;

app.use(todoRoutes);

app.listen(PORT, () => {
    console.log(`Running server on PORT ${PORT}`);
});