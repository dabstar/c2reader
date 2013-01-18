var csv = require('csv');
var lines = new Array();
var _ = require('underscore'); 
var transData;
var workouts;

csv().
from('Concept2Log.csv', {
        delimiter: ';',
        columns: ['void', 'name', 'date', 'TimeOfDay',  'WorkoutName', 'WorkoutTime', 'Meters', 'AvgSPM', 'AvgHeartRate']
})
.transform(function(data,index){
        //console.log(index + "    " + data);
        lines[index] = data;
        return data;
})
.on('end', function(count){
        GetWorkouts(lines);
})
 
function GetWorkouts()
{
        csv().
from('Concept2Log.csv', {
        delimiter: ';',
        columns: ['void', 'name', 'date', 'TimeOfDay',  'WorkoutName', 'WorkoutTime', 'Meters', 'AvgSPM', 'AvgHeartRate']
})
.transform(function(data,index){
        //console.log(index + "    " + data);
        lines[index] = data;
        return data;
})
.on('end', function(count){
         return _.chain(lines)
        .reject(function(elem){
                return (elem.Meters == '') || _.isNull(elem.Meters);
        })
        .sortBy(function(elem){ return elem.WorkoutName})
        .each(function(element, index, list)
        {
                //return _.omit(element, 'void');
                //console.log(element.WorkoutName + ' : ' + element.Meters + 'm, ' + element.WorkoutTime);       
        })
        .value();      
      
})
}

module.exports.GetWorkouts = GetWorkouts;