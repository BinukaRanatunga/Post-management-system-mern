const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');  //for loging register

const app = express();

// App middleware
app.use(bodyParser.json());
app.use(cors());

// Routes middleware
app.use(postRoutes);
app.use('/api', authRoutes); // Use the auth routes with the '/api' prefix

const PORT = 8000;
const DB_URL = 'mongodb+srv://twg:twg123@mernapp.hmlpba3.mongodb.net/mernCrud?retryWrites=true&w=majority&appName=mernApp';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('DB connected');
})
.catch((err) => {
  console.log('DB connection error', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
