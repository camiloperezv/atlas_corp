const ERRORS = require('../helpers/build_error');

// eslint-disable-next-line no-undef
const SectorID = process.env.SectorID || 10;

// return the dron info
// This model method validate all arguments, then check for velocity to be GT 0
// could return or throw, then this method should be wrapped in a try catch 
// finaly makes the loc = x*SectorID + y*SectorID + z*SectorID + vel and returns
const newDNS = (x, y, z, vel) => {
  const xNumber = Number(x);
  const yNumber = Number(y);
  const zNumber = Number(z);
  const velNumber = Number(vel);
  if (isNaN(xNumber) === true ||
    isNaN(yNumber) === true ||
    isNaN(zNumber) === true ||
    isNaN(velNumber) === true
  ) {
    const error = ERRORS.buildError('NUMBER_ARGUMENT_REQUIRED');
    throw error;
  }
  if (velNumber < 0) {
    const error = ERRORS.buildError('NEGATIVE_VEL');
    throw error;
  }
  const loc = (xNumber * SectorID) + (yNumber * SectorID) + (zNumber * SectorID) + velNumber;
  return loc;
};

module.exports = {
  newDNS,
};