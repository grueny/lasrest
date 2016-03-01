'use strict';

const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    server = `localhost:${port}`;

app.get('/', function (req, res) {
    res.send(`<html><body>
    <h2 Mögliche URLs</h2>
    <ul>
      <li><a href="/partner?q=Produkt">Partnersuche</a></li>
      <li><a href="/partner/4711">Konkrete Partner Informationen</a></li>
      <li><a href="/partner/4711/haushalt">Haushalt Informationen</a></li>
      <li><a href="/partner/4711/kontakt">Kontakt Informationen</a></li>
      <li><a href="/angebote?partnerId=4711&mode=header">Angebote zu einem Kunden</a></li>
      <li><a href="/antraege?partnerId=4711&mode=header">Anträge zu einem Kunden</a></li>
      <li><a href="/vertraege?partnerId=4711&mode=header">Verträge zu einem Kunden</a></li>
      <li><form action="http://${server}/angebot/kraftfahrt/berechnen" method="post"><button type="submit">Kraftfahrt berechnen</button></form></li>
      <li><form action="http://${server}/berufe" method="GET"><input type="text" name="q"/><button type="submit">Berufe auswählen</button></form></li>
      <li><form action="http://${server}/angebot" method="POST"><button type="submit">Angebot speichern</button></form></li>
      <li><form action="http://${server}/angebot" method="POST"><input type="text" name="angebotId"/><button type="submit">Angebot kopieren</button></form></li>
      <li><a href="/vertrag/123456789">Vertrag 123456789 anzeigen</a></li>
      <li><a href="/schaden/kraftfahrt/vorbelegung">Kraftfahrtvorbelegung</a></li>
      <li><a href="briefkasten/m50000">Briefkasten für m50000</a></li>
      <li><a href="/vertrag/987654321">Vertrag 987654321</a></li>
      <li><a href="/brief/vorlagen">Briefvorlagen</a></li>
      <li><a href="/brief/empfaenger">Briefempfänger</li>    
    </ul>
    </body>    </html>
    `);


});
var partners = [{
    partnerId: 4711,
    partnerURI: `http://${server}/partner/4711`,
    anrede: 'Herr',
    name: 'Produkt, Peter',
    geburtsdatum: '',
    anschrift: 'Lindenstr. 11, 48362 Münster',
    status: 'Kunde'
},
    {
        partnerId: 4712,
        partnerURI: `http://${server}/partner/4713`,
        anrede: 'Herr',
        name: 'Produkt, Hans',
        geburtsdatum: '15.05.1958',
        anschrift: 'Hauptstr. 13, 45353 Osnabrück',
        status: 'Kunde'
    },
    {
        partnerId: 4713,
        partnerURI: `http://${server}/partner/4712`,
        anrede: 'Herr',
        name: 'Produkt, Grünther',
        geburtsdatum: '20.10.1967',
        anschrift: 'Friedrich-Str 60, 43282 Dortmund',
        status: 'Interessent'
    }];
