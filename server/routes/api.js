const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://amitesh23:786Kamal@ds135830.mlab.com:35830/videoplayertest";
mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
    if (err) {
        console.log("Error! " + err);
    } else {
        console.log('Connected to Server successfully!');
    }
});

router.get('/videos', function(req, res){
    // res.send('Api Works');
    console.log("Get videos success!");
    Video.find({})
    .exce(function(err, videos){
        if (err) {
            console.log("Error Ret. " + err);
        }else {
            console.log('Data ret successfully!');
            res.json(videos);
        }
    });
});

// get/take the data from mongodb
router.get('/videos/:id', function(req, res){
    //res.send('Api Works');
    console.log("Get videos for Id's!");
    // Video.find({}) for all videos to find
    Video.findById(req.params.id)
    .exce(function(err, video){
        if (err) {
            console.log("Error Ret. " + err);
        }else {
            console.log('Data ret successfully!');
            res.json(video);
        }
    });
});

// insert the data from mongodb
router.post('/videos', function(req, res){
    console.log("Post a video!");
    // Video.find({}) for all videos to find
    var newVideo = new Video;
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if (err) {
            console.log("Error saving video. " + err);
        }else {
            console.log('Video saved successfully!');
            res.json(insertedVideo);
        }
    });
});

// update the data from mongodb
router.put('/videos/:id', function(req, res){
    console.log("Update the video!");
    Video.findByIdAndUpdate(req.params.id,
        {
            $set : {
                title: req.body.title,
                url: req.body.url,
                description: req.body.description
            }
        },
        {
            new: true
        },
        function(err, updatedVideo) {
            if (err) {
                res.send("Error while updating video.");
            }else {
                console.log('Video updated successfully!');
                res.json(updatedVideo);
            }
        
        }
    );
});

router.delete('/video/:id', function(req, res) {
    console.log("Delete the video!");
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if (err) {
            res.send("Error while deleting video.");
        } else {
            console.log('Video deleted successfully!');
            res.json(deletedVideo);
        }
    });
});

module.exports = router;
