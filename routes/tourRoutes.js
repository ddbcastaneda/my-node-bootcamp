const express = require("express");
const {
  aliasTopTours,
  getTourStats,
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  getMonthlyPlan,
} = require("../controllers/tourController");

const router = express.Router();

// checks if the id is valid
// router.param('id', checkTourID);

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);
router.route("/tour-stats").get(getTourStats);
router.route("/monthly-plan/:year").get(getMonthlyPlan);

router.route("/").get(getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
