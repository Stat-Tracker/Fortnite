const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;

app.use(express.static('./client/dist'));

app.use(cors());

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
