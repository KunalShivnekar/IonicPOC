  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.6/angular-messages.min.js"></script>
      <script id="templates/form-errors.html" type="text/ng-template">
          <div class="form-error" ng-message="required">This field is required.</div>
          <div class="form-error" ng-message="minlength">This field is must be at least 5 characters.</div>
          <div class="form-error" ng-message="maxlength">This field is must be less than 50 characters</div>
      </script>