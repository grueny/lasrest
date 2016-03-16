'use strict';

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    port = process.env.PORT || 8080,
    server = process.env.LVM_PUBLIC_URL || `http://localhost:${port}`;

const repositories = require('./repositories')(server);

const PartnerController = require('./controllers/partner'),
    AngeboteController = require('./controllers/angebote'),
    VertraegeController = require('./controllers/vertraege'),
    BerufeController = require('./controllers/berufe'),
    AntraegeController = require('./controllers/antraege');

const partnerController = new PartnerController(repositories),
    angeboteController = new AngeboteController(repositories),
    vertraegeController = new VertraegeController(repositories),
    berufeController = new BerufeController(repositories),
    antraegeController = new AntraegeController(repositories);

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(function (req, res, next) {
    setTimeout(function () {
        next();
    }, 100);
});

app.use(function (req, res, next) {
    console.log(`${req.method}: ${req.url}`);
    next();
});

// Partner
app.get('/partners', partnerController.list);
app.get('/partner/:id', partnerController.get);
app.get('/partner/:id/haushalt', partnerController.getHaushalt);
app.get('/partner/:id/kontakt', partnerController.getKontakte);

// Angebote
app.get('/angebote', angeboteController.getListOrCount);
app.get('/angebot/:id', angeboteController.get);
app.get('/angebot/:sparte/vorbelegung', angeboteController.getVorbelegung);
app.post('/angebot/:sparte/berechnen', angeboteController.berechnen);

// Antraege
app.get('/antraege', antraegeController.getListOrCount);

// Verträge
app.get('/vertraege', vertraegeController.getListOrCount);
app.get('/vertrag/:id', vertraegeController.get);

// Berufe
app.get('/berufe', berufeController.list);

module.exports = app;

if (module.parent === null || module.parent.filename.indexOf('server.js') > -1) {
    app.listen(port, () => {
        console.log(`server running on port ${port} (http://${server})`);
    });
}
