export default async function handler(req, res) {
    try {
      const username = process.env.LASTFM_USERNAME;
      const apiKey = process.env.LASTFM_API_KEY;
      
      const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=5`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("Failed to fetch tracks");
      }
  
      const data = await response.json();
      
      res.status(200).json(data.recenttracks.track);
    } catch (error) {
      console.error("Error fetching recent tracks:", error);
      res.status(500).json({ error: "Failed to fetch recent songs" });
    }
  }
  