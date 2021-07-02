import PostMessage from "../models/postMessage.js";
import db from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

<<<<<<< HEAD
const router = express.Router();

export const getPosts = async (req, res) => {
    const { page } = req.query;
    
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await PostMessage.countDocuments({});
        const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
=======
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
>>>>>>> parent of eb89913... pushing PART_3
}

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();

<<<<<<< HEAD
    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
=======
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
>>>>>>> parent of eb89913... pushing PART_3
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if(!db.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

  res.json(updatedPost);
}

export const deletePost = async (req,res) => {
  const { id } = req.params;

  if(!db.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
}

export const likePost = async (req,res) => {
  const { id } = req.params;

  if(!db.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

<<<<<<< HEAD
    const index = post.likes.findIndex((id) => id ===String(req.userId));
=======
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
>>>>>>> parent of eb89913... pushing PART_3

  res.json(updatedPost);
}
<<<<<<< HEAD



export default router;
=======
>>>>>>> parent of eb89913... pushing PART_3
