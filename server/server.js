const path = require('path')
const express = require('express')

const pathName = path.join (__dirname, '../public')

const app = express();

app.use (express.static (pathName));

app.listen (3000, () => {
  console.log("Server listen on port 3000");
})
