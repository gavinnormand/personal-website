export const fetchRecentSongs = async () => {
    const username = import.meta.env.VITE_LASTFM_USERNAME;
    const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
  
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=5`;
  
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch tracks");
    const data = await res.json();
    return data.recenttracks.track;
  };
  