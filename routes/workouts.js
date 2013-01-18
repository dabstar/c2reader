var dummyResponse =  {
    "workoutname":"8x500m/r4'",
    "id":123,
    "starttime":0.69,
    "pace":"2:30",
    "description":"Must have item",
    "links":[
        {
            "linkType":"application/vnd.smartbid.user",
            "rel":"Get owner's details",
            "href":"/users/123"
        }
    ]
};

// pass in the app so we can register routes
module.exports = function(app) {
    // register the router
    app.get('/workouts/:id', get);
} 

// called from app.js
get = function(req, res){
	res.type('application/vnd.workouts.workout+json');
	res.send(200,dummyResponse);
};

