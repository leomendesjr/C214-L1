const Constants = {
    ErrorValidation: {
        name: 'ValidationError',
        message: '',
    },

    ErrorDB: {
        name: 'MongoError',
        message: 'MongoDB Error',
    },

    ErrorNotFound: {
        name: 'NotFound',
        message: 'Not Found!',
    },

    ErrorDuplicate: {
        name: 'Duplicate',
        message: 'Duplicada',
    },

    ErrorNotImplemented: {
        name: 'NotImplemented',
        message: 'Function Not Implemented!',
    },

    ErrorBadGateway: {
        name: 'BadGateway',
        message: 'Bad Gateway!',
    },

    ErrorUnavailable: {
        name: 'Unavailable',
        message: 'Service Unavailable!',
    }
};

module.exports = Constants;