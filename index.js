const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("heyy salom dunyo");
});
let port = process.env.PORT || 400;
console.log(port);
app.listen(port, "127.0.0.1", () => {
  console.log(`${port}li port ishlayapti`);
});
