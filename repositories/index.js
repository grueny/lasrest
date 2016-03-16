'use strict';

const PartnerRepository = require('./partnerRepository');

module.exports = function (server) {
    return {
        partnerRepository: new PartnerRepository(server)
    };
};
