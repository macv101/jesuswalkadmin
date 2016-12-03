var jesuswalkapp = angular.module('jesuswalkapp', ['ngRoute', 'ngResource'])
    .constant('root', 'http://localhost:8080/');

// ===============================
// = NAVIGATION CONTROLLER
// ===============================
jesuswalkapp.controller('navCtrl', function($scope, $route) {
    $scope.$route = $route;
    $scope.user = {
        firstName : 'Michael',
        lastName : 'Villar',
        unread: 82,
        notifications: 127
    };
    
    $scope.message = 'Everyone come and see how good I look!';
});

// ===============================
// = HOME CONTROLLER
// ===============================
jesuswalkapp.controller('homeCtrl', function($scope) {
    $scope.header = 'Home';
    var vm = this;
    vm.user = {
        firstName : 'Michael',
        lastName : 'Villar'
    };
    
    $scope.message = 'Everyone come and see how good I look!';
});

// ===============================
// = REGISTRATION CONTROLLER
// ===============================
jesuswalkapp.controller('registrationCtrl', function($scope) {
    $scope.header = 'Registration';
    var vm = this;
    vm.user = {
        firstName : 'Michael',
        lastName : 'Villar'
    };
    
    $scope.message = 'Everyone come and see how good I look!';
});

// ===============================
// = ROUTES CONFIGURATION
// ===============================
jesuswalkapp.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: '_pages/home.html',
        activeTab: 'home'
    })

    .when('/home', {
        templateUrl: '_pages/home.html',
        activeTab: 'home'
    })

    .when('/registration', {
        templateUrl: '_pages/registration.html',
        activeTab: 'registration'
    })

    .when('/about', {
        templateUrl: '_pages/about.html',
        activeTab: 'about'
    })

    .when('/test', {
        templateUrl: '_pages/test.html',
        activeTab: ''
    });
});