const express = require("express");

const questionController = require("../controller/questions")
const router = express.Router();

// CREATE - POST
router.post("/", questionController.createQuestion);

// READ - GET
router.get("/", questionController.getQuestions); // List Questions
// router.get("/tryOuts", questionController.getFilteredTryOuts) // Filter Try Outs
// router.get("/:tryOutId", questionController.getTryOutDetail); // Detail of a Try Out

// UPDATE - PATCH
// router.patch("/:tryOutId", questionController.editTryOut);

// DELETE - DELETE
// router.delete("/:tryOutId", questionController.deleteTryOut);

module.exports = router;