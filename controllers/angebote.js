(function(){

	function AngeboteController(server){
		this.angebote = [
			{ angebotId: 5711, angebotURI: `${server}/angebote/5711`, sparte: 'Kraftfahrt', rolle: 'Versicherungsnehmer', agentur: '2008/21', versichertist: 'M-RS 6',  schaeden: 0, ablauf: '', zahlungsweise: 'jährlich', beitragZent: 9999 },
			{ angebotId: 5712, angebotURI: `${server}/angebote/5712`, sparte: 'Kraftfahrt', rolle: 'Versicherungsnehmer', agentur: '2008/20', versichertist: 'M-SQ 7',  schaeden: 1, ablauf: '', zahlungsweise: 'jährlich', beitragZent: 12000 },
			{ angebotId: 5713, angebotURI: `${server}/angebote/5713`, sparte: 'Kraftfahrt', rolle: 'Versicherungsnehmer', agentur: '2008/19', versichertist: 'M-RS 6',  schaeden: 0, ablauf: '', zahlungsweise: 'jährlich', beitragZent: 10010 },
			{ angebotId: 5714, angebotURI: `${server}/angebote/5714`, sparte: 'Kraftfahrt', rolle: 'Versicherungsnehmer', agentur: '2008/18', versichertist: 'M-SQ 7',  schaeden: 1, ablauf: '', zahlungsweise: 'jährlich', beitragZent: 11970 },
			{ angebotId: 5715, angebotURI: `${server}/angebote/5715`, sparte: 'Kraftfahrt', rolle: 'Versicherungsnehmer', agentur: '2008/17', versichertist: 'M-RS 6',  schaeden: 0, ablauf: '', zahlungsweise: 'jährlich', beitragZent: 10050 },
			{ angebotId: 5716, angebotURI: `${server}/angebote/5716`, sparte: 'Kraftfahrt', rolle: 'Versicherungsnehmer', agentur: '2008/16', versichertist: 'M-SQ 7',  schaeden: 1, ablauf: '', zahlungsweise: 'jährlich', beitragZent: 11990 },
			{ angebotId: 5717, angebotURI: `${server}/angebote/5717`, sparte: 'Kraftfahrt', rolle: 'Versicherungsnehmer', agentur: '2008/15', versichertist: 'M-RS 6',  schaeden: 0, ablauf: '', zahlungsweise: 'jährlich', beitragZent: 9950 },
			{ angebotId: 5718, angebotURI: `${server}/angebote/5718`, sparte: 'Kraftfahrt', rolle: 'Versicherungsnehmer', agentur: '2008/14', versichertist: 'M-SQ 7',  schaeden: 1, ablauf: '', zahlungsweise: 'jährlich', beitragZent: 11000 },
			{ angebotId: 5719, angebotURI: `${server}/angebote/5719`, sparte: 'Kraftfahrt', rolle: 'Versicherungsnehmer', agentur: '2008/13', versichertist: 'M-RS 6',  schaeden: 0, ablauf: '', zahlungsweise: 'jährlich', beitragZent: 9785 },
			{ angebotId: 5720, angebotURI: `${server}/angebote/5720`, sparte: 'Kraftfahrt', rolle: 'Versicherungsnehmer', agentur: '2008/12', versichertist: 'M-SQ 7',  schaeden: 1, ablauf: '', zahlungsweise: 'jährlich', beitragZent: 11500 },
			{ angebotId: 5721, angebotURI: `${server}/angebote/5721`, sparte: 'Kraftfahrt', rolle: 'Versicherungsnehmer', agentur: '2008/11', versichertist: 'M-RS 6',  schaeden: 0, ablauf: '', zahlungsweise: 'jährlich', beitragZent: 9555 },
			{ angebotId: 5799, angebotURI: `${server}/angebote/5799`, sparte: 'Kraftfahrt', rolle: 'Versicherungsnehmer', agentur: '2008/11', versichertist: 'M-RS 6',  schaeden: 0, ablauf: '', zahlungsweise: 'jährlich', beitragZent: 9559 }
		];
	}

	AngeboteController.prototype.getAll = function getAll(){
		return this.angebote;
	};

	AngeboteController.prototype.hasItemWithId = function hasItemWithId(id){
		var found = this.angebote.filter(b => b.angebotId === id);
		return found && found.length>0;
	};

	AngeboteController.prototype.getById = function getById(id){
		var found = this.angebote.filter(b => b.angebotId === id);
		if(!found || found.length ===0){
			return null;
		}
		var item = JSON.parse(JSON.stringify(found[0]));
		item.fahrzeugdaten = {fahrzeugart: 'PKW', kennzeichen: 'MS-CH 444', hsn: 432, typschl: 234, erstzulassung: '20.05.2015', fahrgestell: 'dj3rij35j42', fahrzeugstaerkePS: 340, austauschmotor: false, kennzeichenart: 'schwarzes Kennzeichen', wechselkennzeichen: false };
        item.nutzung = {beliebigeFahrer: 'unbekannt', nachtAbstellplatz: 'Straßenrand', fahrleistungKm: 30000, kilometerstand: 120433, abweichenderFahrzeughalter: false, nutzung: 'privat', selbstGenEigentum: true, wohneigentumart: 'Wohnung'};
        item.versSchutz = {haftpflichSFR: 'SF0 10%', volkaskoSFR: 'SF0 57%', tarifgruppe: 'normal', rahmenvertrag: 'keiner', versBeginn: '25.02.2016', zahlungsweise: 'monatlich'};
        return item;
	};

	module.exports = AngeboteController;
})();

