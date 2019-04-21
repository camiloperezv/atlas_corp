const ERRORS = require('../helpers/build_error');

// eslint-disable-next-line no-undef
const SectorID = process.env.SectorID || 10;

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