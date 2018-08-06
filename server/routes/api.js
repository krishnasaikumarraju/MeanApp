
const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/studentTest');
var db = mongoose.connection;

db.on('error',console.error.bind(console,"connection error"));
db.once("open",function(callback){
  console.log('connection Establish');
});


var userschema = mongoose.Schema({
  firstName :{type:String,required:true},
  lastName:{type:String, required:true},
  phone:{type:Number,required:true},
  gender:{type:String,required:true},
  dob:{type:String,required:true},
  active:{type:Boolean,required:true}
});
var user = mongoose.model('data',userschema);

router.post('/form',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
       var all_values = {
        firstName:req.body.fname,lastName:req.body.lname,phone:req.body.uphone,gender:req.body.ugender,dob:req.body.udob,active:req.body.uactive
       }
    var data = new user(all_values);
    data.save(function(err,object){
      if(err){
      res.status(200).send(err);
    }
    else{
res.status(200).json("Data Saved Successfully");
    }
    });
    
});


router.get('/list',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  user.find({}, (err,data)=>{
    if(err){
      res.status(500);
    }
    if(data){
      res.status(200);
      res.send({
        'result': data
      });
    }
  })
})

router.get('/edit/:uid', (req,res)=>{
  user.find({_id:req.params.uid}, (err,data)=>{
    if(err){
      res.status(500);
    }
    if(data){
      res.status(200);
      res.send({
        'success' : data
      });
    }
  })
})

router.get('/delete/:uid', (req,res)=>{
   //console.log(req.params.uid);
  user.findByIdAndRemove({_id:req.params.uid}, function(err,data){
    if(err){
      res.status(500);
    }
    if(data){
      //console.log("user delete");
      //console.log(data);
    res.status(200).send('User Deleted');
  }
  

 });
});

router.put('/update/:uid', (req,res) => {
res.setHeader('Access-Control-Allow-Origin','*')
user.findByIdAndUpdate(req.params.uid, 
  { 
    'firstName':req.body.fname,'lastName':req.body.lname,'phone':req.body.uphone,'gender':req.body.ugender,'dob':req.body.udob,'active':req.body.uactive 
  },function(err,object){
    console.log(object) 
   if(err){
     console.log("error")
   res.send(err);
 }
 if(object){
  //console.log("object")
res.send("Data updated Successfully");
 }
 });


});


module.exports = router;