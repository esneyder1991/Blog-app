const Comment = require('../models/comments.model');
const catchAsync = require('../utils/catchAsync');

exports.findAllComments = catchAsync(async (req, res, next) => {
  const comments = await Comment.findAll({
    where: {
      status: 'true',
    },
  });
  return res.status(200).json({
    status: 'success',
    results: comments.length,
    comments,
  });
});
exports.createComment = catchAsync(async (req, res, next) => {
  const { text } = req.body;
  const { postId } = req.params;
  const { sessionUser } = req;

  const comment = await Comment.create({
    text,
    postId,
    userId: sessionUser.id,
  });
  return res.status(201).json({
    status: 'success',
    message: 'The comment has been created',
    comment,
    // {
    //   id: comment.id,
    //   text: comment.text,
    // },
  });
});
exports.findComment = catchAsync(async (req, res, next) => {
  const { comment } = req;
  return res.status(200).json({
    status: 'success',
    comment,
  });
});
exports.updateComment = catchAsync(async (req, res, next) => {
  const { comment } = req;
  const { text } = req.body;

  await comment.update({ text });

  res.status(200).json({
    status: 'success',
    message: 'Comment has been updated!',
  });
});

exports.deleteComment = catchAsync(async (req, res, next) => {
  const { comment } = req;

  await comment.update({ status: 'false' });

  res.status(200).json({
    status: 'success',
    message: 'Comment has been deleted!',
  });
});
