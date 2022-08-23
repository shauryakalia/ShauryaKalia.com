const query = require("./utils/query");

const UPDATE_BLOG_ANALYTICS = `
    mutation($id: ID!, $slug: String!, $hits: Int!){
        updateBlogAnalytics(id: $id, data: {slug: $slug, hits: $hits}){
            _id
            slug
            hits
        }
    }
`;

exports.handler = async event => {
  const { id, slug, hits } = JSON.parse(event.body);
  const { data, errors } = await query(UPDATE_BLOG_ANALYTICS, { id, slug, hits });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ updatedMessage: data.updateBlogAnalytics })
  };
};