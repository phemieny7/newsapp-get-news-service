const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");

const app = express();

const COMMENT_TABLE = process.env.COMMENT_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

async function scanDynamoDb(scanParams, itemArray) {
  try {
  const data = await dynamoDbClient.scan(params).promise();
  itemArray = itemArray.concat(data.Items);
  if (data.LastEvaluatedKey) {
    scanParams.ExclusiveStartKey = data.LastEvaluatedKey;
    return await scanDynamoDb(scanParams, itemArray);
  }
  return itemArray;
  } catch (error) {
    throw new Error(error);
  }
}

app.use(express.json());

app.get("/", async function (req, res){
  const params ={
    TableName: COMMENT_TABLE,
  }

  try {
    const allComment = await scanDynamoDb(params, []);
    const body = {
      comments : allComment,
    }
    res.json(body);
  } catch (error) {
    res
    .status(404)
    .json({ error: 'No Comment Yet"' });
  }
})

app.get("/comment/:commentId", async function (req, res) {
  const params = {
    TableName: COMMENT_TABLE,
    Key: {
      commentId: req.params.commentId,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      const { commentId, text, likes, userId } = Item;
      res.json({ commentId, text, likes, userId });
    } else {
      res
        .status(404)
        .json({ error: 'Could not find comment with provided "CommentId"' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive comment" });
  }
});

app.post("/comment", async function (req, res) {
  const { userId, text, postId, date } = req.body;
  if (typeof userId !== "string") {
    res.status(400).json({ error: '"userId" must be a string' });
  } else if (typeof text !== "string") {
    res.status(400).json({ error: '"name" must be a string' });
  }

  const params = {
    TableName: COMMENT_TABLE,
    Item: {
      userId: userId,
      text: text,
      postId: postId,
      date: date,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.json({ userId, text, postId, date });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create comment" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
