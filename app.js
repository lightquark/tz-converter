var app = angular.module('timeZoneApp', []);
app.controller('timeZoneController', function($scope)
{
	var DATETIME_FORMAT = 'YYYY-MMM-DD HH:mm:ss ZZ';
	
	$scope.timeZones = [
        {id: 0, name: 'Greenwich Mean Time (GMT) UTC+0', zoneId:"Europe/London"},
		{id: 1, name: 'Central European Time (CET) CEST UTC+1/UTC+2', zoneId:"Europe/Paris"},
		{id: 2, name: 'Eastern European Time (EET) UTC+2/UTC+3', zoneId:"Europe/Kiev"},
		{id: 3, name: 'Moscow Time (MSK) UTC+3', zoneId:"Europe/Moscow"},
		{id: 4, name: 'Atlantic Standard Time (AST) ADT UTC-4/UTC-3', zoneId:"America/Halifax"},
		{id: 5, name: 'Eastern Standard Time (ET) EST EDT UTC-5/UTC-4', zoneId:"US/Eastern"},
		{id: 6, name: 'Central Time Zone (CT) CST CDT UTC-6/UTC-5', zoneId:"US/Central"},
		{id: 7, name: 'Mountain Time (MT) MST MDT UTC-7/UTC-6', zoneId:"US/Mountain"},
		{id: 8, name: 'Pacific Time Zone (PT) UTC-8/UTC-7', zoneId:"US/Pacific"},
		{id: 9, name: 'Alaska Time Zone AKST AKDT UTC-9/UTC-8', zoneId:"US/Alaska"}
    ];
	
	$scope.times = [
        {id: 0, name: '00:00 0am'},
		{id: 1, name: '01:00 1am'},
		{id: 2, name: '02:00 2am'},
		{id: 3, name: '03:00 3am'},
		{id: 4, name: '04:00 4am'},
		{id: 5, name: '05:00 5am'},
		{id: 6, name: '06:00 6am'},
		{id: 7, name: '07:00 7am'},
		{id: 8, name: '08:00 8am'},
		{id: 9, name: '09:00 9am'},
		{id: 10, name: '10:00 10am'},
		{id: 11, name: '11:00 11am'},
 		{id: 12, name: '12:00 12am'},
 		{id: 13, name: '13:00 1pm'},
 		{id: 14, name: '14:00 2pm'},
 		{id: 15, name: '15:00 3pm'},
 		{id: 16, name: '16:00 4pm'},
 		{id: 17, name: '17:00 5pm'},
 		{id: 18, name: '18:00 6pm'},
 		{id: 19, name: '19:00 7pm'},
 		{id: 20, name: '20:00 8pm'},
 		{id: 21, name: '21:00 9pm'},
 		{id: 22, name: '22:00 10pm'},
 		{id: 23, name: '23:00 11pm'}
	];
	
	$scope.formatTime = function(t, tz)
	{
		if(t && tz)
		{
			var m = moment.tz("2017-09-01 " + $scope.times[t].name.substring(0,5), $scope.timeZones[tz].zoneId);
			return m.format(DATETIME_FORMAT);
		}
		return "-";
	};
	
	$scope.convertTimeZone = function(sourceTime, sourceTZ, destTZ)
	{
		if(sourceTime && sourceTZ && destTZ)
		{
			var m = moment.tz("2017-09-01 " + $scope.times[sourceTime].name.substring(0,5), $scope.timeZones[sourceTZ].zoneId);
			return m.tz($scope.timeZones[destTZ].zoneId).format(DATETIME_FORMAT);
		}
		return "-";
	};
});