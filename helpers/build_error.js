const ERRORS = require('./responses.json');

const buildError = (errorKey) => {
  const error = new Error();
  if (!ERRORS[errorKey]) {
    errorKey = 'GENERIC_ERROR';
  }
  error.message = ERRORS[errorKey].message;
  error.code = ERRORS[errorKey].code;
  error.status = ERRORS[errorKey].status;
  return error;
};

module.exports = {
  buildError,
};
