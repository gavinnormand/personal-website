export const fetchRecentSongs = async () => {
  try {
    const res = await fetch("/api/fetchRecentSongs");
    if (!res.ok) throw new Error("Failed to fetch tracks");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching recent songs:", error);
    throw new Error("Failed to fetch recent songs");
  }
};
