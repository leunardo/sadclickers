'use strict';
var app = angular.module("sadclickers", []);

var news = function ($scope, $interval) {    
    $scope.index = 3;
    var getRandomIndex = function(max){
        var min = 0;
        var randomIndex = Math.floor(Math.random() * (max - min)) + min;
        $scope.index = randomIndex;        
    };    
    
    $scope.newsArray = [ 
        "The mayor inaugurated the sad holyday",
        "Everybody is crying",
        "Rivers of tears are killing people drowned",
        "Plz donate i'm poor :$",
        "Terezinhaamaro",
        "Keanu reeves started a icecream shop"
    ];
     
     
     $interval(() => getRandomIndex($scope.newsArray.length), 10000);     
};

var buyUnit = function ($scope) {
    
};

var allUnits = function ($scope) {
    
};

app.controller("news", news);
app.controller("buyUnit", buyUnit);
app.controller("allUnits", allUnits);