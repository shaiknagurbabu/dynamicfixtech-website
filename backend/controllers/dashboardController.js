import { dashboardSummary } from "../models/dashboardModel.js";

export function getDashboardSummary(_request, response) {
  response.json(dashboardSummary);
}
