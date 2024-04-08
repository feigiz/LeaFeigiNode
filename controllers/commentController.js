import { CommentService } from '../service/commentService.js'
export class CommentController {

    async getComment(req, res, next) {
        try {
            const commentService = new CommentService();
            // const resultItems = req.query.postId ? await commentService.getCommentByPostId(req.query.postId) : await commentService.getComment();
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
            res.status(200).json({ status: 200, data: resultItem });
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
            const resultItem =await commentService.addComment(req.body);
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
            res.status(200).json({ status: 200, data: req.params.id });
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