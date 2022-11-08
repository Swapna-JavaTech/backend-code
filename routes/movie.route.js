let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

//import Movie Model
let movieSchema = require('../models/Movie');

//create movie or add movie or save movie
router.route('/save-movie').post((req,res,next) =>{
    movieSchema.create(req.body,(error,data) =>{
        if(error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
})

//get all movies or read movies
router.route('/').get((req,res) =>{
    movieSchema.find((error,data) =>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

//get a single movie or read a movie
router.route('/view-movie/:id').get((req,res) =>{
    movieSchema.findById(req.params.id,(error,data) =>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
});

//update movie 
router.route('/update-movie/:id').put((req,res,next) =>{
    movieSchema.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },(error,data) =>{
        if(error){
            return next(error);
            console.log(error);
        }else{
            res.json('Movie Updated Successfully');
            console.log('Movie Updated Successfully')
        }
    })
});

//delete movie
router.route('/delete-movie/:id').delete((req,res,next) =>{
    movieSchema.findByIdAndRemove(req.params.id,(error,data) =>{
        if(error){
            return next(error)
        }else{
            res.status(200).json({
                msg : data
            })
        }
    })
});

module.exports = router;