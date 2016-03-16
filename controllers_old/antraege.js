(function(){
	function AntraegeController(server){
		this.antraege = [
			{antragId: 8711, antragURI: `${server}/antraege/8711`},
			{antragId: 8712, antragURI: `${server}/antraege/8712`},
			{antragId: 8713, antragURI: `${server}/antraege/8713`},
			{antragId: 8714, antragURI: `${server}/antraege/8714`},
			{antragId: 8715, antragURI: `${server}/antraege/8715`},
			{antragId: 8716, antragURI: `${server}/antraege/8716`},
			{antragId: 8717, antragURI: `${server}/antraege/8717`},
			{antragId: 8718, antragURI: `${server}/antraege/8718`},
			{antragId: 8719, antragURI: `${server}/antraege/8719`}
		];
	}

	AntraegeController.prototype.getAll = function getAll(){
		return this.antraege;
	};

	AntraegeController.prototype.hasItemWithId = function hasItemWithId(id){
		var found = this.antraege.filter(a => a.antragId === id);
		return found && found.length>0;
	};

	AntraegeController.prototype.getById = function getById(id){
		var found = this.antraege.filter(a => a.antragId === id);
		if(!found || found.lenth ===0){
			return null;
		}
		return found[0];
	};

	module.exports = AntraegeController;
})();
