const express = require('express');
const Post = require('../modules/post');

const router = express.Router();

//save post
router.post('/post/save', async (req,res)=>{
    let post = new Post(req.body);
    try {
        await post.save();
        res.status(200).json({success:"Post saved successfully"});
    } catch(err) {
        res.status(400).json({error:err});
    }
});


//get posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find().exec();
        res.json(posts);
    } catch(err) {
        res.status(500).json({error: err});
    }
});

//get specific post using id
router.get('/post/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).exec();
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json({ post });
    } catch (err) {
        console.error('Get post error:', err); // Log the error for debugging
        res.status(400).json({ error: err.message || err });
    }
});

// Update post
router.put('/post/update/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Ensure validation and return updated document
        ).exec();
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json({ success: "Post updated successfully", post: updatedPost });
    } catch (err) {
        console.error('Update post error:', err); // Log the error for debugging
        res.status(400).json({ error: err.message || err });
    }
});


//delete post

router.delete('/post/delete/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json({ success: "Post deleted successfully" });
    } catch (err) {
        console.error('Delete post error:', err); // Log the error for debugging
        res.status(400).json({ error: err.message || err });
    }
});

module.exports = router;
