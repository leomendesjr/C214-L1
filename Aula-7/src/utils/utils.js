const { StatusCodes } = require('http-status-codes');
const { v4: uuidv4 } = require('uuid');

const Constants = require('./constants');

const Utils = {
    responseStatus(data) {
        switch (data) {
            case undefined:
                return StatusCodes.OK;
            case Constants.ErrorValidation.name:
                return StatusCodes.BAD_REQUEST;
            case Constants.ErrorDuplicate.name:
                return StatusCodes.CONFLICT;
            case Constants.ErrorNotFound.name:
                return StatusCodes.NOT_FOUND;
            case Constants.ErrorNotImplemented.name:
                return StatusCodes.NOT_IMPLEMENTED;
            case Constants.ErrorBadGateway.name:
                return StatusCodes.BAD_GATEWAY;
            case Constants.ErrorServiceUnav.name:
                return StatusCodes.SERVICE_UNAVAILABLE;
            default:
                return StatusCodes.INTERNAL_SERVER_ERROR;
        }
    },

    generateUuid(){
        return uuidv4();
    },
};

module.exports = Utils;