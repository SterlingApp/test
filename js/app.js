// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova', 'starter.services'])

.run(function($ionicPlatform,$rootScope,$location,$state,$cordovaToast,$timeout,$interval) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})
	.state('login', {
		cache: false,
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
	})
	.state('contact', {
		url: '/contact',
		templateUrl: 'templates/contact.html',
		controller: 'contactCtrl'
	})
	
	// HSA
	.state('app.hsa', {
		url: "/hsa",
		views: {
			'tab-hsa': {
				templateUrl: "templates/hsa.html",
				controller: 'HsaCtrl'
			}
		}
	})
	.state('accounts', {
		url: '/accounts',
		templateUrl: 'templates/account.html',
		controller: 'AccountCtrl'
	})
	.state('health', {
		url: '/health',
		templateUrl: 'templates/health.html',
		controller: 'HealthCtrl'
	})
	.state('makecontribution', {
		cache: false,
		url: '/makecontribution',
		templateUrl: 'templates/makecontribution.html',
		controller: 'makecontributeCtrl'
	})
	.state('activitystmnt', {
		cache: false,
		url: '/activitystmnt',
		templateUrl: 'templates/activitystmnt.html',
		controller: 'ActivitystmntCtrl'
	})
	.state('payme', {
		cache: false,
		url: '/payme',
		templateUrl: 'templates/payme.html',
		controller: 'PaymeCtrl'
	})
	.state('payprovider', {
		cache: false,
		url: '/payprovider',
		templateUrl: 'templates/payprovider.html',
		controller: 'PayproviderCtrl'
	})
	.state('taxyear', {
		url: '/taxyear',
		templateUrl: 'templates/taxyear.html',
		controller: 'TaxyearCtrl'
	})
	.state('hsastatement', {
		url: '/hsastatement',
		templateUrl: 'templates/hsastatement.html',
		controller: 'HsastatementCtrl'
	})
	.state('activityContribution', {
		url: '/activityContribution',
		templateUrl: 'templates/activityContribution.html',
		controller: 'activityContributionyCtrl'
	})
	.state('disbursement', {
		url: '/disbursement',
		templateUrl: 'templates/disbursement.html',
		controller: 'DisbursementCtrl'
	})
	.state('scheduledcontribute', {
		url: '/scheduledcontribute',
		templateUrl: 'templates/scheduledcontribute.html',
		controller: 'ScheduledcontributeCtrl'
	})
	
	//FSA
	.state('app.fsa', {
		url: "/fsa",
		views: {
			'tab-fsa': {
				templateUrl: "templates/fsa.html",
				controller: 'FsaCtrl'
			}
		}
	})
	.state('contribution', {
		url: '/contribution',
		templateUrl: 'templates/contribution.html',
		controller: 'ContributionCtrl'
	})
	.state('make', {
		url: '/make',
		templateUrl: 'templates/make.html',
		controller: 'MakeCtrl'  
	})	
	.state('activity', {
		url: '/activity',
		templateUrl: 'templates/activity.html',
		controller: 'ActivityCtrl'
	})
	.state('recent', {
		url: '/recent',
		templateUrl: 'templates/recent.html',
		controller: 'RecentCtrl'
	})
	.state('recentdisburse', {
		url: '/recentdisburse',
		templateUrl: 'templates/recentdisburse.html',
		controller: 'RecentdisburseCtrl'
	})
	.state('scheduleddisbursement', {
		url: '/scheduleddisbursement',
		templateUrl: 'templates/scheduleddisbursement.html',
		controller: 'ScheduledDisbursementCtrl'
	})
	.state('lastdisbursement', {
		url: '/lastdisbursement',
		templateUrl: 'templates/lastdisbursement.html',
		controller: 'lastdisbursementCtrl'
	})
	.state('lastcontribution', {
		url: '/lastcontribution',
		templateUrl: 'templates/lastcontribution.html',
		controller: 'lastcontributionCtrl'
	})
	.state('fsacontribution', {
		url: '/fsacontribution',
		templateUrl: 'templates/fsacontribution.html',
		controller: 'fsacontributionCtrl'
	})
	.state('information', {
		url: '/information',
		templateUrl: 'templates/information.html',
		controller: 'InformationCtrl'
	})
	.state('availablebalance', {
		url: '/availablebalance',
		templateUrl: 'templates/availablebalance.html',
		controller: 'AvailablebalanceCtrl'
	})
	.state('newclaim', {
		cache: false,
		url: '/newclaim',
		templateUrl: 'templates/newclaim.html',
		controller: 'newclaimCtrl'
	})
	.state('recentdis', {
		url: '/recentdis',
		templateUrl: 'templates/recentdisburse.html',
		controller: 'RecentdisCtrl'
	})
	.state('recentcontribute', {
		url: '/recentcontribute',
		templateUrl: 'templates/recentcontribute.html',
		controller: 'RecentcontributeCtrl'
	})
	.state('new', {
		cache: false,
		url: '/new',
		templateUrl: 'templates/new.html',
		controller: 'NewCtrl'
	})
	.state('fsapayme', {
		url: '/fsapayme',
		templateUrl: 'templates/fsa/fsapayme.html',
		controller: 'FsapaymeCtrl'
	})
	.state('fsapayprovider', {
		cache: false,
		url: '/fsapayprovider',
		templateUrl: 'templates/fsa/fsapayprovider.html',
		controller: 'fsapayproviderCtrl'
	})
	.state('fsadependent', {
		cache: false,
		url: '/fsadependent',
		templateUrl: 'templates/fsa/fsadependent.html',
		controller: 'fsadependentCtrl'
	})	
	
	// HRA 
	.state('app.hra', {
		url: "/hra",
		views: {
			'tab-hra': {
				templateUrl: "templates/hra/hra.html",
				controller: 'HraCtrl'
			}
		}
	})
	.state('hraacct', {
		url: '/hraacct',
		templateUrl: 'templates/hra/hraacct.html',
		controller: 'HraacctCtrl'
	})
	.state('hracontribution', {
		url: '/hracontribution',
		templateUrl: 'templates/hra/hracontribution.html',
		controller: 'HracontributionCtrl'
	})
	.state('hradisburse', {
		url: '/hradisburse',
		templateUrl: 'templates/hra/hradisburse.html',
		controller: 'HradisburseCtrl'
	})
	.state('hranewclaim', {
		url: '/hranewclaim',
		templateUrl: 'templates/hra/hranewclaim.html',
		controller: 'HranewclaimCtrl'
	})
	.state('hrarecent', {
		url: '/hrarecent',
		templateUrl: 'templates/hra/hrarecent.html',
		controller: 'HrarecentCtrl'
	})
	.state('hrapayme', {
		url: '/hrapayme',
		templateUrl: 'templates/hra/hrapayme.html',
		controller: 'HrapaymeCtrl'
	})
	.state('hrapayprovider', {
		url: '/hrapayprovider',
		templateUrl: 'templates/hra/hrapayprovider.html',
		controller: 'HrapayproviderCtrl'
	})
	.state('hrabal', {
		url: '/hrabal',
		templateUrl: 'templates/hra/hrabal.html',
		controller: 'HrabalCtrl'
	})
	.state('paymeacoinde', {
		url: '/paymeacoinde',
		templateUrl: 'templates/hra/paymeacoinde.html',
		controller: 'PaymeacoindeCtrl'
	})
	.state('payprovideracoinde', {
		url: '/payprovideracoinde',
		templateUrl: 'templates/hra/payprovideracoinde.html',
		controller: 'PayprovideracoindeCtrl'
	})
	
	// cobra
	.state('app.cobra', {
		url: "/cobra",
		views: {
			'tab-cobra': {
				templateUrl: "templates/cobra/cobra.html",
				controller: 'CobraCtrl'
			}
		}
	})
	.state('cobraaccount', {
		url: "/cobraaccount",
		templateUrl: "templates/cobra/cobraaccount.html",
		controller: 'CobraaccountCtrl'
	})
	.state('cobrapayment', {
		cache:false,
		url: "/cobrapayment",
		templateUrl: "templates/cobra/cobrapayment.html",
		controller: 'CobraPaymentCtrl'
	});
	$urlRouterProvider.otherwise('/login');
});
