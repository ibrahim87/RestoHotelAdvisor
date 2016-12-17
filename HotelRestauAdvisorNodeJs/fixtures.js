var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('hotelrestaurant');
var id = pow.createObjectId;

fixtures.clearAndLoad({
    Utilisateur: [
        {"Id": "1",
        "Nom": "ibrahim",
        "Prenom": "daboussi",
        "Email": "ibrahim.daboussi@esprit.tn",
        "Password": "aaaa",
        },
    ],
    Hotel:[
        {   "Id": 1,
            "Name": "Hotel La Tamise",
            "Description": "Hotel La Tamise",
            "Tel": "71 555 888",
            "Email": "ibrahim.daboussi@esprit.tn",
            "CategorieHotel": "",
            "Ville": "France",
            "Image" : "https://media-cdn.tripadvisor.com/media/photo-o/07/8f/d6/56/de-la-tamise-hotel.jpg",
            "Site": "",
            "Classification" : "",
            "description" : "" ,
            "Tarif" : "" ,
        },
    ],

    CategorieHotel:[
        {"Id": 1,
            "FirstName": "ibrahim",
            "LastName": "daboussi",
            "Role": "admin",
            "Email": "ibrahim.daboussi@esprit.tn",
            "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
            "Password": "aaaa",
        },
    ],
    CategorieRestaurant:[
        {"Id": 1,
            "FirstName": "ibrahim",
            "LastName": "daboussi",
            "Role": "admin",
            "Email": "ibrahim.daboussi@esprit.tn",
            "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
            "Password": "aaaa",
        },
    ],
    Ville:[
        {"Id": 1,
            "FirstName": "ibrahim",
            "LastName": "daboussi",
            "Role": "admin",
            "Email": "ibrahim.daboussi@esprit.tn",
            "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
            "Password": "aaaa",
        },
    ],
    ImageHotel:[
        {"Id": 1,
            "FirstName": "ibrahim",
            "LastName": "daboussi",
            "Role": "admin",
            "Email": "ibrahim.daboussi@esprit.tn",
            "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
            "Password": "aaaa",
        },
    ],
    ImageRestaurant:[
        {"Id": 1,
            "FirstName": "ibrahim",
            "LastName": "daboussi",
            "Role": "admin",
            "Email": "ibrahim.daboussi@esprit.tn",
            "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
            "Password": "aaaa",
        },
    ],
    Restaurant:[
        {"Id": 1,
            "FirstName": "ibrahim",
            "LastName": "daboussi",
            "Role": "admin",
            "Email": "ibrahim.daboussi@esprit.tn",
            "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
            "Password": "aaaa",
        },
    ],
}, function (err) {
    if (err) {
        console.log('************** ERREUR : clearAndLoad');
        console.log(err);
        console.log('************** ERREUR : clearAndLoad');
    }
});

