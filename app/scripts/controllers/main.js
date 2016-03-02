'use strict';

/**
 * @ngdoc function
 * @id testAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('MainCtrl', function ($scope) {

    $scope.data = [
      {
        id: 1,
        name: "Titre 1",
        numero: {
          select: 'I',
          numerotation: [
            {id: 'I', value: 'I'},
            {id: '1', value: '1'},
            {id: 'A', value: 'A'}
          ],
          prefixe: '',
          suffixe: ''
        }
      },
      {
        id: 2,
        name: "Titre 2",
        numero: {
          select: '1',
          numerotation: [
            {id: 'I', value: 'I'},
            {id: '1', value: '1'},
            {id: 'A', value: 'A'}
          ],
          prefixe: null,
          suffixe: null
        }
      },
      {
        id: 3,
        name: "Titre 3",
        numero: {
          select: '1',
          numerotation: [
            {id: '1', value: '1'},
            {id: 'a', value: 'a'},
            {id: 'i', value: 'i'}
          ],
          prefixe: null,
          suffixe: null
        }
      },
      {
        id: 4,
        name: "Titre 4",
        numero: {
          select: '1',
          numerotation: [
            {id: '1', value: '1'},
            {id: 'a', value: 'a'},
            {id: 'i', value: 'i'}
          ],
          prefixe: null,
          suffixe: null
        }
      },
      {
        id: 5,
        name: "Titre 5",
        numero: {
          select: 'a',
          numerotation: [
            {id: '1', value: '1'},
            {id: 'a', value: 'a'},
            {id: 'i', value: 'i'}
          ],
          prefixe: null,
          suffixe: null
        }
      },
      {
        id: 6,
        name: "Titre 6",
        numero: {
          select: 'i',
          numerotation: [
            {id: '1', value: '1'},
            {id: 'a', value: 'a'},
            {id: 'i', value: 'i'}
          ],
          prefixe: null,
          suffixe: null
        }
      }
    ];


    $scope.saveData = function () {
      console.log(JSON.stringify($scope.data))
    };

    $scope.original = angular.copy($scope.data);

    $scope.cancel = function () {
      $scope.data = angular.copy($scope.original);
    };
    $scope.cancel();
  });
