
import { executeQuery } from './db.js';
import { getCommentQuery, getCommentByIdQuery, addCommentQuery, deleteCommentQuery, updateCommentQuery } from './queryComment.js'

export class CommentService {

    async getComment(queryparams) {
        const queryComment = getCommentQuery(queryparams);
        const result = await executeQuery(queryComment);
        return result;
    }

    async getCommentById(id) {
        const queryComment = getCommentByIdQuery();
        const result = await executeQuery(queryComment, [id]);
        return result;
    }

    async addComment(newComment) {
        const queryComment = addCommentQuery(Object.keys(newComment));
        const result = await executeQuery(queryComment, Object.values(newComment));
        return result;
    }

    async deleteComment(id) {
        const queryComment = deleteCommentQuery();
        await executeQuery(queryComment, [id]);
    }

    async updateComment(updatedComment, id) {
        let data = Object.values(updatedComment);
        data.push(id)
        const queryComment = updateCommentQuery(Object.keys(updatedComment));
        await executeQuery(queryComment, data);
    }
}