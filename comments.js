//Create web server
//create a route for comments
//create a route for post comments
//create a route for delete comments
//create a route for edit comments
//create a route for get comments
//create a route for get comment
//create a route for get comments by post
//create a route for get comments by user

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { verifyAccessToken } = require('../helpers/jwt_helper');

//create a route for comments
router.post('/', verifyAccessToken, commentController.createComment);

//create a route for post comments
router.post('/:commentId', verifyAccessToken, commentController.createComment);

//create a route for delete comments
router.delete('/:commentId', verifyAccessToken, commentController.deleteComment);

//create a route for edit comments
router.put('/:commentId', verifyAccessToken, commentController.editComment);

//create a route for get comments
router.get('/', verifyAccessToken, commentController.getComments);

//create a route for get comment
router.get('/:commentId', verifyAccessToken, commentController.getComment);

//create a route for get comments by post
router.get('/post/:postId', verifyAccessToken, commentController.getCommentsByPost);

//create a route for get comments by user
router.get('/user/:userId', verifyAccessToken, commentController.getCommentsByUser);

module.exports = router;