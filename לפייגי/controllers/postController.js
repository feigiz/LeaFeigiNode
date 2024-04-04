import { Service } from '../service/service.js'


export class PostController {

    async getPosts(req, res, next) {
        try {
            const postService = new Service();
            // if (req.query.length != 0) {
            //     console.log("req.query.length != 0 lalalal")
            //     console.log(req.query.length != 0)
            // }
            // else {
            //     console.log("req.query")
            //     console.log(req.query)
            // }
            const resultItems = req.query.length != 0 ? await postService.getAll('posts') : await postService.getByParams('posts', req.query)
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
            const postService = new Service();
            const resultItem = await postService.getById('posts', req.params.id);
            return res.status(200).json(resultItem[0]);
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
            const postService = new Service();
            const resultItem = await postService.add('posts', req.body);
            res.status(200).json({ id: resultItem.insertId });
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
            const postService = new Service();
            await postService.delete('posts', req.params.id);
            return res.status(200).json({});
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
            const postService = new Service();
            await postService.update('posts', req.params.id, req.body);
            res.status(200).json({ id: req.params.id });
        }
        catch (ex) {
            const err = {}
            console.log("error update post");
            console.log(ex);
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}