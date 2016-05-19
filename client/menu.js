Template.Menu.onCreated(function(){
	let self=this;
	self.autorun(function(){
		self.subscribe('recettes');
	});
});
Template.Menu.helpers({
	recettes:function(){
		return Recettes.find({inMenu:true});
	}
});