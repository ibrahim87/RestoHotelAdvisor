var schemas = require('./schema');
var mongoose = require('./db').mongoose;
exports.Utilisateur = mongoose.model('Utilisateur', schemas.schemaUtilisateur);
exports.Hotel = mongoose.model('Hotel', schemas.schemaHotel);
exports.Restaurant = mongoose.model('Restaurant', schemas.schemaRestaurant);
exports.ImageHotel = mongoose.model('ImageHotel', schemas.schemaImageHotel);
exports.ImageRestaurant = mongoose.model('ImageRestaurant', schemas.schemaImageRestaurant);
exports.CategorieHotel = mongoose.model('CategorieHotel', schemas.schemaCategorieHotel);
exports.CategorieRestaurant = mongoose.model('CategorieRestaurant', schemas.schemaCategorieRestaurant);
exports.Ville = mongoose.model('Ville', schemas.schemaVille);

