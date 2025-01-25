import express from 'express';

import { getPosts,createPost,updatePost} from '../controller/post.js';

const router = express.Router();

router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost);
// router.post('/',deletePost);
// router.post('/',createPost);

export default router;
