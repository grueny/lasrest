(function(){

	function BerufeController(server){
		this.berufe = [
			{berufId:1, berufURI: `${server}/berufe/1`, beruf: 'Kindergärtner'},
			{berufId:2, berufURI: `${server}/berufe/2`,beruf: 'Informatiker'},
			{berufId:3, berufURI: `${server}/berufe/3`,beruf: 'Bauer'},
			{berufId:4, berufURI: `${server}/berufe/4`,beruf: 'Arzt'},
			{berufId:5, berufURI: `${server}/berufe/5`,beruf: 'Innenausstatter'},
			{berufId:6, berufURI: `${server}/berufe/6`,beruf: 'Consultant'},
			{berufId:7, berufURI: `${server}/berufe/7`,beruf: 'Architekt'},
			{berufId:8, berufURI: `${server}/berufe/8`,beruf: 'Maurer'},
			{berufId:9, berufURI: `${server}/berufe/9`,beruf: 'Verkäufer'},
			{berufId:10, berufURI: `${server}/berufe/10`,beruf: 'IT Administrator'},
			{berufId:11, berufURI: `${server}/berufe/11`,beruf: 'Bürokaufmann'},
			{berufId:12, berufURI: `${server}/berufe/12`,beruf: 'Speditionskaufmann'},
			{berufId:13, berufURI: `${server}/berufe/13`,beruf: 'Geschäftsführer'},
			{berufId:14, berufURI: `${server}/berufe/14`,beruf: 'Technischer Zeichner'},
			{berufId:15, berufURI: `${server}/berufe/15`,beruf: 'Student'},
			{berufId:16, berufURI: `${server}/berufe/16`,beruf: 'Key Account Manager'},
			{berufId:17, berufURI: `${server}/berufe/17`,beruf: 'Sales Executive'},
			{berufId:18, berufURI: `${server}/berufe/18`,beruf: 'Developer'},
			{berufId:19, berufURI: `${server}/berufe/19`,beruf: 'Softwareentwickler'},
		];
	}

	BerufeController.prototype.search = function search(query){
		return this.berufe.filter(b => {
			return JSON.stringify(b).toLowerCase().indexOf(query.toLowerCase()) > -1;
		});
	};
	BerufeController.prototype.getAll = function getAll(){
			return this.berufe;
	};

	BerufeController.prototype.hasItemWithId = function hasItemWithId(id){
		var found = this.entries.filter(b => b.berufId === id);
		return found && found.length>0;
	};

	BerufeController.prototype.getById = function getById(id){
		var found = this.berufe.filter(b => b.berufId === id);
		if(!found || found.length ===0){
			return null;
		}
		return found[0]
	};

	module.exports = BerufeController;
})();
