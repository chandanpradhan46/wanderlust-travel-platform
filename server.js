const express = require("express");
const app = express();

app.get("/test", (req, res) => {
    res.send("TEST ROUTE IS WORKING ✅");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
