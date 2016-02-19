REST-Services-Mockups
============================


#### Use Case 1
'/partner?q='Peter Produkt'
Result json array mit von 10 Partner

Detail-Informationen zum Partner
'/partner/id/
zum Haushalt
'/partner/id/haushalt

zu den Kontakten
'/partner/id/kontakt

zu den Angeboten
'/angebote?partnerId=:partnerId

zu den Anträgen
'/antraege?partnerId=:partnerId

zu den Verträge
'/vertraege?partnerId=:partnerId

Vorbelegungen zum Angebot
'/angebot/kraftfahrt/vorbelegung?partnerId=:partnerId'

Angebot Berechnen mit Fehlermeldung
Post '/angebot/kraftfahrt/berechnen'
Get 'angebot/kraftfahrt/berechnetesAngebot/id
Fehlermeldung json array

Berufauswahl
'berufe?q='inf'
json array mit Berufen

Angebot speichern
Post '/angebot/

Angebot kopieren
Post '/angebot?angebotId=:angebotId
Redirect Get angebotId2

Partnersuche anhand einer vsnr
'/partner?q=4711'
Partner-Detaildaten
'/partner/id'
Vertragsdaten
'/vertrag/vsnr/' liefert vertrag

Schaden-Daten zum Vorbelegen
Get '/schaden/kraftfahrt/vorbelegung?partnerId=:partnerId'




#### UseCase 2
Briefkasten von Sachbearbeiter mit der UserId m50000
'/briefkasten/m50000
json array von briefkasten header infos inkl gehe zu bezug -- gehe zu vertrag

Vertrag Detaildaten
'/vertrag/vsnr/


UseCase 3

Briefvorlagen
'/brief/vorlagen/'
Briefempfänger
'/brief/empfaenger'
