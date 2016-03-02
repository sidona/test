'use strict';

/**
 * @ngdoc function
 * @id testAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('MainCtrl', function ($scope,$window) {

    var date=[];
    $scope.dataTitre1 = {
      select: 'I',
      numerotation: [
        {id: 'I', value: 'I'},
        {id: '1', value: '1'},
        {id: 'A', value: 'A'}
      ],
     prefixe1:null,
      suffixe1:null
    },
      $scope.dataTitre2 = {
        select: 'I',
        numerotation: [
          {id: 'I', value: 'I'},
          {id: '1', value: '1'},
          {id: 'A', value: 'A'}
        ],
        prefixe2:null,
        suffixe2:null
      },
      $scope.dataTitre3 = {
        select: '1',
        numerotation: [
          {id: '1', value: '1'},
          {id: 'a', value: 'a'},
          {id: 'i', value: 'i'},
        ],
        prefixe3:null,
        suffixe3:null
      },
      $scope.dataTitre4 = {
        select: '1',
        numerotation: [
          {id: '1', value: '1'},
          {id: 'a', value: 'a'},
          {id: 'i', value: 'i'},
        ],
        prefixe4:null,
        suffixe4:null
      }

      $scope.dataTitre5 =  {
        select: '1',
      numerotation: [
      {id: '1', value: '1'},
      {id: 'a', value: 'a'},
      {id: 'i', value: 'i'}
    ],
      prefixe5:null,
      suffixe5:null
  }
      $scope.dataTitre6 =  {
        select: '1',
      numerotation: [
      {id: '1', value: '1'},
      {id: 'a', value: 'a'},
      {id: 'i', value: 'i'}
    ],
      prefixe6:null,
      suffixe6:null
  }

      $scope.saveData = function () {

        date=date.concat($scope.dataTitre1,$scope.dataTitre2,$scope.dataTitre3,$scope.dataTitre4,$scope.dataTitre5,$scope.dataTitre6);
       // $scope.data = JSON.stringify(date);
        console.log(JSON.stringify(date))
      }

      $scope.cancel=function(){

      $scope.dataTitre1.prefixe1=null;
      $scope.dataTitre2.prefixe2=null;
      $scope.dataTitre3.prefixe3 = null;
      $scope.dataTitre4.prefixe4 = null;
      $scope.dataTitre5.prefixe5 = null;
      $scope.dataTitre6.prefixe6 = null;

      $scope.dataTitre1.suffixe1 = null;
      $scope.dataTitre2.suffixe2 = null;
      $scope.dataTitre3.suffixe3 = null;
      $scope.dataTitre4.suffixe4 = null;
      $scope.dataTitre5.suffixe5 = null;
      $scope.dataTitre6.suffixe6 = null;
    }
  });
