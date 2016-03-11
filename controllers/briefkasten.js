(function(){

	function BriefkastenController(server){
		this.entries = [
			{ entryId: 7710, entryURI: `${server}/briefkasten/1/7710`, datum: '01.03.2016', text: 'UB-Vorlage', bezug: null, bezugId: -1, bezugsURI: null },
			{ entryId: 7711, entryURI: `${server}/briefkasten/1/7711`, datum: '02.03.2016', text: 'Wiedervorlage', bezug: 'Vertrag', bezugId: 6711, bezugsURI: `${server}/vertrag/6711` },
			{ entryId: 7712, entryURI: `${server}/briefkasten/1/7712`, datum: '03.03.2016', text: 'UB-Vorlage', bezug: null, bezugId: -1, bezugsURI: null },
			{ entryId: 7713, entryURI: `${server}/briefkasten/1/7713`, datum: '04.03.2016', text: 'Wiedervorlage', bezug: 'Vertrag', bezugId: 6712, bezugsURI: `${server}/vertrag/6712` },
			{ entryId: 7714, entryURI: `${server}/briefkasten/1/7714`, datum: '05.03.2016', text: 'UB-Vorlage', bezug: null, bezugId: -1, bezugsURI: null },
			{ entryId: 7715, entryURI: `${server}/briefkasten/1/7715`, datum: '06.04.2016', text: 'Wiedervorlage', bezug: 'Vertrag', bezugId: 6713, bezugsURI: `${server}/vertrag/6713` },
			{ entryId: 7716, entryURI: `${server}/briefkasten/1/7716`, datum: '07.04.2016', text: 'UB-Vorlage', bezug: null, bezugId: -1, bezugsURI: null },
			{ entryId: 7717, entryURI: `${server}/briefkasten/1/7717`, datum: '08.04.2016', text: 'Wiedervorlage', bezug: 'Vertrag', bezugId: 6714, bezugsURI: `${server}/vertrag/6714` },
			{ entryId: 7718, entryURI: `${server}/briefkasten/1/7718`, datum: '09.04.2016', text: 'UB-Vorlage', bezug: null, bezugId: -1, bezugsURI: null },
			{ entryId: 7719, entryURI: `${server}/briefkasten/1/7719`, datum: '10.05.2016', text: 'Wiedervorlage', bezug: 'Vertrag', bezugId: 6715, bezugsURI: `${server}/vertrag/6715` },
		];
	}
 
	BriefkastenController.prototype.getAll = function getAll(){
		return this.entries;
	};

	BriefkastenController.prototype.hasItemWithId = function hasItemWithId(id){
		var found = this.entries.filter(e => e.entryId === id);
		return found && found.length>0;
	};

	BriefkastenController.prototype.getById = function getById(id){
		var found = this.entries.filter(e => e.entryId === id);
		if(!found || found.length ===0){
			return null;
		}
		return found[0];
	};

	module.exports = BriefkastenController;
})();
