var mongoose = require('./db.js').mongoose;

exports.schemaUtilisateur = new mongoose.Schema({
    Id: {type: Number, index: true},
    Nom: {type: String, uppercase: true},
    Prenom: String,
    Email: {type: String, index: true, unique: true, required: true},
    Password: {type: String, required: true}
});

exports.schemaHotel = new mongoose.Schema({
    Id: {type: Number, index: true},
    Name: {type: String, maxlength: 50},
    Tel: {type: String, maxlength: 50},
    Adresse: {type: String},
    Email: {type: String},
    CategorieHotel: String,
    Ville: {type: String},
    Image: {type: String},
    Site: {type: String},
    Classification: {type: String},
    description: {type: String},
    Tarif: {type: String}
});

exports.schemaRestaurant = new mongoose.Schema({
    Id: {type: Number, index: true},
    Name: {type: String, maxlength: 50},
    Tel: {type: String, maxlength: 50},
    Adresse: {type: String},
    Email: {type: String},
    CategorieRestaurant: String,
    ville: {type: String},
    Classification: {type: String},
    description: {type: String},
    DatePublication: {type: Date},
});

exports.schemaImageHotel = new mongoose.Schema({
    Id: {type: Number, index: true},
    UrlImage :{type: String},
    Description: {type: String},
});

exports.schemaImageRestaurant = new mongoose.Schema({
    Id: {type: Number, index: true},
    UrlImage :{type: String},
    Description: {type: String},
});

exports.schemaCategorieHotel = new mongoose.Schema({
    Id: {type: Number, index: true},
    Libelle: {type: String},
});

exports.schemaCategorieRestaurant = new mongoose.Schema({
    Id: {type: Number, index: true},
    Libelle: {type: String},
});

exports.schemaVille = new mongoose.Schema({
    Id: {type: Number, index: true},
    Name: {type: String},
});

