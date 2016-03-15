(function () {
    'use strict';

    const express = require('express'),
        app = express(),
        cors = require('cors'),
        port = process.env.PORT || 8080,
        server = process.env.LVM_PUBLIC_URL || `http://localhost:${port}`,
        PartnerController = require('./controllers/partner'),
        AngeboteController = require('./controllers/angebote'),
        AntraegeController = require('./controllers/antraege'),
        BerufeController = require('./controllers/berufe'),
        VertraegeController = require('./controllers/vertraege'),
        BriefkastenController = require('./controllers/briefkasten');

    var partnerController = new PartnerController(server),
        vertraegeController = new VertraegeController(server),
        angeboteController = new AngeboteController(server),
        antraegeController = new AntraegeController(server),
        briefkastenController = new BriefkastenController(server),
        berufeController = new BerufeController(server);

    // middlewares
    app.use(cors());
    app.use(function (req, res, next) {
        setTimeout(function () {
            next();
        }, 100);
    });

    app.use(function (req, res, next) {
        console.log(`${req.method}: ${req.url}`);
        next();
    });

    // private helpers
    const getItemByIdHelper = function getItemByIdHelper(req, res, next, controller) {
        var id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).send('bad request, id should be an integer');
            return next();
        }
        if (!controller.hasItemWithId(id)) {
            res.status(404).send('item not found');
            return next();
        }
        res.status(200).send(controller.getById(id));
    }

    // SEARCH
    app.get('/search/partner/:query', function (req, res, next) {
        var query = req.params.query;
        if (!query) {
            res.status(400).send('No query provided');
            return next();
        }
        res.status(200).send(partnerController.search(query));
    });

    app.get('/search/berufe/:query', function (req, res, next) {
        var query = req.params.query;
        if (!query) {
            res.status(400).send('No query provided');
            return next();
        }
        res.status(200).send(berufeController.search(query));
    });


    // PARTNER
    app.get('/partner', function (req, res) {
        res.status(200).send(partnerController.getOverview());
    });

    app.get('/partner/:id', function (req, res, next) {
        getItemByIdHelper(req, res, next, partnerController);
    });

    app.get('/partner/:id/haushalt', function (req, res, next) {
        var id = parseInt(req.params.id);
        if (isNaN(id) || !partnerController.hasItemWithId(id)) {
            res.status(404).send('partner not found');
            return next();
        }
        res.status(200).send(partnerController.getHaushalt(id));

    });

    app.get('/partner/:id/kontakt', function (req, res, next) {
        var id = parseInt(req.params.id);
        if (isNaN(id) || !partnerController.hasItemWithId(id)) {
            res.status(404).send('partner not found');
            return next();
        }
        res.status(200).send(partnerController.getKontaktdaten(id));
    });

    // BERUFE
    app.get('/berufe', function (req, res) {
        res.status(200).send(berufeController.getAll());
    });

    app.get('/berufe/:id', function (req, res, next) {
        getItemByIdHelper(req, res, next, berufeController);
    });

    // ANGEBOTE
    app.get('/angebote', function (req, res) {
        res.status(200).send(angeboteController.getAll());
    });

    app.get('/angebote/:id', function (req, res, next) {
        getItemByIdHelper(req, res, next, angeboteController);
    });

    app.post('/angebote/calculate/kraftfahrt', function (req, res) {
        setTimeout(function () {
            res.status(200).send(angeboteController.getById(5799));
        }, 290);
    });
    app.post('/angebote/calculate/leben', function (req, res) {
        setTimeout(function () {
            res.status(400).send([
                { fehlerkategorie: "Fehler", fehlertext: 'Es ist noch kein Beruf angegeben', fehlerfeld: 'beruf' },
                {
                    fehlerkategorie: 'Fehler',
                    fehlertext: 'Es ist keine Zahlungsweise angegeben',
                    fehlerfeld: 'zahlungsweise'
                }]);
        }, 290);
    });

    app.post('/angebote', function (req, res, next) {
        //todo: implement this
        var newAngebot = {};
        res.send(201).send(newAngebot);
    });

    // ANTRAEGE
    app.get('/antraege', function (req, res, next) {
        //todo: implement antraege corresponding to angebote...
        res.status(200).send(antraegeController.getAll());
    });

    app.get('/antraege/:id', function (req, res, next) {
        getItemByIdHelper(req, res, next, antraegeController);
    })

    app.post('/antraege/from/angebot/:angebotId', function (req, res, next) {
        //todo: erstelle antrag von angebot mit angebotId
        var newAntrag = {};
        res.status(201).send(newAntrag);
    });

    // VERTRAEGE
    app.get('/vertraege', function (req, res, next) {
        //todo: implement vertraege corrseponding to angebote...
        res.status(200).send(vertraegeController.getAll());
    });

    app.get('/vertraege/:id', function (req, res, next) {
        getItemByIdHelper(req, res, next, vertraegeController);
    });

    // DEFAULTS
    app.get('/defaults/angebote/kraftfahrt', function (req, res, next) {
        //todo: implement
        var defaults = { geburtsdatum: '30.04.1945', anschrift: {} };//TODO
        res.status(200).send(defaults);
    });

    app.get('/defaults/schaden/kraftfahrt', function (req, res, next) {
        //todo: implement
        var defaults = {};
        res.status(200).send(defaults);
    });


    // BRIEFKASTEN
    app.get('/briefkasten/:userId/', function (req, res, next) {

        res.status(200).send(briefkastenController.getAll());
    });

    app.get('/briefkasten/:userid/:id', function (req, res, next) {
        getItemByIdHelper(req, res, next, briefkastenController);
    });

    app.post('/briefkasten/:userId', function (req, res, next) {
        //todo: implement
        var newBriefkastenEntry = {};
        res.status(201).send(newBriefkastenEntry);
    });


    app.get('/brief/vorlagen', function (req, res, next) {
        //todo: implement this
        var dokumentarten = {};
        res.status(200).send(dokumentarten);
    });

    app.get('/brief/empfaenger', function (req, res, next) {
        //todo: implement this
        var empfanaenger = {};
        res.status(200).send(empfanaenger);
    });

    module.exports = app;

if (module.parent === null) {
  app.listen(port, () => {
      console.log(`server running on port ${port} (http://${server})`);
  });
}
