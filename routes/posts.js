const express = require("express");
const router = express.Router();
//use models
const Post = require("../models/post");

/* -------------CRUD operations ---------------*/

/* --- Create post --- */

router.post("/" ,async (req, res) => {
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        date: req.body.date,
        hidden: req.body.hidden
    });
    try{
        const p1 = await post.save();
        res.json(p1);
    }catch(err){
        res.send("Error" + err);
    }
})


/* --- Read post --- */

//Read all post
router.get("/" ,async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.send("Error" + err);
    }
})

//Read one post by ID
router.get("/:id" ,async (req, res) => {
    try{
        const posts = await Post.findById(req.params.id);
        res.json(posts);
    }catch(err){
        res.send("Error" + err);
    }
})


/* --- Update post --- */

router.patch("/:id" ,async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        post.title= req.body.title;
        post.author= req.body.author;
        post.content= req.body.content;
        post.date= req.body.date;
        post.hidden= req.body.hidden;
        const p1 = await post.save();
        res.json(p1);
    }catch(err){
        res.send("Error" + err);
    }
})


/* --- Delete post --- */

//Delete one post by ID
router.delete("/:id" ,async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        const p1 = await post.delete();
        res.json(p1);
    }catch(err){
        res.send("Error" + err);
    }
})




module.exports = router ;