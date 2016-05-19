Template.Recette.onCreated(function(){
	this.editMode=new ReactiveVar(false);//similaire aux sessions
});

Template.Recette.events({
	'click .toggle-menu':function(){
		Meteor.call("toggleMenuItem",this._id,this.inMenu);
	},
	'click .fa-trash':function(){
		Meteor.call("deleteRecette",this._id);
	},
	'click .fa-pencil':function(event,template){
		template.editMode.set(!template.editMode.get())
	}
});
Template.Recette.helpers({
	updateRecetteId:function(){
		return this._id;
	},
	editmode:function(){
		return Template.instance().editMode.get();//on renvoit seulement l'instance de la template
	}
});