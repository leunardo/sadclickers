'use strict';
var app = angular.module("sadclickers", []);

var news = function ($scope, $interval) {
    $scope.index = 3;
    var getRandomIndex = function (max) {
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
        "Keanu reeves started a icecream shop",
        "Not being sad is now considered a crime"
    ];


    $interval(() => getRandomIndex($scope.newsArray.length), 10000);
};

var buyUnit = function ($scope) {
    $scope.units = [
        {
            "name": "sadgirl",
            "price": Math.pow(3, Math.PI),
            "url": "../images/units/sadgirl.fw.png",
            "id": 0
        }, {
            "name": "buckethat",
            "price": Math.pow(7, Math.PI),
            "url": "../images/units/buckethat.fw.png",
            "id": 1
        }, {
            "name": "slav squatting",
            "price": Math.pow(13, Math.PI),
            "url": "../images/units/slav squatting.fw.png",
            "id": 2
        }, {
            "name": "sad face",
            "price": Math.pow(37, Math.PI),
            "url": "../images/units/sadfacewhite.jpg",
            "id": 3
        }, {
            "name": "smoking child",
            "price": Math.pow(61, Math.PI),
            "url": "../images/units/smokingchild.jpg",
            "id": 4
        }, {
            "name": "sad pepe",
            "price": Math.pow(127, Math.PI),
            "url": "../images/units/sadpepe.fw.png",
            "id": 5
        }, {
            "name": "greek random statue",
            "price": Math.pow(181, Math.PI),
            "url": "../images/units/greek statue.fw.png",
            "id": 6
        }, {
            "name": "sad guga",
            "price": Math.pow(251, Math.PI),
            "url": "../images/units/sadguga.fw.png",
            "id": 7
        }, {
            "name": "windows 95",
            "price": Math.pow(281, Math.PI),
            "url": "../images/units/windows95.fw.png",
            "id": 8
        }, {
            "name": "psycho banana",
            "price": Math.pow(331, Math.PI),
            "url": "../images/units/psychobanana.fw.png",
            "id": 9
        }, {
            "name": "yang leen",
            "price": Math.pow(577, Math.PI),
            "url": "../images/units/yang leen.fw.png",
            "id": 10
        }
    ];
};

var allUnits = function ($scope) {

};

var money = function ($scope, $interval) {
    var coinsPerSecond = function () {
        $scope.totalcoins += $scope.coinsps / 10;
    }
    $scope.totalcoins = 0;
    $scope.coinsps = 1;
    $interval(() => coinsPerSecond(), 100);
};

app.controller("news", news);
app.controller("money", money);
app.controller("buyUnit", buyUnit);
app.controller("allUnits", allUnits);
