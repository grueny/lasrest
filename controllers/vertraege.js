'use strict';

/**
 * @public
 * @constructor
 */
function VertraegeController(opts) {
    const vertraegeRepository = opts.vertraegeRepository;

    this.getListOrCount = (req, res, next) => {
        const partnerId = parseInt(req.query.partnerId, 10);

        if (isNaN(partnerId)) {
            res.status(400).send('bad request, partnerId should be an integer');
            return next();
        }

        const mode = req.query.mode || 'list';
        const items = vertraegeRepository.filter(p => p.partnerId === partnerId)
            .map(p => {
                return {
                    sparte: p.sparte,
                    beitragZent: p.beitragZent,
                    vertragURI: p.vertragURI,
                    vsnr: p.vsnr,
                    partnerId: p.partnerId
                }
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

        let result = vertraegeRepository.find(p => p.vsnr === id);

        if (!result) {
            res.status(404).send('item not found');
            return next();
        }

        res.status(200).json(result);
    };
}

module.exports = VertraegeController;
