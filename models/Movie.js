const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let movieSchema = new Schema({
    movieName : {
        type : String
    },
    movieDesc : {
        type : String
    },
    movieActor : {
        type : String
    }},{

    collection : 'movies'
})

module.exports = mongoose.model("Movie",movieSchema)