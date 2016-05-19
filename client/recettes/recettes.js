Template.Recettes.onCreated(function(){
	let self=this;
	self.autorun(function(){
		self.subscribe('recettes');
	});
});
Template.Recettes.helpers({
	recette:function(){
		return Recettes.find({});
	},
	recetteonoff:function(){
		if(Session.get('newrecette'))
		return "displayit";
		else return "hideit";
	}
});
Template.Recettes.events({
	'click .new-recipe':function(){
		Session.set('newrecette',true);
	},
	'click .fa-close':function(){
		Session.set('newrecette',false);
	}
});