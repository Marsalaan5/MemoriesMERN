import express from 'express';

import { getPosts,getPost,createPost,updatePost,likePost,deletePost} from '../controller/post.js';

const router = express.Router();

router.get('/:id', getPost);
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
