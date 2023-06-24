#!/usr/bin/env node
const https = require("https");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("Enter URL: ", (input) => {
  const url = `https://cdpt.in/shorten?url=${encodeURIComponent(input)}`;
  https.get(url, (res) => {
    let body = "";
    res.on("data", (chunk) => (body += chunk));
    res.on("end", () => {
      console.log("Shortened URL: ");
      console.log(body);
      rl.close();
    });
    res.on("error", (err) => {
      console.log(err);
      rl.close();
    });
  });
});
