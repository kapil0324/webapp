var express = require('express');
var router = express.Router();
var Orders=require('../model/user');
var query=Orders.find({});
/* GET home page. */

router.get('/', function(req, res, next) {
	
  query.exec( function(err, doc){
		if(err) throw err;
		//console.log(doc);
		res.render('index', {title:'Form', rows :doc});
	    })
});
router.post('/', function(req, res, next) {
	//console.log(res.body);
    var newRecord= new Orders({
    	item: req.body.item,
    	qty:  req.body.qty,
    	price: req.body.price,
    	total: parseFloat(req.body.qty) * parseFloat(req.body.price),
    })
   newRecord.save(function(err, doc){
      if(err) throw err;
      query.exec( function(err, doc){
		if(err) throw err;
		//console.log(doc);
		res.render('index', {title:'Form', rows :doc});
	    })
    })

})
router.get('/delete/:id', function(req, res, next) {
	//console.log(req.params);
	var del=Orders.findByIdAndRemove(req.params.id);
      del.exec(function (err){
      	if(err) throw err;
      })
      res.redirect('/');
})
router.get('/edit/:id', function(req, res, next) {
	//console.log(req.params);
	var rec=Orders.findById(req.params.id);
      rec.exec(function (err,doc){
      	if(err) throw err;
          res.render('edit',{'title':'Edit Form',data:doc});
      })
      //res.redirect('/');
})
router.get('/data/:id?', function(req, res, next) {
	
	//var rec=Orders.find({});
      query.exec(function (err,doc){
      	if(err) throw err;
        res.send(doc);
      })
      //res.redirect('/');
})
router.post('/update', function(req, res, next) {
	//console.log(res.body)
    var edit= Orders.findByIdAndUpdate(req.body.id,{
     item: req.body.item,
    	qty:  req.body.qty,
    	price: req.body.price,
    	total: parseFloat(req.body.qty) * parseFloat(req.body.price),
    })
     edit.exec(function (err){
      	if(err) throw err;
      })
      res.redirect('/');

})


module.exports = router;
