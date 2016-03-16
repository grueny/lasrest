'use strict';

/**
 * @public
 * @constructor
 */
function AngeboteController(opts) {
    const angeboteRepository = opts.angeboteRepository;
    const partnerRepository = opts.partnerRepository;

    this.getListOrCount = (req, res, next) => {
        const partnerId = parseInt(req.query.partnerId, 10);

        if (isNaN(partnerId)) {
            res.status(400).send('bad request, partnerId should be an integer');
            return next();
        }

        const mode = req.query.mode || 'list';
        const items = angeboteRepository.filter(p => p.partnerId === partnerId)
            .map(p => {
                return {
                    angebotId: p.angebotId,
                    partnerId: p.partnerId,
                    sparte: p.sparte,
                    rolle: p.rolle,
                    agentur: p.agentur,
                    versichertist: p.versichertist,
                    schaeden: p.schaeden,
                    ablauf: p.ablauf,
                    zahlungsweise: p.zahlungsweise,
                    beitragZent: p.beitragZent,
                    angebotURI: p.angebotURI
                };
            });

        if (mode === 'list') {
            return res.status(200).json(items);
        }
        else {
            return res.status(200).json({
                count: items.length
            });
        }
    };

    this.get = (req, res, next) => {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id)) {
            res.status(400).send('bad request, id should be an integer');
            return next();
        }

        let result = angeboteRepository.find(p => p.angebotId === id);

        if (!result) {
            res.status(404).send('item not found');
            return next();
        }

        res.status(200).json(result);
    };

    this.getVorbelegung = (req, res, next) => {
        const id = parseInt(req.query.partnerId, 10);
        const sparte = req.params.sparte || '';

        if (isNaN(id)) {
            res.status(400).send('bad request, id should be an integer');
            return next();
        }

        if (sparte.toLowerCase() !== 'kraftfahrt') {
            res.status(400).send('bad request, sparte is invalid');
            return next();
        }

        let partner = partnerRepository.find(p => p.partnerId === id);

        if (!partner) {
            res.status(404).send('item not found');
            return next();
        }

        const result = {
            geburtsdatum: partner.geburtsdatum,
            anschrift: partner.anschrift,
            zahlungsweise: [
                {
                    id: 1,
                    name: 'monatlich'
                },
                {
                    id: 2,
                    name: 'jährlich'
                }
            ]
        };

        res.status(200).json(result);
    };
}

module.exports = AngeboteController;
