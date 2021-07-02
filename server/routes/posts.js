<<<<<<< HEAD
import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
=======
import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
>>>>>>> parent of eb89913... pushing PART_3

const router = express.Router();

<<<<<<< HEAD
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
=======
router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);
>>>>>>> parent of eb89913... pushing PART_3

export default router;
