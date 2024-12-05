var app = angular.module('studentApp', []);

app.controller('StudentController', function($scope) {
    $scope.students = [
        { rollNo: 111, name: "Ram", course: "Computer" },
        { rollNo: 112, name: "Meenu", course: "IT" },
        { rollNo: 113, name: "Renu", course: "Mech" }
    ];
});
