const ERRORS = require('../helpers/responses.json');

const SectorID = 10;

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
    const error = new Error(ERRORS.NUMBER_ARGUMENT_REQUIRED.message);
    error.status = ERRORS.NUMBER_ARGUMENT_REQUIRED.status;
    error.code = ERRORS.NUMBER_ARGUMENT_REQUIRED.code;
    throw error;
  }
  if (velNumber < 0) {
    const error = new Error(ERRORS.NEGATIVE_VEL.message);
    error.status = ERRORS.NEGATIVE_VEL.status;
    error.code = ERRORS.NEGATIVE_VEL.code;
    throw error;
  }
  const loc = (xNumber * SectorID) + (yNumber * SectorID) + (zNumber * SectorID) + velNumber;
  return loc;
};

module.exports = {
  newDNS,
};