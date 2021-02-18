var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
  	response.render('index',{
    'viewAlt': false,
    projects
  });
};

exports.viewAlt = function(request, response){
  	response.render('index', {
    'viewAlt': true,
    projects
  });
};