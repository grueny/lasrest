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
}

module.exports = Partner;
