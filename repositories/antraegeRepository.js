'use strict';

/**
 * @public
 * @constructor
 */
function AntraegeRepository(server) {
    let currentId = 0;

    function generateData() {
        const antragId = currentId++;
        return {
            antragId: antragId,
            partnerId: 4711 + (currentId % 15),
            antragURI: `${server}/antrag/` + antragId,
            sparte: 'Kraftfahrt',
            rolle: 'Versicherungsnehmer',
            agentur: '2008/21',
            versichertist: 'M-RS 6',
            schaeden: 0,
            ablauf: '',
            zahlungsweise: 'jährlich',
            beitragZent: Math.floor(Math.random() * 40000 + 2000),
            fahrzeugdaten: {
                fahrzeugart: 'PKW',
                kennzeichen: 'MS-CH 444',
                hsn: 432,
                typschl: 234,
                erstzulassung: '20.05.2015',
                fahrgestell: 'dj3rij35j42',
                fahrzeugstaerkePS: 340,
                austauschmotor: false,
                kennzeichenart: 'schwarzes Kennzeichen',
                wechselkennzeichen: false
            },
            nutzung: {
                beliebigeFahrer: 'unbekannt',
                nachtAbstellplatz: 'Straßenrand',
                fahrleistungKm: 30000,
                kilometerstand: 120433,
                abweichenderFahrzeughalter: false,
                nutzung: 'privat',
                selbstGenEigentum: true,
                wohneigentumart: 'Wohnung'

            },
            versSchutz: {
                haftpflichSFR: 'SF0 10%',
                volkaskoSFR: 'SF0 57%',
                tarifgruppe: 'normal',
                rahmenvertrag: 'keiner',
                versBeginn: '25.02.2016',
                zahlungsweise: 'monatlich'

            },
            vorversicherer: [{
                name: 'Provinzial',
                kuendigungsgrund: 'Kündigung durch VN',
                versicherungsEnde: '20.3.2016'
            },
                {
                    name: 'Generalli',
                    kuendigungsgrund: 'Kündigung durch VN',
                    versicherungsEnde: '23.3.2016'

                }]

        }

    }

    let result = [];

    for (let i = 0; i < 44; i++) {
        result.push(generateData());
    }

    return result;
}

module.exports = AntraegeRepository;
