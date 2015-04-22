(function (window, angular, undefined) {

    'use strict';

    angular.module('ts.datetimeInput', []).directive('tsDatetimeInput', ['dateFilter', function (dateFilter) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function ($scope, $element, $attributes, $controller) {
                $controller.$formatters = [function (value) {
                    return dateFilter(value, 'yyyy-MM-dd HH:mm');
                }];
                $controller.$parsers = [function (value) {
                    var date = new Date(value);
                    return date.getTime() > 0 ? date : null;
                }];
            }
        };
    }]);

})(window, window.angular);