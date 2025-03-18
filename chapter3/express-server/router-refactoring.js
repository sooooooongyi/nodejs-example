const express = require("express");
const url = require("url");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Router Refactoring To Express");
});

app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

const user = (req, res) => {
  const userInfo = url.parse(req.url, true).query;
  res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
};

const feed = (req, res) => {
  req.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>`);
};

const notFound = (req, res) => {
  res.statusCode = 400;
  res.end("404 page not found");
};
