const express = require('express')
const dotenv = require('dotenv')

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 7000
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
