(function(){

	function PartnerController(server){
		this.partners = [
			{ partnerId: 4711, partnerURI: `${server}/partner/4711`, anrede: 'Herr', name: 'Meyer', vorname: 'Peter', geburtsdatum: '15.07.1956', alter: 59, staatsang: 'deutsch', familienstand: 'verheiratet', anzahlKinder: 2, telnummer: '0169 1234567',  beruf: 'Kindergärtner', anschrift: {strasse: 'Lindenstrasse 11', plz: '51598', ort: 'Friesenhagen', stadtteil: 'Aaseestadt'},  status: 'Kunde'},
			{ partnerId: 4712, partnerURI: `${server}/partner/4712`, anrede: 'Frau', name: 'Schmidt', vorname: 'Susanne', geburtsdatum: '01.08.1965', alter: 50, staatsang: 'deutsch', familienstand: 'ledig', anzahlKinder: 0, telnummer: '0176 7654354',  beruf: 'Informatiker', anschrift: {strasse: 'Adalbert-Stifter-Straße 1', plz: '53474', ort: 'Bad Neuenahr-Ahrweiler', stadtteil: 'Altstadt'},  status: 'Kunde'},
			{ partnerId: 4713, partnerURI: `${server}/partner/4713`, anrede: 'Herr', name: 'Marx', vorname: 'Benedikt', geburtsdatum: '23.04.1974', alter: 41, staatsang: 'deutsch', familienstand: 'ledig', anzahlKinder: 1, telnummer: '0170 5654789',  beruf: 'Bauer', anschrift: {strasse: 'Ehrenfelsgasse 125a', plz: '19258', ort: 'Greven', stadtteil: 'Altstadt'},  status: 'Kunde'},
			{ partnerId: 4714, partnerURI: `${server}/partner/4714`, anrede: 'Herr', name: 'Solinske', vorname: 'Frank', geburtsdatum: '05.12.1948', alter: 67, staatsang: 'spanisch', familienstand: 'ledig', anzahlKinder: 0, telnummer: '0171 3567963',  beruf: 'Arzt', anschrift: {strasse: 'Friedhofallee 8a', plz: '91522', ort: 'Ansbach', stadtteil: 'Altstadt'},  status: 'Kunde'},
			{ partnerId: 4715, partnerURI: `${server}/partner/4715`, anrede: 'Frau', name: 'Braun', vorname: 'Ramona', geburtsdatum: '18.11.1939', alter: 76, staatsang: 'deutsch', familienstand: 'geschieden', anzahlKinder: 3, telnummer: '0161 8080123',  beruf: 'Consultant', anschrift: {strasse: 'Friedhofallee 29a', plz: '91230', ort: 'Happurg Deckersberg', stadtteil: 'Altstadt'},  status: 'Kunde'},
			{ partnerId: 4716, partnerURI: `${server}/partner/4716`, anrede: 'Frau', name: 'Lehmann', vorname: 'Corinna', geburtsdatum: '12.02.1997', alter: 19, staatsang: 'türkisch', familienstand: 'verheiratet', anzahlKinder: 4, telnummer: '0160 7852553',  beruf: 'Innenausstatter', anschrift: {strasse: 'Imkerweg 18', plz: '	91807', ort: 'Solnhofen', stadtteil: 'Altstadt'},  status: 'Interessent'},
			{ partnerId: 4717, partnerURI: `${server}/partner/4717`, anrede: 'Frau', name: 'Breit', vorname: 'Marita', geburtsdatum: '21.04.1988', alter: 27, staatsang: 'russisch', familienstand: 'geschieden', anzahlKinder: 0, telnummer: '0177 6573256',  beruf: 'Architekt', anschrift: {strasse: 'Mozartgasse 15', plz: '66113', ort: 'Saarbrücken', stadtteil: 'Altstadt'},  status: 'Kunde'},
			{ partnerId: 4718, partnerURI: `${server}/partner/4718`, anrede: 'Herr', name: 'Müller', vorname: 'Markus', geburtsdatum: '29.05.1984', alter: 31, staatsang: 'deutsch', familienstand: 'verheiratet', anzahlKinder: 0, telnummer: '0178 9858145',  beruf: 'Maurer', anschrift: {strasse: 'Raimundgasse 3', plz: '81549', ort: 'München', stadtteil: 'Altstadt'},  status: 'Kunde'},
			{ partnerId: 4719, partnerURI: `${server}/partner/4719`, anrede: 'Herr', name: 'Wiegner', vorname: 'Dennis', geburtsdatum: '02.05.1979', alter: 36, staatsang: 'polnisch', familienstand: 'ledig', anzahlKinder: 0, telnummer: '0177 4483695',  beruf: 'Verkäufer', anschrift: {strasse: 'Schillerstraße 67', plz: '13465', ort: 'Berlin', stadtteil: 'Altstadt'},  status: 'Kunde'},
			{ partnerId: 4720, partnerURI: `${server}/partner/4720`, anrede: 'Herr', name: 'Sersch', vorname: 'Christian', geburtsdatum: '19.12.1991', alter: 24, staatsang: 'deutsch', familienstand: 'geschieden', anzahlKinder: 0, telnummer: '0171 8351476',  beruf: 'IT Administrator', anschrift: {strasse: 'Wabenweg 54', plz: '81549', ort: 'München', stadtteil: 'Altstadt'},  status: 'Kunde'},
			{ partnerId: 4721, partnerURI: `${server}/partner/4721`, anrede: 'Frau', name: 'Hares', vorname: 'Anna', geburtsdatum: '30.09.1957', alter: 58, staatsang: 'deutsch', familienstand: 'verwitwet', anzahlKinder: 1, telnummer: '0176 3653681',  beruf: 'Bürokaufmann', anschrift: {strasse: 'Gutenbergstraße 76a', plz: '10585', ort: 'Berlin', stadtteil: 'Charlottenburg'},  status: 'Kunde'},
			{ partnerId: 4722, partnerURI: `${server}/partner/4722`, anrede: 'Frau', name: 'Hamm', vorname: 'Monika', geburtsdatum: '06.04.1964', alter: 51, staatsang: 'spanisch', familienstand: 'verheiratet', anzahlKinder: 0, telnummer: '0175 4520488',  beruf: 'Speditionskaufmann', anschrift: {strasse: 'Fabrikstraße 98', plz: '21129', ort: 'Hamburg', stadtteil: 'Altstadt'},  status: 'Interessent'},
			{ partnerId: 4723, partnerURI: `${server}/partner/4723`, anrede: 'Frau', name: 'Serwe', vorname: 'Ingrid', geburtsdatum: '09.01.1981', alter: 35, staatsang: 'amerikanisch', familienstand: 'ledig', anzahlKinder: 1, telnummer: '0174 8821145',  beruf: 'Geschäftsführer', anschrift: {strasse: 'Erzherzog-Carl-Straße 83', plz: '48362', ort: 'Münster', stadtteil: 'Altstadt'},  status: 'Kunde'},
			{ partnerId: 4724, partnerURI: `${server}/partner/4724`, anrede: 'Frau', name: 'Jochem', vorname: 'Sarah', geburtsdatum: '23.11.1976', alter: 39, staatsang: 'deutsch', familienstand: 'verheiratet', anzahlKinder: 1, telnummer: '0172 5358792',  beruf: 'Technischer Zeichner', anschrift: {strasse: 'Dammstraße 21a', plz: '21129', ort: 'Hamburg', stadtteil: 'Altstadt'},  status: 'Kunde'},
			{ partnerId: 4725, partnerURI: `${server}/partner/4725`, anrede: 'Herr', name: 'Kirsch', vorname: 'Martin', geburtsdatum: '27.07.1986', alter: 29, staatsang: 'amerikanisch', familienstand: 'geschieden', anzahlKinder: 0, telnummer: '0171 2575966',  beruf: 'Student', anschrift: {strasse: 'Bahnhofstraße 2a', plz: '14480', ort: 'Potsdam', stadtteil: 'Altstadt'},  status: 'Interessent'},
            ];
		this.haushalt = [
			{beziehung: 'Lebensgefährte', name: 'Schmitt', vorname: 'Petra', geburtsdatum:'23.04.1974'},
        	{beziehung: 'Lebensgefährte', name: 'Bayer', vorname: 'Klaus', geburtsdatum: '30.06.1976'},
        	{beziehung: 'Lebensgefährte', name: 'Marx', vorname: 'Timo', geburtsdatum: '01.05.1968'},
        	{beziehung: 'Lebensgefährte', name: 'Solinske', vorname: 'Clara', geburtsdatum: '05.12.1983'},
        	{beziehung: 'Lebensgefährte', name: 'Müller', vorname: 'Selma', geburtsdatum: '09.11.1975'},
        	{beziehung: 'Lebensgefährte', name: 'Braun', vorname: 'Giovanni', geburtsdatum: '11.01.1976'},
        	{beziehung: 'Lebensgefährte', name: 'Wiegner', vorname: 'Nina', geburtsdatum: '25.02.1962'},
        	{beziehung: 'Lebensgefährte', name: 'Müller', vorname: 'Carina', geburtsdatum: '21.08.1990'},
        	{beziehung: 'Lebensgefährte', name: 'Serwe', vorname: 'Maraike', geburtsdatum: '17.11.1972'},
        	{beziehung: 'Lebensgefährte', name: 'Kirsch', vorname: 'Ursula', geburtsdatum: '28.02.1975'}
        	];

		this.kontaktdaten = [
			{kontaktart: 'Telefon', zeit: '2016-01-15 12:30', titel: 'Beratung'},
        	{kontaktart: 'Email', zeit: '2016-01-15 12:40', titel: 'Unterlagen', sachbearbeiter: 'Jutta Jansen'},
        	{kontaktart: 'Telefon', zeit: '2016-01-15 12:50', titel: 'Neue Vertragsunterlagen wegen Ihrer Anpassung', sachbearbeiter: 'Maik Thomson'},
        	{kontaktart: 'Telefon', zeit: '2016-02-15 13:40', titel: 'Beratung', sachbearbeiter: 'Jutta Jansen'},
        	{kontaktart: 'Telefon', zeit: '2016-02-15 13:50', titel: 'Neue Vertragsunterlagen wegen Ihrer Anpassung', sachbearbeiter: 'Maik Thomson'},
        	{kontaktart: 'Telefon', zeit: '2016-02-15 14:40', titel: 'Unterlagen', sachbearbeiter: 'Jutta Jansen'},
        	{kontaktart: 'Email', zeit: '2016-02-15 12:40', titel: 'Aktualisierung ihrer Versicherung', sachbearbeiter: 'Jutta Jansen'},
        	{kontaktart: 'Email', zeit: '2016-02-15 12:41', titel: 'Beratung', sachbearbeiter: 'Maik Thomson'},
        	{kontaktart: 'Email', zeit: '2016-02-15 12:42', titel: 'Aktualisierung ihrer Versicherung', sachbearbeiter: 'Jutta Jansen'},
        	{kontaktart: 'Email', zeit: '2016-02-15 12:43', titel: 'Beratung', sachbearbeiter: 'Maik Thomson'}
        ];
		}

		PartnerController.prototype.getOverview = function getOverView(){
			return this.partners.map(p => {
				var o = {};
				o.partnerId = p.partnerId;
				o.partnerURI = p.partnerURI;
				o.anrede = p.anrede;
				o.name = `${p.name}, ${p.vorname}`;
				o.geburtsdatum = p.geburtsdatum;
				o.anschrift = `${p.anschrift.strasse} - ${p.anschrift.plz} ${p.anschrift.ort}`;
				o.status = p.status;
				return o;
			});
		};

		PartnerController.prototype.hasItemWithId = function hasItemWithId(id){
			var found = this.partners.filter(p => p.partnerId === id);
			return found && found.length >0;
		};

		PartnerController.prototype.getById = function getById(id){
			var found = this.partners.filter(p => p.partnerId === id);
			return found[0];
		};

		PartnerController.prototype.getHaushalt = function getHaushalt(id){
			return [this.haushalt[id%10]];
		};

		PartnerController.prototype.getKontaktdaten = function getKontaktdaten(id){
			var mod = id%10;
			if(mod>5)
				return [this.kontaktdaten[mod],this.kontaktdaten[mod-1] ];
			return [this.kontaktdaten[mod],this.kontaktdaten[mod+2] ];
		};

		PartnerController.prototype.search = function search(query){
			return this.getOverview().filter(p => {
				return JSON.stringify(p).toLowerCase().indexOf(query.toLowerCase()) > -1;
			});
		};	
	
	module.exports = PartnerController;
})();
