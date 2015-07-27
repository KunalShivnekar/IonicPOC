angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.empData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

 $scope.logout = function() {
    $state.go('login');
  };
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LoginViewController',  function($scope, $ionicPopup, $state, LoginService) {
console.log('Inside LoginViewController');
$scope.user = {
    username: '',
    password : ''
  };
 $scope.signIn = function(form) {
      console.log(form);
      console.log("LOGIN user: " + $scope.user.username + " - PW: " + $scope.user.password);
      if(form.$valid) {
      console.log('Sign-In', $scope.user.username);
//                              $state.go('app.WelcomScreen');

               LoginService.loginUser($scope.user.username, $scope.user.password).success(function(user) {
                        $state.go('app.notifications');
                      }).error(function(data) {
                          var alertPopup = $ionicPopup.alert({
                              title: 'Login failed!',
                              template: 'Please check your credentials!'
                          });
                      });
      }
    };
})

.controller('MonthlyLearningController', function($scope, $state) {
console.log('Inside MonthlyLearningController');
$scope.trainings = [
                       {id:0 ,pic:'img/searchemp.png',  category:'Competency',     activity: 'Allianceway Ambiguity Testing', startdate:'5 Jun 16', enddate:'5 Jun 16',participation:' L1-3 Testing Competency',trainer:'Madhurima N',timings:'11:00AM to 1:00PM '},
                       {id:1, pic:'img/searchemp.png',   category:'ORG ',           activity: 'Finance and Payroll Induction', startdate:'8 Jun 16', enddate:'8 Jun 16',participation:'New Joinees',            trainer:'Leelaram Vegi',          timings:'11:00AM to 1:00PM '},
                       {id:2, pic:'img/searchemp.png',  category:'Competency',     activity: 'Allianceway Ambiguity Testing', startdate:'5 Jun 16', enddate:'5 Jun 16',participation:'L1-3 Testing Competency',trainer:'Madhurima N',timings:'11:00AM to 1:00PM '},
                       {id:3, pic:'img/searchemp.png',  category:'Competency',     activity: 'Allianceway Ambiguity Testing', startdate:'5 Jun 16', enddate:'5 Jun 16',participation:'L1-3 Testing Competency',trainer:'Madhurima N',timings:'11:00AM to 1:00PM '},
                       {id:4, pic:'img/searchemp.png',  category:'Competency',     activity: 'Allianceway Ambiguity Testing', startdate:'5 Jun 16', enddate:'5 Jun 16',participation:'L1-3 Testing Competency',trainer:'Madhurima N',timings:'11:00AM to 1:00PM '}];
})


.controller('LearningDetailsController', function($scope, $stateParams, Training) {
console.log('Inside LearningDetailsController');
  $scope.training = Training.get($stateParams.trainingid);
})

.controller('BuddyReferralController', function($scope, $state) {
$scope.openings = [
                     {designation:'Sr. Lead Consultant-Build/Release Management', skillset: 'Build & Release Management, Configuration management, TFS, Database automation', yearsofexp:'9-12'},
                     {designation:'Sr. Consultant/Associate Architect-ROR', skillset: 'Ruby on Rails, Hands on exp in rails application', yearsofexp:'4-9'},
                     {designation:'Associate Architect-Informatica', skillset: 'Informatica Power Center, Unix, Oracle', yearsofexp:'6-9'},
                     {designation:'Business Analyst(Health Care domain)', skillset: 'Business Analyst with Agile exp, Health care domain is a must', yearsofexp:'6-9'}];
 })

.controller('EmployeeSearchController', function($scope, $ionicListDelegate, $state, $rootScope) {
console.log('Inside EmployeeSearchController');

    $scope.searchUsing = '';

    $scope.employees = [
    {name:'Mohan',     emailID: 'mohan@ags.com', firstName:'Mohan', lastName:'Kuladeep', empID:'1'},
    {name:'Surya',     emailID:'surya@ags.com',  firstName:'Surya', lastName:'Kota',     empID:'2'},
    {name:'Kunal',     emailID:'kunal@ags.com',  firstName:'Kunal', lastName:'K',        empID:'3'},
    {name:'Sonal',     emailID:'sonal@ags.com',  firstName:'Sonal', lastName:'Jain',     empID:'4'},
    {name:'Sunil',     emailID:'sunil@ags.com',  firstName:'Sunil', lastName:'Surname',  empID:'5'}];
})

