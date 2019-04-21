const { expect } = require('chai');
const { stub } = require('sinon');
const { mockResponse, mockRequest } = require('mock-req-res');

const DNSController = require('../../controllers/dns');
const DNSModel = require('../../models/dns');

describe('DNSController', () => {
  describe('newDNS(req, res)', () => {
    let req;
    before(() => {
      req = mockRequest();
    });
    beforeEach(() => {
      stub(DNSModel, 'newDNS').returns(123);
    });
    afterEach(() => {
      DNSModel.newDNS.restore();
    });
    it('should return a non 200 status if model method fails', () => {
      const res = mockResponse();
      DNSModel.newDNS.throws(new Error('this is an error'));
      DNSController.newDNS(req, res);
      expect(res.status.getCall(0).args[0]).to.be.equal(400);
      expect(res.json.getCall(0).args[0].message).to.be.equal('this is an error');
    });
    it('should return a 200 status if everything goes OK', () => {
      const res = mockResponse();
      DNSController.newDNS(req, res);
      expect(res.json.getCall(0).args[0].loc).to.be.equal(123);
    });
  });
});