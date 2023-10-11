const express = require("express");
const router = express.Router();

// Defined a route for the chat feature
router.get("/", (req, res) => {
  res.send(
    "Sorry, the chat feature is not available at this time. <br> <a href='/'>HomePage</a>"
  );
  // When the chat feature is available, uncomment the line below
  // res.redirect("/chat");
});

module.exports = router;
