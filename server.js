const express= require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/post');

//app middleware
app.use(bodyParser.json());

//routes middleware
app.use(postRoutes);
app.use(cors());

const PORT = 8000;

const DB_URL ='mongodb+srv://twg:twg123@mernapp.hmlpba3.mongodb.net/mernCrud?retryWrites=true&w=majority&appName=mernApp';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected');
}
)
.catch((err) => console.log('DB connection error',err))

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})