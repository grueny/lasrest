'use strict';

/**
 * @public
 * @constructor
 */
function Partner(opts) {
    const partnerRepository = opts.partnerRepository;
    
    this.list = (req, res) => {
        let result = partnerRepository;

        if (req.query.q) {
            let query = req.query.q;
            query = query.toLowerCase();

            result = result.filter(partner => {
                return partner.name.toLowerCase().indexOf(query) > -1
                    || partner.vorname.toLowerCase().indexOf(query) > -1
                    || partner.partnerId.toString().indexOf(query) > -1
            });
        }

        res.json(200, result);
    };

    this.get = (req, res, next) => {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id)) {
            res.status(400).send('bad request, id should be an integer');
            return next();
        }

        let result = partnerRepository.find(p => p.partnerId === id);

        if (!result) {
            res.status(404).send('item not found');
            return next();
        }

        res.json(200, result);
    };
}

module.exports = Partner;
