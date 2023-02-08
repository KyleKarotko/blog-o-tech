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

router.get('/post/:id',async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {include:[User]})
  const posts = post.get({ plain: true });

  res.render('post', { 
    posts, 
    logged_in: req.session.logged_in 
  });
})

router.get('/viewpost/:id',async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {include:[User]})
  const posts = post.get({ plain: true });

  res.render('viewpost', { 
    posts, 
    logged_in: req.session.logged_in 
  });
})

router.get('/dashboard',withAuth, async (req, res) => {
  const postData = await Post.findAll({where:{userId: req.session.userId}})
  const posts = postData.map((post) => post.get({ plain: true }));

  res.render('dashboard', { 
    posts, 
    logged_in: req.session.logged_in 
  });
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard')
    return;
  }
  res.render('login');
})

module.exports=router;