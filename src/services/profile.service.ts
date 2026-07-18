export async function getProfile() {
  const response = await fetch("/api/profile", {
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  const result = await response.json();

  return result.data;
}