const axios = require("axios");
require("dotenv").config({ path: require('find-config')('.env') });
console.log(require("dotenv").config())
module.exports = async (query, variables) => {
  const result = await axios({
      url: "https://graphql.us.fauna.com/graphql",
      method: "POST",
      headers: {
          Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`
      },
      data: {
        query,
        variables
      }
 });

 return result.data;
};