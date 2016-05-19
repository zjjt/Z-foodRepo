Meteor.publish('recettes',function(){
	return Recettes.find({author:this.userId});
});
//seconde souscription pour la page seule
Meteor.publish('singlerecette',function(id){
	check(id,String);

	return Recettes.find({_id:id});
});