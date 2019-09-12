const Express = require('express');
const api = require('./api');

const app = new Express();

app.use(api);

app.listen(4000)
console.log('Server listening on http://localhost:4000')
