import { Service } from '../service/service.js'


export class CommentController {

    async getComments(req, res, next) {
        try {
            const commentService = new Service();
            const resultItems = req.query.length != 0 ? await commentService.getByParams('comments', req.query) : await commentService.getAll('comments')
            return res.status(200).json(resultItems);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    
    async getCommentById(req, res, next) {
        try {
            const commentService = new Service();
            const resultItem = await commentService.getById('comments', req.params.id);
            return res.status(200).json(resultItem[0]);
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async addComment(req, res, next) {
        try {
            const commentService = new Service();
            const resultItem = await commentService.add('comments', req.body);
            console.log(resultItem.insertId)
            res.status(200).json({ id: resultItem.insertId });
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async deleteComment(req, res, next) {
        try {
            const commentService = new Service();
            await commentService.delete('comments', req.params.id);
            return res.status(200).json({});
        }
        catch (ex) {
            const err = {}
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }

    async updateComment(req, res, next) {
        try {
            const commentService = new Service();
            await commentService.update('comments', req.params.id, req.body);
            res.status(200).json({ id: req.params.id });
        }
        catch (ex) {
            const err = {}
            console.log("error update comment");
            console.log(ex);
            err.statusCode = 500;
            err.message = ex;
            next(err)
        }
    }
}