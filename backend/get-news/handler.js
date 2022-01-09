const serverless = require("serverless-http");
const express = require("express");
const app = express();
const NewsAPI = require('newsapi');
const newsApiFetch = new NewsAPI('daced0f9612f4660b36773dbc43984e4');


app.get("/", (req, res, next) => {
  const { category, country, topic} = req.query;
  newsApiFetch.v2.topHeadlines({
    q: topic,
    category: category,
    language: 'en',
    country: country,
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

module.exports.handler = serverless(app);
