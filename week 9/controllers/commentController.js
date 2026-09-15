import Comment from "../models/Comment.js";

const getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json({ success: true, data: comments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }

    res.status(200).json({
      success: true,
      data: comment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createComment = async (req, res) => {
  try {
    const { comment, postId, userId } = req.body;

    const newComment = await Comment.create({
      comment,
      postId,
      userId,
    });

    res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data: newComment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateComment = async (req, res) => {
  try {
    const { comment } = req.body;

    const existingComment = await Comment.findByPk(req.params.id);

    if (!existingComment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }

    await existingComment.update({ comment });

    res.status(200).json({
      success: true,
      message: "Comment updated successfully",
      data: existingComment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }

    await comment.destroy();

    res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};