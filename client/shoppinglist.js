Template.Listeachat.onCreated(function(){
	let self=this;
	self.autorun(function(){
		self.subscribe('recettes');
	});
});
Template.Listeachat.helpers({
	listeachat:function(){
		return Recettes.find({inMenu:true});
	}
});