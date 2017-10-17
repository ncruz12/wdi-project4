//bringing in express library
const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

//Importing fave routes
const tricksRoutes = require('./routes/trick-routes');

//Starting up express
const app = express();

//Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

//View template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//creates a PORT varaiable that checks the process.env or defaults to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use('/tricks', tricksRoutes);

//GET request for home
app.get('/', (req, res) => {
  res.render('index');
})

//Error handler
app.get('*', (req, res) => {
  res.status(404).send('Not found');
})
