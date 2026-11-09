export async function getDashboardSummary() {
  const response = await fetch(`${import.meta.env.VITE_API_URL ?? "/api"}/dashboard`);
  if (!response.ok) {
    throw new Error(`Dashboard request failed with status ${response.status}`);
  }
  return response.json();
}
