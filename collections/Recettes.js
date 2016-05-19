
Recettes= new Mongo.Collection('recettes');
if(Meteor.isCordova)
{
	Ground.Collection(Recettes);
}

Recettes.allow({
	insert:function(userId,doc){
		return !!userId;//means user exists
	},
	update:function(userId,doc){
		return !!userId;
	}
});

Ingredient=new SimpleSchema({
	nom:{
		type:String
	},
	nombre:{
		type:String
	}
});
RecetteSchema=new SimpleSchema({
	name:{
		type:String,
		label:"Nom"
	},
	desc:{
		type:String,
		label:"Description"
	},
	ingredients:{
		type:[Ingredient]//en mettan ds un tableau on peut avoir des increments
	},
	inMenu:{
		type:Boolean,
		defaultValue:false,
		optional:true,
		autoform:{
			type:"hidden"
		}
	},
	author:{
		type:String,
		label:"Auteur",
		autoValue:function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}
	},
//ajouter photo si pris
	/*photo:{
		type:String,
		label:"Photo",
		optional:true,
		custom:function(){
			if(Session.equals("photo","rien")){
				return "";
			}
			else {
				return Session.get("photo");
			}
		}

	},*/
	createdAt:{
		type:Date,
		label:"Créer le",
		autoValue:function(){
			return new Date()
		},
		autoform:{
			type:"hidden"
		}
	}
});
Meteor.methods({
	toggleMenuItem:function(id,currentState){
		Recettes.update(id,{
			$set:{
				inMenu:!currentState
			}
		});
	},
	deleteRecette:function(id){
		Recettes.remove(id);
	}
});
Recettes.attachSchema(RecetteSchema);
if(Meteor.isClient)
{
	Ground.methodResume([
		'deleteRecette',
		'toggleMenuItem'
	]);
}
