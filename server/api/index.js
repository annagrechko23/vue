const { Router } = require('express');
const glob = require('glob');
const bodyParser = require('body-parser');

const router = Router();

router.use(bodyParser.json());

glob
  .sync('./routes/**.js', { cwd: __dirname })
  .forEach(path => {
    const routes = require(path);
    router.use('/api', routes);
  });

module.exports = router;
