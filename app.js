//Modules
const http = require('http');
const express = require('express'); 
const bodyParser =  require('body-parser');
const app = express();
const path = require('path');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const rootDir = require('./utils/path');


//Server application
app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRouter);
app.use('/admin',adminRouter);
app.use((req,res,next) => 
{
	res.status(404).sendFile(path.join(rootDir,'views','page-not-found.html'));
});

app.listen(3000);
console.log('Server is running');