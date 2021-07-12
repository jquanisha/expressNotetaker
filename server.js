// DEPENDENCIES
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

// EXPRESS CONFIGURATION
const app = express();

// Set an initial port. 
const PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

// ROUTER
// require('./routes/apiRoutes.js')(app);
app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

// LISTENER
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
// console.log('Hi')