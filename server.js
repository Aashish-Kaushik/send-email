const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const routePath = require("./routes/route.js");

app.use("/api/v1/", routePath);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "./views.index.html");
});

app.use((req, res) => {
  res.status(200).json({ messeage: "Route Not Found" });
});

app.listen(PORT, () => {
  console.log(`server is runing on ${PORT}`);
});
