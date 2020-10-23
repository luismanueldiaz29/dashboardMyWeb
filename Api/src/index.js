const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const indexRouter = require('./routes/initial.router');
//const app
const app = express();
const router = express.Router();

//const of the port
const PORT = process.env.PORT || 4000;
app.set('port', PORT);

//middleWares
app.use(bodyParser.json());
app.use('dev', morgan);

//routers
app.use(indexRouter);

//port listen
app.listen(app.get('port'), () => {
    console.log('Server listener in port => '+PORT);
});