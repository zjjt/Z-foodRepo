Template.RecetteSeule.onCreated(function(){
	let self=this;
	self.autorun(function(){
		let id=FlowRouter.getParam('id');
		self.subscribe('singlerecette',id);
	});
});
Template.RecetteSeule.helpers({
	recette:function(){
		let id=FlowRouter.getParam('id');
		return Recettes.findOne({_id:id});
	}
});