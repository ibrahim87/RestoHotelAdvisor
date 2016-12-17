var models = require('./model');

/********************************/
/********** User **************/
/********************************/
exports.CreerUser = function (req, res) {
    console.log('Creer Utilisateur', req.body);
    models.Utilisateur(req.body).save();
    res.json(req.body);
};

exports.Login = function (req, res) {
    console.log('Login', req.body);
    var options = {Email: req.body.Email, Password: req.body.Password};
    models.Utilisateur.findOne(options, function (err, utilisateur) {
        if (err) {
            return console.error(err);
        }
        console.error('utilisateur', utilisateur);
        res.json(utilisateur);
    });
};

/************** Create Categorie Hotel***************/
exports.CreerCategorieHotel = function (req, res) {
    console.log('CreerCategorie Hotel', req.body);
    models.CategorieHotel(req.body).save();
    res.json(req.body);
};

/************** Create Hotel***************/
exports.CreerHotel = function (req, res) {
    console.log('CreerHotel');
    models.Hotel(req.body).save();
    res.json(req.body);
};

/************** get All Hotels***************/
exports.getAllHotels = function (req, res) {
    console.log('RecupererHotels');
    models.Hotel.find(function (err, hotels) {
        if (err) {
            return console.error(err);
        }
        res.json(hotels);
    });
};

/************** Get Hotel by Id ***************/
exports.getHotelById = function (req, res) {
    console.log('Recuperer hotel par id');
    var options = {Id: req.params.Id};
    models.Hotel.findOne(options, function (err, hotel) {
        if (err) {
            return console.error(err);
        }
        res.json(hotel);
    });
};

/************** Get Hotels by Categorie ***************/
exports.GetHotelsByCategorie = function (req, res) {
    console.log('Recuperer Get Hotels By Categorie');
    var options = {CategorieHotel: req.params.categorieHotel};
    models.Hotel.find(options, function (err, hotels) {
        if (err) {
            return console.error(err);
        }
        res.json(hotels);
    });
};

/************** Get ALL Categories hotel ***************/
exports.FindALLCategories = function (req, res) {
    console.log('RecupererCategories');
    models.Categorie.find(function (err, categories) {
        if (err) {
            return console.error(err);
        }
        res.json(categories);
    });
};

/************** Create Categorie restaurant***************/
exports.CreerCategorie = function (req, res) {
    console.log('CreerCategorie', req.body);
    models.CategorieRestaurant(req.body).save();
    res.json(req.body);
};

/************** Create restaurant ***************/
exports.CreerRestaurant = function (req, res) {
    console.log('Creer Restaurant');
    models.Restaurant(req.body).save();
    res.json(req.body);
};

/************** get All Restaurant***************/
exports.getAllRestaurant = function (req, res) {
    console.log('Recuperer Restaurant');
    models.Restaurant.find(function (err, restaurants) {
        if (err) {
            return console.error(err);
        }
        res.json(restaurants);
    });
};

/************** Get Restaurant by Id ***************/
exports.getRestaurantById = function (req, res) {
    console.log('Recuperer Restaurant par id');
    var options = {Id: req.params.Id};
    models.Restaurant.findOne(options, function (err, restaurant) {
        if (err) {
            return console.error(err);
        }
        res.json(restaurant);
    });
};

/************** Get Restaurants by Categorie ***************/
exports.GetRestaurantsByCategorie = function (req, res) {
    console.log('Recuperer Get Restaurants By Categorie');
    var options = {CategorieRestaurant: req.params.categorieRestaurant};
    models.Restaurant.find(options, function (err, restaurants) {
        if (err) {
            return console.error(err);
        }
        res.json(restaurants);
    });
};

/************** Get ALL Categories hotel ***************/
exports.FindALLCategories = function (req, res) {
    console.log('Recuperer Categories');
    models.CategorieRestaurant.find(function (err, categories) {
        if (err) {
            return console.error(err);
        }
        res.json(categories);
    });
};


