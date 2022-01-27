//Modules
const http = require('http');
const express = require('express'); 
const bodyParser =  require('body-parser');
const app = express();
const path = require('path');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');



//Server application
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRouter);
app.use(shopRouter);
app.use((req,res,next) => 
{
	res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'));
});

app.listen(3000);
console.log('Server is running');