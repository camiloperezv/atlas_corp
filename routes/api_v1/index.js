const router = require('express').Router();

router.get('/', (req, res) => {
  res.end('done');
});

module.exports = router;