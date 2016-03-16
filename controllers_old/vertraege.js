(function(){

	function VertraegeController(server){
		this.vertraege = [
			{ vertragId: 6711, vertragURI: `${server}/vertraege/6711`},
			{ vertragId: 6712, vertragURI: `${server}/vertraege/6712`},
			{ vertragId: 6713, vertragURI: `${server}/vertraege/6713`},
			{ vertragId: 6714, vertragURI: `${server}/vertraege/6714`},
			{ vertragId: 6715, vertragURI: `${server}/vertraege/6715`},
			{ vertragId: 6716, vertragURI: `${server}/vertraege/6716`},
			{ vertragId: 6717, vertragURI: `${server}/vertraege/6717`},
			{ vertragId: 6718, vertragURI: `${server}/vertraege/6718`},
			{ vertragId: 6719, vertragURI: `${server}/vertraege/6719`}
		];
	}

	VertraegeController.prototype.getAll = function getAll(){
		return this.vertraege;
	};

	VertraegeController.prototype.hasItemWithId = function hasItemWithId(id){
		var found = this.vertraege.filter(v => v.vertragId === id);
		return found && found.length>0;
	};

	VertraegeController.prototype.getById = function getById(id){
		var found = this.vertraege.filter(v => v.vertragId === id);
		if(!found || found.length ===0){
			return null;
		}
		return found[0];
	};

	module.exports = VertraegeController;
})();
