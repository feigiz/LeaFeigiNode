import { CommentService } from '../service/commentService.js'
export class CommentController {

    async getComment(req, res, next) {
        try {
            const commentService = new CommentService();
            const resultItems = await commentService.getComment(req.query);
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
            const commentService = new CommentService();
            const resultItem = await commentService.getCommentById(req.params.id);
            res.status(200).json(resultItem);
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
            const commentService = new CommentService();
            const resultItem = await commentService.addComment(req.body);
            res.status(200).json(resultItem.insertId);
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
            const commentService = new CommentService();
            await commentService.deleteComment(req.params.id)
            res.status(200).json(req.params.id);
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
            const commentService = new CommentService();
            const result = await commentService.updateComment(req.body, req.params.id);
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