var express = require('express');
var app = express();
var models = require('./model.js');
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var cors = require('cors');

app.use(cors({
    origin: true,
    credentials: true
}));

require('./fixtures');

//Route de Test
app.get('/', function (res, req) {
    console.log("Bonjour NodeJS");
    req.send("Bonjour NodeJS");
})

var contoller = require('./controller');

/*------------Utilisateur-----------*/
app.post('/Utilisateur/Creer', contoller.CreerUser);
app.post('/Login', contoller.Login);

/*------------Hotel-----------*/
app.post('/Hotel/Creer',contoller.CreerHotel);
app.get('/Hotels',contoller.getAllHotels);
app.get('/Hotel/:Id',contoller.getHotelById);;

/*------------Restaurant-----------*/
app.post('/Restaurant/Creer',contoller.CreerRestaurant);
app.get('/Restaurants', contoller.getAllRestaurant);
app.get('/Restaurant/:Id',contoller.getRestaurantById);

/*
/!*------------------------Upload----------------------------------*!/

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

/!** API path that will upload the files *!/
app.post('/upload', function(req, res) {
    upload(req,res,function(err){
        console.log(req.file);
        if(err){
            res.json({error_code:1,err_desc:err});
            return;
        }
        res.json({error_code:0,err_desc:null});
    });
});
*/


var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        console.log(file);
        callback(null, './public/images');
    },
    filename: function(req, file, callback) {
        console.log(file);
        callback(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[1]);
    }
});
var upload = multer({ storage: storage }).single('uploads');
app.post("/upload", function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.send({ status: 'Error uploading file' });
        }
        res.send({ status: "File is uploaded" });
    });
});

/*---------------------------------------------------------*/
app.listen(8080);