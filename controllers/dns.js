const DNS = require('../models/dns');

// route to add new DNS, expect a body with x,y,z and vel props
// returns an error if the model fails or success with the model response
const newDNS = (req, res) => {
  let loc;
  try {
    loc = DNS.newDNS(req.body.x, req.body.y, req.body.z, req.body.vel);
  } catch({ message, code, status }) {
    res.status(status || 400).json({ message, code, status });
    return;
  }
  res.json({ loc });
};

module.exports = {
  newDNS,
};