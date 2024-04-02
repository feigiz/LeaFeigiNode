
import { executeQuery } from './db.js';
import { getPostQuery, getPostByIdQuery, addPostQuery, deletePostQuery, updatePostQuery, getPostByUserIdQuery } from './queryPost.js'

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
        const queryPost = addPostQuery();
        await executeQuery(queryPost, Object.values(newPost));
    }

    async deletePost(id) {
        const queryPost = deletePostQuery();
        await executeQuery(queryPost, [id]);
    }

    async updatePost(updatedPost, id) {
        let data = Object.values(updatedPost);
        data.push(id)
        const queryPost = updatePostQuery();
        await executeQuery(queryPost, data);
    }

}