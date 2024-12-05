// Define the AngularJS application
var app = angular.module('marksApp', []);

// Create a custom service to calculate average and maximum
app.service('MarksService', function () {
    this.calculateAverage = function (marks) {
        var total = marks.student1 + marks.student2 + marks.student3;
        return total / 3;
    };

    this.calculateMaximum = function (marks) {
        return Math.max(marks.student1, marks.student2, marks.student3);
    };
});

// Define the controller to use the service
app.controller('MarksController', function ($scope, MarksService) {
    $scope.marks = {
        student1: null,
        student2: null,
        student3: null
    };

    $scope.average = null;
    $scope.maximum = null;

    $scope.calculateAverage = function () {
        $scope.average = MarksService.calculateAverage($scope.marks);
    };

    $scope.calculateMaximum = function () {
        $scope.maximum = MarksService.calculateMaximum($scope.marks);
    };
});
