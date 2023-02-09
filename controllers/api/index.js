const router = require('express').Router()
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentsRoutes = require("./commentsRoutes");

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentsRoutes);

module.exports=router;