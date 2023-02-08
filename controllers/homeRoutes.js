const router = require('express').Router()
const { Post, User } = require('../models');

router.get('/',async (req, res) => {
    const postData = await Post.findAll({include:[User]})
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
})





module.exports=router;