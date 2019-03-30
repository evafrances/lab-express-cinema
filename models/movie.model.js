const mongoose = require('mongoose');

const URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

// TODO: complete movie schema
const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    director:{
        type:String,
        required:true,
    },
    stars:[{
        type:String,
        default:[],
    }],
    image:[{
        type:String,
        match: [URL_REGEX, 'Invalid URL pattern'],
        
    }],
    description:{
        type: String,
        required:true,
        minlength: 10,
    },
    showtimes:[{
        type:String,
    }],
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;