.controller('EmployeeSearchResultsController', function($scope, $ionicListDelegate, $state, $rootScope) {
console.log('Inside EmployeeSearchResultsController');

    console.log('Emp details'+$scope.empData.firstName+'Last Name= '+$scope.empData.lastName);
    console.log('Emp details using root scope'+'  FirstName: '+$rootScope.empData.firstName+'Last Name= '+$rootScope.empData.lastName);

    $scope.employees = [
    {name:'Mohan',     emailID: 'mohan@ags.com', firstName:'Mohan', lastName:'Kuladeep'},
    {name:'Surya',     emailID:'surya@ags.com',  firstName:'Surya',  lastName:'Kota'},
    {name:'Kunal',     emailID:'kunal@ags.com',  firstName:'Kunal',  lastName:'K'},
    {name:'Sonal',     emailID:'sonal@ags.com',  firstName:'Sonal',  lastName:'Jain'},
    {name:'Sunil',     emailID:'sunil@ags.com',  firstName:'Sunil',  lastName:'Surname'}] ;
})

.controller('KeyContactsController', function($scope, $state) {
    console.log('Inside KeyContactsController');

    $scope.departments = [
    {name:'HR',     dlID: 'hr_support@ags.com', contacts:[{contactName:'HR-1', contactID:'hr1@ags.com'},{contactName:'HR-2', contactID:'hr2@ags.com'}]},
    {name:'Learning',     dlID:'learning_support@ags.com', contacts:[{contactName:'Learning-1', contactID:'Learning1@ags.com'},{contactName:'Learning-2', contactID:'Learning2@ags.com'}]},
    {name:'IT',     dlID:'it_support@ags.com', contacts:[{contactName:'IT-1', contactID:'IT1@ags.com'},{contactName:'IT-2', contactID:'IT2@ags.com'}]},
    {name:'TMG',     dlID:'tmg_support@ags.com', contacts:[{contactName:'TMG-1', contactID:'TMG1@ags.com'},{contactName:'TMG-2', contactID:'TMG2@ags.com'}]},
    {name:'Facilities',     dlID:'facilites@ags.com', contacts:[{contactName:'Facilities-1', contactID:'Facilities1@ags.com'},{contactName:'Facilities-2', contactID:'Facilities2@ags.com'}]}];

  $scope.toggleDepartment = function(department) {
    if ($scope.isDepartmentShown(department)) {
      $scope.shownDepartment = null;
    } else {
      $scope.shownDepartment = department;
    }
  };
  $scope.isDepartmentShown = function(department) {
    return $scope.shownDepartment === department;
  };
})

.controller('NotificationsController', function($scope,$window) {
console.log('Inside NotificationsController');

    $scope.doRefresh = function($http) {
    $scope.$broadcast('scroll.refreshComplete');
         $cordovaToast.showLongBottom('This could be your text!')
         .then(function(success) {
             // Do something on success
         }, function(error) {
             // Handle error
         });
    };

    $scope.groupedNotifications = [
       {group:'Holidays' , isSelected:true,notifications:[{name:'There is a holiday in upcoming week'}, {name:'Optional holidays falls on thursday this week.'}]},
       {group:'Trainings', isSelected:true,notifications:[{name:'Friday tech talks: Automation testing using SauceLabs'},{name:'Friday tech talks: e-Signature using automation'}]},
       {group:'Greetings', isSelected:true,notifications:[{name:'Birthday wishes to surya'},{name:'Congratulations on promotions'}]},
       {group:'Timesheets', isSelected:true,notifications:[{name:'Today is the last day to submit timesheets'}]},
       {group:'Investments', isSelected:true,notifications:[{name:'Please submit investments before 10th of this month'}]}];


    $scope.notifyChange = function(groupName, indexValue) {
        console.log('Groupname:'+groupName.group+'----------Selected:'+groupName.isSelected);
        var x = document.getElementById(groupName.group);
         if (groupName.isSelected) {
            x.style.display= 'block'
        }
        else {
            x.style.display='none';
        }
    }
})

.controller('ConferenceBookingController', function($scope) {

})

.controller('CabbookingController', function($scope) {

})