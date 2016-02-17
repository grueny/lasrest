var express = require('./node_modules/express');
var app = express();

app.get('/',function(req,res,next){
    res.send('Herzlich Willkommen')
    next();
});

// Use Case 1
// '/partner&q='Peter Produkt'
// Result json array mit von 10 Partner

// Detail
// Informationen zum Partner
// '/partner/id/
// zum Haushalt
// '/partner/id/haushalt

// zum Kontakte
// '/partner/id/kontakt

// zum angebote
// '/angebote&partnerId=:partnerId

// zum antraege
// '/antraege&partnerId=:partnerId

// zum vertraege
// '/vertraege&partnerId=:partnerId

// '/angebot/kraftfahrt/vorbelegung&partnerId=:partnerId'
//

// Post '/angebot/kraftfahrt/berechnen'
// Get 'angebot/kraftfahrt/berechnetesAngebot/id
// Fehlermeldung json array

// 'berufe&q='inf'
// json array mit berufen

// Post '/angebot/

// Post '/angebot&angebotId=:angebotId
// Redirect Get angebotId2


// '/partner&q=4711'
// '/partner/id'
// '/vertrag/vsnr/' liefert vertrag


// Get '/schaden/kraftfahrt/vorbelegung&partnerId=:partnerId'




// UseCase 2

// '/briefkasten/m50000
// json array von briefkasten header infos inkl gehe zu bezug -- gehe zu vertrag

// '/vertrag/vsnr/


// UseCase 3

// '/brief/vorlagen/'
// '/brief/empfaenger'











app.listen(8080);