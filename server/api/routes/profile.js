const { Router } = require('express');
const router = Router();

router.get('/profile', async (req, res, next) => {
  try {
    console.log('GET profile');
    res.json(req.body)
  } catch (err) {
    next(err);
  }
});

module.exports = router;
