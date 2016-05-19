Template.NewRecette.events({
	'click .fa-close':function(){
		Session.set('newrecette',false);
	}
});