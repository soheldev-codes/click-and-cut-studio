export async function getDashboardStats() {
  const response = await fetch(
    "/api/dashboard/stats",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch dashboard stats"
    );
  }

  const result = await response.json();

  return result.data;
}