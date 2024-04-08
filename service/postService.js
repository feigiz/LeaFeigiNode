
import { executeQuery } from './db.js';
import { getPostQuery, getPostByIdQuery, addPostQuery, deletePostQuery, updatePostQuery } from './queryPost.js'

export class PostService {

    async getPost(queryparams) {
        const queryPost = getPostQuery(queryparams);
        const result = await executeQuery(queryPost);
        return result;
    }

    async getPostById(id) {
        const queryPost = getPostByIdQuery();
        const result = await executeQuery(queryPost, [id]);
        return result;
    }

    async addPost(newPost) {
        const queryPost = addPostQuery();
        const result = await executeQuery(queryPost, Object.values(newPost));
        return result;
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