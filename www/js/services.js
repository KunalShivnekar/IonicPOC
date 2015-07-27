angular.module('starter.services', [])


.factory('Training', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var trainings = [{
    id: 0,
    activity: 'Allianceway Ambiguity Testing',
    startdate:'5 Jun 16',
    enddate:'5 Jun 16',
    participation:' L1-3 Testing Competency',
    trainer:'Madhurima N',
    timings:'11:00AM to 1:00PM '
  }, {
    id: 1,
    activity: 'Allianceway Ambiguity Testing1',
    startdate:'5 Jun 16',
    enddate:'5 Jun 16',
    participation:' L1-3 Testing Competency',
    trainer:'Madhurima N',
    timings:'11:00AM to 1:00PM '
  },{
    id: 2,
    activity: 'Allianceway Ambiguity Testing2',
    startdate:'5 Jun 16',
    enddate:'5 Jun 16',
    participation:' L1-3 Testing Competency',
    trainer:'Madhurima N',
    timings:'11:00AM to 1:00PM '
  }, {
    id: 3,
    activity: 'Allianceway Ambiguity Testing3',
    startdate:'5 Jun 16',
    enddate:'5 Jun 16',
    participation:' L1-3 Testing Competency',
    trainer:'Madhurima N',
    timings:'11:00AM to 1:00PM '
  }, {
    id: 4,
    activity: 'Allianceway Ambiguity Testing4',
    startdate:'5 Jun 16',
    enddate:'5 Jun 16',
    participation:' L1-3 Testing Competency',
    trainer:'Madhurima N',
    timings:'11:00AM to 1:00PM '

  }];

  return {
    all: function() {
      return trainings;
    },
    remove: function(training) {
    	trainings.splice(trainings.indexOf(training), 1);
    },
    get: function(trainingid) {
      for (var i = 0; i < trainings.length; i++) {
        if (trainings[i].id === parseInt(trainingid)) {
          return trainings[i];
        }
      }
      return null;
    }
  };
})

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'user1' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
});
