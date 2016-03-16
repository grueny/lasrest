'use strict';

const PartnerRepository = require('./partnerRepository'),
    HaushaltRepository = require('./haushaltRepository'),
    AngeboteRepository = require('./angeboteRepository'),
    AntraegeRepository = require('./antraegeRepository'),
    KontakthistorieRepository = require('./kontakthistorieRepository');

module.exports = function (server) {
    return {
        partnerRepository: new PartnerRepository(server),
        haushaltRepository: new HaushaltRepository(server),
        angeboteRepository: new AngeboteRepository(server),
        antraegeRepository: new AntraegeRepository(server),
        kontakthistorieRepository: new KontakthistorieRepository(server)
    };
};
