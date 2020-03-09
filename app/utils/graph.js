import axios from 'axios';

export async function graph( { query, variables } ) {

    variables = variables ? variables : {};

    const data = {
        query: query,
        variables: variables
    };

    const params = {
        url:"https://u8zp940p78.execute-api.us-east-1.amazonaws.com/development/graphiql?variables=%7B%22blogQueryInput%22%3A%20%7B%0A%20%20%22siteId%22%3A%20%22a402fab0-dfc9-11e9-815b-41f22eba7175%22%0A%7D%0A%7D&query=%0Aquery%20(%24blogQueryInput%3A%20blogQueryInput!)%20%7B%0A%20%20BlogPosts(blogQueryInput%3A%20%24blogQueryInput)%20%0A%7D%0A",
        method: "post",
        data,
    };

    const response = await axios(params);
    return response.data;
}

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