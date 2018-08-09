var mongoose = require('mongoose');
//mongoose.connect('mongodb://demo:drupal123@ds163781.mlab.com:63781/demo');
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
var db = mongoose.connection;
var Orderschema=mongoose.Schema({
     item: String,
     qty: Number,
     price: Number,
     total: Number
   
});
var Order=mongoose.model('orders',Orderschema);
 
/* db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
	
	Order.find({},function(err,data){
		if(err) throw err;
		//console.log(data);
	})
})*/

 module.exports=Order;
