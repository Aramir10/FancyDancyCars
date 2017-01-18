myApp.directive('appInfo', function () {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        // template:"<h1> {{display.name}} </h1>"
        templateUrl: "homeDisplay.html"
    };
});

