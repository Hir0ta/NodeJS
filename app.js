const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/*To use handlebar. For some reason it not works, but I don't like it either, so I dont bother, to find why! :P*/
//const handlebarEngine = require('express-handlebars');
//app.engine('handlebars',handlebarEngine());
//app.set('view engine', 'handlebars')

/*To use ejs. I think thats the best to us*/
app.set('view engine', 'ejs');

/*To use pug. Not bad, but I like the ejs more*/
//app.set('view engine', 'pug');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
