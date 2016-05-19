//check for loggin or logout
Ground.Collection(Meteor.users);
if(Meteor.isClient)
	{
		Accounts.onLogin(function(){
			FlowRouter.go('recettes');
		});
		Accounts.onLogout(function(){
			FlowRouter.go('home');
		});

	}

FlowRouter.triggers.enter([function(context,redirect){
	if(!Meteor.userId())
	{
		FlowRouter.go('home');
	}
}]);
FlowRouter.route('/',{
	name:'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('recettes');
		}
		BlazeLayout.render('Homelayout');
	}
});

FlowRouter.route('/recettes',{
	name:'recettes',
	action(){
	BlazeLayout.render('Mainlayout',{
		main:'Recettes'
	});
}
});

FlowRouter.route('/recette/:id',{
	name:'recette',
	action(){
	BlazeLayout.render('Mainlayout',{
		main:'RecetteSeule'
	});
}
});

FlowRouter.route('/menu',{
	name:'menu',
	action(){
		BlazeLayout.render('Mainlayout',{main:'Menu'});
	}
});
FlowRouter.route('/liste-achat',{
	name:'listeachat',
	action(){
	BlazeLayout.render('Mainlayout',{main:'Listeachat'});
}
});

