const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to KnowledgeBridge API!');
});


const PORT = process.env.PORT ;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
