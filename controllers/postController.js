import { PostService } from '../service/postService.js'
export class PostController {

    async getPost(req, res, next) {
        try {
            const postService = new PostService();
            const resultItems = await postService.getPost(req.query);
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async getPostById(req, res, next) {
        try {
            const postService = new PostService();
            const resultItem = await postService.getPostById(req.params.id);
            res.status(200).json(resultItem);
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
            const resultItem = await postService.addPost(req.body);
            res.status(200).json(resultItem.insertId);
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
            res.status(200).json(req.params.id);
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
            const result = await postService.updatePost(req.body, req.params.id);
            if (result == null)
                throw ("this data cannot be updated")
            res.status(200).json(req.params.id);
        }
        catch (ex) {
            const err = {}
            err.statusCode = ex == "this data cannot be updated" ? 409 : 500;
            err.message = ex;
            next(err)
        }
    }
}