const { Router } = require('express');
const router = Router();

router.post('/signin', async (req, res, next) => {
  try {
    res.json(req.body)
  } catch (err) {
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    res.json(req.body)
  } catch (err) {
    next(err);
  }
});

router.patch('/refresh', async (req, res, next) => {
  try {
    res.json(req.body)
  } catch (err) {
    next(err);
  }
});

router.post('/signout', async (req, res, next) => {
  try {
    res.json(req.body)
  } catch (err) {
    next(err);
  }
});

module.exports = router;
