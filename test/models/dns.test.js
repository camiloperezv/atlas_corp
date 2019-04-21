const { expect } = require('chai');

const DNSModel = require('../../models/dns');

describe('DNS Model', () => {
  describe('newDNS(x, y, z, vel)', () => {
    it('should throw an error if x argument is undefined', () => {
      try {
        DNSModel.newDNS(undefined, '2', '3', '4');
      } catch ({ message, code, status }) {
        expect(code).to.be.equal('NUMBER_ARGUMENT_REQUIRED');
        expect(message).to.be.equal('This argument is required and should be a number');
        expect(400).to.be.equal(status);
        return;
      }
      throw new Error('did not enter inte catch');
    });
    it('should throw an error if y argument is undefined', () => {
      try {
        DNSModel.newDNS('1', undefined, '3', '4');
      } catch ({ message, code, status }) {
        expect(code).to.be.equal('NUMBER_ARGUMENT_REQUIRED');
        expect(message).to.be.equal('This argument is required and should be a number');
        expect(400).to.be.equal(status);
        return;
      }
      throw new Error('did not enter inte catch');
    });
    it('should throw an error if z argument is undefined', () => {
      try {
        DNSModel.newDNS('1', '2', undefined, '4');
      } catch ({ message, code, status }) {
        expect(code).to.be.equal('NUMBER_ARGUMENT_REQUIRED');
        expect(message).to.be.equal('This argument is required and should be a number');
        expect(400).to.be.equal(status);
        return;
      }
      throw new Error('did not enter inte catch');
    });
    it('should throw an error if vel argument is undefined', () => {
      try {
        DNSModel.newDNS('1', '2', '3', undefined);
      } catch ({ message, code, status }) {
        expect(code).to.be.equal('NUMBER_ARGUMENT_REQUIRED');
        expect(message).to.be.equal('This argument is required and should be a number');
        expect(400).to.be.equal(status);
        return;
      }
      throw new Error('did not enter inte catch');
    });
    it('should throw an error if vel argument is less than 0', () => {
      try {
        DNSModel.newDNS('1', '2', '3', '-10');
      } catch ({ message, code, status }) {
        expect(code).to.be.equal('NEGATIVE_VEL');
        expect(message).to.be.equal('Vel cannot be a negative value');
        expect(400).to.be.equal(status);
        return;
      }
      throw new Error('did not enter inte catch');
    });
    it('should return 64 if the values are right', () => {
      const response = DNSModel.newDNS('1', '2', '3', '4');
      expect(response).to.be.equal(64);
    });
    it('should return 64 if the values are right', () => {
      const response = DNSModel.newDNS('4', '3', '1', '40');
      expect(response).to.be.equal(120);
    });
  });
});