const Utils = require('../src/utils/utils');
const Constants = require('../src/utils/Constants');

it('Status Code OK', () => {
    const result = Utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

it('Status Code BAD REQUEST', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name);
    expect(result).toEqual(400);
});

// teste 1
it('Status Code CONFLICT', () => {
    const result = Utils.responseStatus(Constants.ErrorDuplicate.name);
    expect(result).toEqual(409);
});
// teste 2
it('Status Code NOT FOUND', () => {
    const result = Utils.responseStatus(Constants.ErrorNotFound.name);
    expect(result).toEqual(404);
});
// teste 3
it('Status Code ERROR', () => {
    const result = Utils.responseStatus("ERROR");
    expect(result).toEqual(500);
});
// teste 4
it('Status Code NOT IMPLEMENTED', () => {
    const result = Utils.responseStatus(Constants.ErrorNotImplemented.name);
    expect(result).toEqual(501);
});
// teste 5
it('Status Code BAD GATEWAY', () => {
    const result = Utils.responseStatus(Constants.ErrorBadGateway.name);
    expect(result).toEqual(502);
});
// teste 6
it('Status Code SERVICE UNAVAILABLE', () => {
    const result = Utils.responseStatus(Constants.ErrorServiceUnav.name);
    expect(result).toEqual(503);
});
