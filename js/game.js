'use strict';
var app = angular.module('sadclickers', []);

//service
var serviceUnit = function () {
    this.unit = [
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
            "price": 9999999999,
            "url": "../images/units/yang leen.fw.png",
            "id": 10
        }
    ];
};
var load = function () {
    this.coinPerClick = parseInt(localStorage.getItem('coinPerClick'));
    this.currentUnits = JSON.parse(localStorage.getItem('currentUnits'));
    this.clicks = parseInt(localStorage.getItem('clicks'));
    this.coinspclick = parseInt(localStorage.getItem('coinspclick'));
    this.totalcoins = parseInt(localStorage.getItem('totalcoins'));
    this.coinsps = parseFloat(localStorage.getItem('coinsps'));
}
app.service("serviceUnit", serviceUnit);
app.service("load", load);

//controller
var news = function ($scope, $interval) {
    $scope.index = 3;
    let getRandomIndex = function (max) {
        let randomIndex = Math.floor(Math.random() * (max));
        $scope.index = randomIndex;
    };
    $interval(() => getRandomIndex($scope.newsArray.length), 10000);

    $scope.newsArray = [
    'The mayor inaugurated the sad holyday',
    'Everybody is crying',
    'Rivers of tears are killing people drowned',
    'Plz donate i\'m poor :$',
    'Terezinhaamaro',
    'Keanu reeves started a icecream shop',
    'Not being sad is now considered a crime'
    ];
}
var game = function ($scope, $interval, serviceUnit, load) {
    let bonus = [1, 3, 90, 230, 980, 1500, 13000, 30000, 100000, 30000000, 999999999];
    $scope.units = serviceUnit.unit;

    //load game if exists data in localStorage
    if (localStorage.length == 0) {
        $scope.coinPerClick = 1;
        $scope.currentUnits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        $scope.clicks = 0;
        $scope.coinspclick = 1;
        $scope.totalcoins = 0;
        $scope.coinsps = 1;
    } else {
        $scope.coinPerClick = load.coinPerClick;
        $scope.currentUnits = load.currentUnits;
        $scope.clicks = load.clicks;
        $scope.coinspclick = load.coinspclick;
        $scope.totalcoins = load.totalcoins;
        $scope.coinsps = load.coinsps;

    }
    

    //save
    $scope.save = function () {
        localStorage.setItem('coinPerClick', $scope.coinPerClick);
        localStorage.setItem('currentUnits', JSON.stringify($scope.currentUnits));
        localStorage.setItem('clicks', $scope.clicks);
        localStorage.setItem('coinspclick', $scope.coinspclick);
        localStorage.setItem('totalcoins', $scope.totalcoins.toFixed(2));
        localStorage.setItem('coinsps', $scope.coinsps.toFixed(3));
    }

    $interval(() => $scope.save(), 60000); //automaticaly saves every 1 min

    //money
    let coinsPerSecond = function () {
        $scope.totalcoins += $scope.coinsps / 10;
    }

    $interval(() => coinsPerSecond(), 100);

    //clickbutton
    $scope.click = function () {
        $scope.totalcoins += $scope.coinPerClick;
        $scope.clicks++;
    }

    //buyunit(id)
    $scope.buy = function (unit) {

        if ($scope.units[unit].price <= $scope.totalcoins) {

            $scope.totalcoins -= $scope.units[unit].price;
            $scope.currentUnits[unit]++; //unit ++
            $scope.units[unit].price += $scope.units[unit].price * 0.345; //AUMENTA O PREÇO

            //raises click
            $scope.coinspclick += bonus[unit];
            $scope.coinPerClick += bonus[unit]; //AUMENTA O CLICK            
            //raises coin per second
            $scope.coinsps += bonus[unit] / 9.9; //AUMENTA /S
        }
    }

    //showUnit(id)
    $scope.getImg = function (id) {
        return new Array(id);
    }
};

game.$inject = ['$scope', '$interval', 'serviceUnit', 'load'];
news.$inject = ['$scope', '$interval'];
app.controller('game', game);
app.controller('news', news);
