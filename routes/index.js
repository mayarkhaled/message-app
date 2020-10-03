var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});

//get new message page
router.get('/new' , function(req , res , next){
  res.render('form' , {title: 'create a new message'})
});

router.post('/new' , function(req , res , next){
  let text = req.body.messageContent
  let user = req.body.userName
  let added = new Date();
  messages.push({text , user , added});
  res.redirect('/')
})
module.exports = router;
