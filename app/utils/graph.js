import axios from 'axios';

export const getAllGraphPosts = async () => {
    const params = {
        url:"api/getAllBlogPosts",
        method: "post",
    };
    const response = await axios(params);

    return response.data
}

export const getGraphPost = async (id) => {
    console.log('calling');
    const params = {
        url:"api/getBlogPost",
        method: "post",
        headers:{"post-id":id}
    };
    const response = await axios(params);

    return response.data.blogPost;
}