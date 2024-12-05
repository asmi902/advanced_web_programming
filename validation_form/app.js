var app = angular.module('registrationApp', []);

app.controller('FormController', function ($scope) {
    $scope.user = {};

    $scope.submitForm = function () {
        if ($scope.registrationForm.$valid) {
            alert('Form submitted successfully!');
        } else {
            alert('Form has errors. Please fix them before submitting.');
        }
    };
});
