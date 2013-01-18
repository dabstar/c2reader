
/*
 * GET home page.
 */
var data = require('../data');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
  console.log(data.GetWorkouts()[0]);
};