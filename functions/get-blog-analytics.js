const query = require("./utils/query");

const GET_BLOG_ANALYTICS = `
    query {
        allBlogAnalytics {
            data {
                _id
                slug
                hits
            }
        }
    }
`;

 exports.handler = async () => {
    const { data, errors } = await query(GET_BLOG_ANALYTICS);

    if (errors) {
       return {
         statusCode: 500,
         body: JSON.stringify(errors)
       };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({blogAnalytics: data.allBlogAnalytics.data })
    };
  };