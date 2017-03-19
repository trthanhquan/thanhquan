var app = angular.module('app', ['ui.router']);

app.run(function($rootScope) {
    var loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
        loggedInUser = JSON.parse(loggedInUser);
        $rootScope.loggedIn = true;
        $rootScope.userRole = loggedInUser.role;
        console.log("loggedInUser: "+loggedInUser);
    }
});

angular.element(document).ready(function () {
    if (location.hash === '') {
        location.hash = '/';
    }
});
app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'parts/home.html'
    });
});

angular.element(document).ready(function () {
    if (location.hash === '') {
        location.hash = '/detail';
    }
});
app.config(function ($stateProvider) {
    $stateProvider.state('detail', {
        url: '/detail',
        templateUrl: 'parts/detail.html'
    });
});
angular.element(document).ready(function () {
    if (location.hash === '') {
        location.hash = '/admin';
    }
});
app.config(function ($stateProvider) {
    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: 'parts/admin.html'
    });
});