// Partnerübersicht, in der Partnersuche
app.get('/partner', function (req, res) {
    res.send(partners);

});
// PartnerDetails
app.get('/partner/:id', function (req, res) {
    //TODO zwei unterschiedliche Partner herausgeben
    var partnerDetails = [{
            partnerId: 4711,
            partnerURI: `http://${server}/partner/4711`,
            anrede: 'Herr',
            name: 'Produkt',
            vorname: 'Peter',
            geburtsdatum: '',
            alter: -1,
            staatsang: 'deutsch',
            familienstand: 'verheiratet',
            anzahlKinder: 2,
            telnummer: '0173 34324525',
            beruf: 'Kindergärtner',
            anschrift: {strasse: 'Lindenstr. 11', plz: '48362', ort: 'Münster', stadtteil: 'Aaseestadt'},
            status: 'Kunde'
        },
            {
                partnerId: 4712,
                partnerURI: `http://${server}/partner/4713`,
                anrede: 'Herr',
                name: 'Produkt',
                vorname: 'Hans',
                geburtsdatum: '15.05.1958',
                alter: 58,
                staatsang: 'deutsch',
                familienstand: 'ledig',
                anzahlKinder: 0,
                telnummer: '0362 63636525',
                beruf: 'Polizist',
                anschrift: {strasse: 'Hauptstr. 13', plz: '45353', ort: 'Osnabrück', stadtteil: 'Stadtzentrum'},
                status: 'Kunde'
            }
        ]
        ;
    var found = partnerDetails.filter((p) => p.partnerId === parseInt(req.params.id))[0];
    if (found)
        res.send(found);
    else
        res.status(404).end();
});
// Haushaltsdaten für Kundenübersicht
app.get('/partner/:id/haushalt', function (req, res) {
    var haushalt = [{beziehung: 'Frau', name: 'Produkt', vorname: 'Petra', geburtsdatum:'23.04.1974 45J'},
        {beziehung: 'Lebensgefährte', name: 'Herr Klaus Produkt', geburtsdatum: '30.04.1976 39J'}];
    res.send(haushalt);

});
// Kontaktdaten für Kundenübersicht
app.get('/partner/:id/kontakt', function (req, res) {
    var kontakt = [{kontaktart: 'Telefon', zeit: '2016-01-15 12:30', titel: 'Beratung'},
        {kontaktart: 'Email', zeit: '2016-01-15 12:40', titel: 'Unterlagen', sachbearbeiter: 'Jutta Jansen'}];
    res.send(kontakt);
});
// Angebotsdaten für Kundenübersicht
app.get('/angebote', function (req, res) {
    var angebote = [{
        sparte: 'Kraftfahrt',
        rolle: 'Versicherungsnehmer',
        agentur: '2008/21',
        versichertist: 'MS-TT 223',
        schaeden: 1,
        ablauf: '',
        zahlungsweise: 'jährlich',
        beitragZent: 10000,
        angebotURI: `http://${server}/angebot/4711`
    }];
    res.send(angebote);
});
// Antragsdaten für Kundenübersicht
app.get('/antraege', function (req, res) {
    var angebote = [{sparte: 'Kraftfahrt', beitragZent: 12001, antragURI: `http://${server}/antrag/4712`}];//TODO
    res.send(angebote);
});
// Vertragsdaten für Kundenübersicht
app.get('/vertraege', function (req, res) {
    var angebote = [{sparte: 'Kraftfahrt', beitragZent: 13000, vertragURI: `http://${server}/vertrag/4713`}];//TODO
    res.send(angebote);
});
// Vorbelegung zum K-Angebot
app.get('/angebot/kraftfahrt/vorbelegung', function (req, res) {
    var vorbelegung = {geburtsdatum: '30.04.1945', anschrift: {}};//TODO
    res.send(vorbelegung);
});
// Angebot berechnen
app.post('/angebot/kraftfahrt/berechnen', function (req, res) {
    res.redirect('/angebot/kraftfahrt/berechnetesAngebot/4711');
});
//Fehler wird zurückgegeben
app.get('/angebot/kraftfahrt/berechnetesAngebot/:id', function (req, res) {
    var fehler = [
        {fehlerkategorie: "Fehler", fehlertext: 'Es ist noch kein Beruf angegeben', fehlerfeld: 'beruf'},
        {
            fehlerkategorie: 'Fehler',
            fehlertext: 'Es ist keine Zahlungsweise angegeben',
            fehlerfeld: 'zahlungsweise'
        }];
    res.send(fehler);
});
// Auswahl des Berufe-Dialogs /berufe?q=...
app.get('/berufe', function (req, res) {
    var berufe = [{beruf: 'Informatiker'}, {beruf: 'Wirtschaftsinformatiker'}];
    res.send(berufe);
});
// Angebot speichern
app.post('/angebot', function (req, res) {
    //theoretisch speichern
    res.redirect('/'); //TODO 200 zurüc ohne content
});
//
app.post('/angebot?angebotId=4711', function (req, res) {
    //theoretisch antrag 4711 kopieren in 4712
    res.redirect('/angebot/4712');
});

app.get('/angebot/4712', function (req, res) {
    var angebot = {
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
            zahlungsweise: 'monatlich',

        }
    };//TODO komplettes Angebot (vorschäden, dokumentation, vorverträge)?
    res.send(angebot);
});

app.get('/vertrag/123456789', function (req, res) {
    var vertrag = {};//TODO
    res.send(vertrag);
});

app.get('/schaden/kraftfahrt/vorbelegung', function (req, res) {
    var vorbelegung = {};
    res.send(vorbelegung);
});

app.get('/briefkasten/:userid', function (req, res) {
    var briefkasten = [{
        datum: '16.03.2015',
        text: 'Wiedervorlage',
        bezugText: 'Vers 987654321',
        bezugsURI: `http://${server}/vertrag/987654321`
    },
        {datum: '20.03.2015', text: 'UB-Vorlage', bezugText: ''}];//TODO
    res.send(briefkasten);
});

app.get('/vertrag/987654321', function (req, res) {
    var vertrag = {};//TODO
    res.send(vertrag);
});


app.get('/brief/vorlagen', function (req, res) {
    var dokumentarten = {};//TODO
    res.send(dokumentarten);
});

app.get('/brief/empfaenger', function (req, res) {
    var empfanaenger = {};//TODO
    res.send(empfanaenger);
});


app.listen(port, () => {
    console.log(`server running on port ${port} (http://${server})`);
})
;