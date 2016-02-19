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
    name: 'Produkt',
    vorname: 'Peter',
    ort: 'Münster',
    status: 'Kunde'
},
{
    partnerId: 4712,
    partnerURI: `http://${server}/partner/4713`,
    name: 'Produkt',
    vorname: 'Hans',
    ort: 'Osnabrück',
    status: 'Kunde'
},
{
    partnerId: 4713,
    partnerURI: `http://${server}/partner/4712`,
    name: 'Produkt',
    vorname: 'Günther',
    ort: 'Dortmund',
    status: 'Interessent'
}];
app.get('/partner', function (req, res) {
    //TODO einer für suche nach VSNR                    
    res.send(partners);

});
app.get('/partner/:id', function (req, res) {
    //TODO zwei unterschiedliche Partner herausgeben
    var found = partners.filter((p)=> p.partnerId===parseInt(req.params.id))[0];
    if(found)
        res.send(found);
    else
        res.status(404).end();
});

app.get('/partner/:id/haushalt', function (req, res) {
    var haushalt = [{ beziehung: 'Frau', name: 'Produkt', vorname: 'Petra' },
        { beziehung: 'Kinde', name: 'Produkt', vorname: 'Klaus' }];
    res.send(haushalt);

});
app.get('/partner/:id/kontakt', function (req, res) {
    var kontakt = [{ kontaktart: 'Telefon', zeit: '2016-01-15 12:30', titel: 'Beratung' },
        { kontaktart: 'Email', zeit: '2016-01-15 12:40', titel: 'Unterlagen' }];
    res.send(kontakt);
});

app.get('/angebote', function (req, res) {
    var angebote = [{ sparte: 'Kraftfahrt', beitragZent: 10000, angebotURI: `http://${server}/angebot/4711` }];
    res.send(angebote);
});
app.get('/antraege', function (req, res) {
    var angebote = [{ sparte: 'Kraftfahrt', beitragZent: 12001, antragURI: `http://${server}/antrag/4712` }];
    res.send(angebote);
});
app.get('/vertraege', function (req, res) {
    var angebote = [{ sparte: 'Kraftfahrt', beitragZent: 13000, vertragURI: `http://${server}/vertrag/4713` }];
    res.send(angebote);
});

app.get('/angebot/kraftfahrt/vorbelegung', function (req, res) {
    var vorbelegung = { zahlungsweise: 'Jährlich' };//TODO
    res.send(vorbelegung);
});

app.post('/angebot/kraftfahrt/berechnen', function (req, res) {
    res.redirect('/angebot/kraftfahrt/berechnetesAngebot/4711');
});

app.get('/angebot/kraftfahrt/berechnetesAngebot/:id', function (req, res) {
    var fehler = [{ fehlerkategorie: "Fehler", fehlertext: '....' }];//TODO
    res.send(fehler);
});

app.get('/berufe', function (req, res) {
    var berufe = [{ beruf: 'Informatiker' }, { beruf: 'Wirtschaftsinformatiker' }];
    res.send(berufe);
});

app.post('/angebot', function (req, res) {
    //theoretisch speichern
    res.redirect('/');
});

app.post('/angebot?angebotId=4711', function (req, res) {
    res.redirect('/angebot/4712');
});

app.get('/angebot/4712', function (req, res) {
    var angebot = {};//TODO
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
    var briefkasten = [{ text: 'Wiedervorlage', bezugsURI: `http://${server}/vertrag/987654321` }];//TODO
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

});


app.listen(port, () => {
    console.log(`server running on port ${port} (http://${server})`);
})
;