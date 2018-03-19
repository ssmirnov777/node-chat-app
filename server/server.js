const path = require('path')
const express = require('express')

port = process.env.PORT || 3000
const pathName = path.join (__dirname, '../public')

const app = express();

app.use (express.static (pathName));

app.listen (port, () => {
  console.log(`Server listen on port ${port}`);
})
