'use strict';

const PartnerRepository = require('./partnerRepository'),
    HaushaltRepository = require('./haushaltRepository'),
    KontakthistorieRepository = require('./kontakthistorieRepository');

module.exports = function (server) {
    return {
        partnerRepository: new PartnerRepository(server),
        haushaltRepository: new HaushaltRepository(server),
        kontakthistorieRepository: new KontakthistorieRepository(server)
    };
};
