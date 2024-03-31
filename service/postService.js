
import { executeQuery } from './db.js';
import { getPostQuery, getPostByIdQuery, addPostQuery, deletePostQuery, updetePostQuery, getPostByUserIdQuery } from './queryPost.js'

export class PostService {

    async getPost() {
        const queryPost = getPostQuery();
        const result = await executeQuery(queryPost);
        return result;
    }

    async getPostById(id) {
        const queryPost = getPostByIdQuery();
        const result = await executeQuery(queryPost, [id]);
        return result;
    }

    async getPostByUserId(id) {
        const queryPost = getPostByUserIdQuery();
        const result = await executeQuery(queryPost, [id]);
        return result;
    }

    async addPost(newPost) {
        const queryPost = addPostQuery(newPost);
        await executeQuery(queryPost);
    }

    async deletePost(id) {
        const queryPost = deletePostQuery();
        await executeQuery(queryPost, [id]);
    }

    async updetePost(id) {
        const queryPost = updetePostQuery();
        await executeQuery(queryPost, [id]);
    }

}