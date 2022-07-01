let chai = require('chai');
let http = require('chai-http');
const expect = require('chai').expect;

chai.use(http);
const URL = "http://localhost:3000/api";
const TOKEN_TEST = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphcGVyZXoiLCJpZCI6MSwiZW1haWwiOiJqdWFuYW5kcmVzcGVyZXpwdEBnbWFpbC5jb20iLCJpYXQiOjE2NTY2NTQwOTAsImV4cCI6MTY1NjY5MDA5MH0.ef40D6FtAJkd6PurZ5WdYZs90u6_BaoyA0wJQwFMB2Q";

module.exports = {
    chai, URL, expect, TOKEN_TEST
}