angular.module('animalApp').service('animalService', function($http){
  this.getAnimals = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:3003/api/animals'
    })
  }
  this.postAnimal = function(animal){
    return $http({
      method: 'POST',
      url: 'http://localhost:3003/api/animal',
      data: animal,
    })
  }
})
