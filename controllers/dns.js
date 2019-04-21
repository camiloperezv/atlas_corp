const DNS = require('../models/dns');

const newDNS = (req, res) => {
  const loc = DNS.newDNS(req.body.x, req.body.y, req.body.z, req.body.vel);
  res.json({ loc });
};

module.exports = {
  newDNS,
};