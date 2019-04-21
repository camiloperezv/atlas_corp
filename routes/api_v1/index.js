const router = require('express').Router();

const DNS = require('../../controllers/dns');

router.post('/dns', DNS.newDNS);

module.exports = router;