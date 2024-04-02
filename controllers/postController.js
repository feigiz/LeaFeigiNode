import { PostService } from '../service/postService.js'
export class PostController {

    async getPost(req, res, next) {
        try {
            const postService = new PostService();
            const resultItems = req.query.userId ? await postService.getPostByUserId(req.query.userId) : await postService.getPost();
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async getPostById(req, res,next) {
        try {
            const postService = new PostService();
            const resultItem = await postService.getPostById(req.params.id);
            res.status(200).json({ status: 200, data: resultItem });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async addPost(req, res, next) {
        try {
            const postService = new PostService();
            await postService.addPost(req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async deletePost(req, res, next) {
        try {
            const postService = new PostService();
            await postService.deletePost(req.params.id);
            res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async updatePost(req, res, next) {
        try {
            const postService = new PostService();
            await postService.updatePost(req.body, req.params.id);
            res.status(200).json({ status: 200, data: req.params.id });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}