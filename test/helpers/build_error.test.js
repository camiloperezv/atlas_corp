const { expect } = require('chai');

const BuildError = require('../../helpers/build_error');

describe('BuildError', () => {
  describe('buildError(errorKey)', () => {
    it('Should return an well known error', () => {
      const { message } = BuildError.buildError('NEGATIVE_VEL');
      expect(message).to.be.equal('Vel cannot be a negative value');
    });
    it('Should return an generic error if the key doesnt exist', () => {
      const { message } = BuildError.buildError('NON_EXISTING_KEY');
      expect(message).to.be.equal('Generic error');
    });
  });
});