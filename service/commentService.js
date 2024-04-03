
import { executeQuery } from './db.js';
import { getCommentQuery, getCommentByIdQuery, addCommentQuery, deleteCommentQuery, updateCommentQuery, getCommentByPostIdQuery } from './queryComment.js'

export class CommentService {

    async getComment() {
        const queryComment = getCommentQuery();
        const result = await executeQuery(queryComment);
        return result;
    }

    async getCommentById(id) {
        const queryComment = getCommentByIdQuery();
        const result = await executeQuery(queryComment, [id]);
        return result;
    }

    async getCommentByPostId(id) {
        const queryComment = getCommentByPostIdQuery();
        const result = await executeQuery(queryComment, [id]);
        return result;
    }

    async addComment(newComment) {
        const queryComment = addCommentQuery();
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
        const queryComment = updateCommentQuery();
        await executeQuery(queryComment, data);
    }
}