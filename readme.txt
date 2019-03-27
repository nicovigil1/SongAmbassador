# SongAmbassador


## About the Project

SongAmbassador is the FrontEnd to a full-stack application. It calls an API built in JavaScript using the React for styling.
The full app will allow users to search for artists/songs and favorite them into selected playlist.

## Local Setup

You'll need to setup an API key with Musixmatch: 
[https://developer.musixmatch.com/documentation](https://developer.musixmatch.com/documentation)

## Deployment

Our app backend is deployed on heroku at: [https://intense-escarpment-60510.herokuapp.com]

## Back-End

Please see [Front-End](https://github.com/SiCuellar/SongAmbassador_API)


## Contributors

* Nico Vigil  [https://github.com/nicovigil1](https://github.com/nicovigil1)
* Silvestre Cuellar [https://github.com/sicuellar](https://github.com/SiCuellar)

## Built With
* Javascript
* Express 
* postgreSQL
* Mocha 
* Chai
* React


## Backend Endpoints

GET https://intense-escarpment-60510.herokuapp.com/api/v1/favorites
* Returns a list of your favorites songs that are stored in the database 

GET https://intense-escarpment-60510.herokuapp.com/api/v1/favorites/:id
* Returns the favorite object with the specific :id you’ve passed in. A 404 is returned if the favorite is not found.

POST https://intense-escarpment-60510.herokuapp.com/api/v1/favorites
* creates a new favorite for database.



