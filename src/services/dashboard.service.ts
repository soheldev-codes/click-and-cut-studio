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



export async function getBookingChart() {
  const response = await fetch(
    "/api/dashboard/chart",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch booking chart"
    );
  }

  const result = await response.json();

  return result.data;
}



export async function getRecentDashboardData() {
  const response = await fetch(
    "/api/dashboard/recent",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch recent dashboard data"
    );
  }

  const result = await response.json();

  return result.data;
}