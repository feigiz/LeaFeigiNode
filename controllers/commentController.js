import { CommentService } from '../service/commentService.js'
export class CommentController {

    async getComment(req, res, next) {
        try {
            const commentService = new CommentService();
            const resultItems = await commentService.getComment(req.query);
            if (resultItems.length > 0)
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
            if (resultItem)
                res.status(200).json({ status: 200, data: resultItem });
            const err = {}
            err.statusCode = 404;
            err.message = 'todo not found';
            next(err)
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
            err.statusCode = ex.errno == 1456 ? 400 : 500;
            err.message = ex;
            next(err)
        }
    }

    async deleteComment(req, res, next) {
        try {
            const commentService = new CommentService();
            await commentService.deleteComment(req.params.id)
            if (resultItem.affectedRows > 0)
                res.status(200).json({ status: 200, data: req.params.id });
            const err = {}
            err.statusCode = 404;
            err.message = "post not found";
            next(err)
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
            await commentService.updateComment(req.body, req.params.id);
            if (resultItem.affectedRows > 0)
                res.status(200).json({ status: 200, data: req.params.id });
            const err = {}
            err.statusCode = 404;
            err.message = "post not found";
            next(err)
        }
        catch (ex) {
            const err = {}
            err.statusCode = ex.errno == 1054 ? 400 : 500;
            err.message = ex;
            next(err)
        }
    }
}