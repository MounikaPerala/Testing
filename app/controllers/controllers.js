var MyFirstController = function($scope, $http) {
    $scope.ManyHellos = ['Hello', 'Hola', 'Bonjour', 'Guten Tag', 'Ciao', 'Namaste', 'Yiasou'];

    var userData = {
        firstName: 'Sebastian',
        lastName: 'Brukalo',
        languages: ["C#", "JavaScript", "C++", "Other Web Stuff"],
        email: "email@email.email",
        startDate: new Date(2000, 02, 04), // month value is 0 based, others are 1 based.
        dashes: 'something that should not have spaces'

    }

    $scope.data = userData;

};

app.controller("MyFirstController", ["$scope", MyFirstController]);