var express = require('./node_modules/express');
var app = express();
var server = 'localhost:8080';
app.get('/',function(req,res,next){
    res.send('Herzlich Willkommen')
    next();
});

app.get('/partner',function(req,res,next){
    var partners = [{partnerId:4711,partnerURI:`http://${server}/partner/4711`,name:'Produkt',vorname:'Peter',ort:'Münster',status:'Kunde'},
                    {partnerId:4712,partnerURI:`http://${server}/partner/4713`,name:'Produkt',vorname:'Hans',ort:'Osnabrück',status:'Kunde'},
                    {partnerId:4713,partnerURI:`http://${server}/partner/4712`,name:'Produkt',vorname:'Günther',ort:'Dortmund',status:'Interessent'}];
    res.send(partners);
    next();
});
app.get('/partner/:id',function(req,res,next) {
   var partner = {partnerId:4711,partnerURI:`http://${server}/partner/4711`,name:'Produkt',vorname:'Peter',ort:'Münster',status:'Kunde',plz:48153,strasse:'Hammerstr. 50',tel:"0251123456679"};
   res.send(partner);         
   next(); 
});

app.get('/partner/:id/haushalt',function(req,res,next){
   var haushalt = [{beziehung:'Frau',name:'Produkt',vorname:'Petra'},
                    {beziehung:'Kinde',name:'Produkt',vorname:'Klaus'}];
    res.send(haushalt);
   
   next(); 
});
app.get('/partner/:id/kontakt',function(req,res,next){
   var kontakt = [{kontaktart:'Telefon',zeit:'2016-01-15 12:30',titel:'Beratung'},
                    {kontaktart:'Email',zeit:'2016-01-15 12:40',titel:'Unterlagen'}];
    res.send(kontakt);
   
   next(); 
});

app.get('/angebote',function(req,res,next){
   var angebote = [{sparte='Kraftfahrt',beitragZent=10000}];
   res.send(angebote);
   next(); 
});
app.get('/antraege',function(req,res,next){
   var angebote = [{sparte='Kraftfahrt',beitragZent=12000}];
   res.send(angebote);
   next(); 
});
app.get('/vertaege',function(req,res,next){
   var angebote = [{sparte='Kraftfahrt',beitragZent=13000}];
   res.send(angebote);
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