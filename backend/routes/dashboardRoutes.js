import { Router } from "express";
import { getDashboardSummary } from "../controllers/dashboardController.js";

const router = Router();

router.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});
router.get("/dashboard", getDashboardSummary);

export default router;
