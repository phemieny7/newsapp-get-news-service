const serverless = require("serverless-http");
const express = require("express");
const app = express();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('7700edb7c410475c92d75989a5794cf5');


app.get("/", (req, res, next) => {
  const { category, country, topic} = req.query;
  newsapi.v2.topHeadlines({
    q: topic,
    category: category,
    language: 'en',
    country,
    sortBy: 'relevancy',
  }).then(response => {
   return res.status(200).json({message: response});
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// app.listen(process.env.PORT || 3001, () => console.log("Server started"));
module.exports.handler = serverless(app);
