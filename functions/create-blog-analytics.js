const query = require("./utils/query");

const CREATE_BLOG_ANALYTICS = `
    mutation($slug: String!, $hits: Int!){
        createBlogAnalytics(data: {slug: $slug, hits: $hits}){
            _id
            slug
            hits
        }
    }
`;

exports.handler = async event => {
    const { slug, hits } = JSON.parse(event.body);
    const { data, errors } = await query(
        CREATE_BLOG_ANALYTICS, 
        { 
            slug, 
            hits
        }
    );

    if (errors) {
        return {
            statusCode: 500,
            body: JSON.stringify(errors)
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ blogAnalytics: data.createBlogAnalytics })
    };
}