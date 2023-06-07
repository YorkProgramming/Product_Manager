const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;


require('./config/product.config');
app.use(cors());
app.use(express.json(),express.urlencoded({ extended: true }));

require('./routes/product.routes')(app);

app.listen(8000, () => {
    console.log(`Listening on port: ${port}`)} 
    );

// q: why cant i find module './config/mongoose.config' when I run node server.js when i am in the server folder
// a: because you are in the server folder, you need to specify the path to the file.  You can do this by using the __dirname variable.  This variable will give you the path to the current folder.  So, if you are in the server folder, __dirname will give you the path to the server folder.  You can then use this path to specify the path to the file you want to import.  So, if you want to import the file "server/config/mongoose.config.js", you would do this:

