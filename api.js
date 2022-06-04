const dboperations = require( './dboperations.js' );
var Db = require('./dboperations.js');
var Orders = require('./orders.js');

dboperations.getOrders().then(function(result){
    console.log(result);
});

