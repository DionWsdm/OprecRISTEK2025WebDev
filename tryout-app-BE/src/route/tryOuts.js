const express = require("express");

const tryOutController = require("../controller/tryOuts.js");
const questionController = require("../controller/questions.js")

const router = express.Router();

// CREATE - POST
router.post("/", tryOutController.createTryOut);
router.post("/:tryOutId/questions", questionController.createQuestion)

// READ - GET
router.get("/", tryOutController.getListTryOut); // List Try Out (All Try Out)
router.get("/tryOuts", tryOutController.getFilteredTryOuts) // Filter Try Outs
router.get("/:tryOutId/questions", questionController.getQuestions)
router.get("/:tryOutId", tryOutController.getTryOutDetail); // Detail of a Try Out

// UPDATE - PATCH
router.patch("/:tryOutId/questions/:questionId", questionController.editQuestion)
router.patch("/:tryOutId", tryOutController.editTryOut);

// DELETE - DELETE
router.delete("/:tryOutId", tryOutController.deleteTryOut);
router.delete("/:tryOutId/questions/:questionId", questionController.deleteQuestion)

module.exports = router;