
import { executeQuery } from './db.js';
import { getCommentQuery ,getCommentByIdQuery, addCommentQuery, deleteCommentQuery, updeteCommentQuery, getCommentByPostIdQuery} from './queryComment.js'

export class CommentService {

    async getComment() {
        const queryComment = getCommentQuery();
        const result = await executeQuery(queryComment);
        return result;
    }

    async getCommentById(id) {
        const queryComment = getCommentByIdQuery();
        const result =  await executeQuery(queryComment, [id]);
        return result;
    }

    async getCommentByPostId(id) {
        const queryComment = getCommentByPostIdQuery();
        const result =  await executeQuery(queryComment, [id]);
        return result;
    }

    async addComment(newComment) {
        const queryComment = addCommentQuery(newComment);
        await executeQuery(queryComment);
    }

    async deleteComment(id) {
        const queryComment = deleteCommentQuery();
        await executeQuery(queryComment, [id]);
    }

    // async updeteComment(id) {
    //     const queryComment = updeteCommentQuery();
    //     await executeQuery(queryComment, [id]);
    // }
}