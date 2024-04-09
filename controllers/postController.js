import { PostService } from '../service/postService.js'
export class PostController {

    async getPost(req, res, next) {
        try {
            const postService = new PostService();
            // const resultItem = await postService.getPost(req.query);
            // if (resultItem.length > 0)
            //     return res.status(200).json(resultItem);
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
            // if (resultItem)
            //     res.status(200).json(resultItem);
            // const err = {}
            // err.statusCode = 404;
            // err.message = 'todo not found';
            // next(err)
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
            // err.statusCode = ex.errno == 1456 ? 400 : 500;
            err.message = ex;
            next(err)
        }
    }

    async deletePost(req, res, next) {
        try {
            const postService = new PostService();
            await postService.deletePost(req.params.id);
            res.status(200).json(req.params.id);
            // const resultItem = await postService.deletePost(req.params.id);
            // if (resultItem.affectedRows > 0)
            //     res.status(200).json({ status: 200, data: req.params.id });
            // const err = {}
            // err.statusCode = 404;
            // err.message = "post not found";
            // next(err)
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
            // const resultItem = await postService.updatePost(req.body, req.params.id);
            // if (resultItem.affectedRows > 0)
            res.status(200).json(req.params.id);
            // const err = {}
            // err.statusCode = 404;
            // err.message = "post not found";
            // next(err)
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            // err.statusCode = ex.errno == 1054 ? 400 : 500;
            err.message = ex;
            next(err)
        }
    }
}