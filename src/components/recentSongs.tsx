import { SetStateAction, useEffect, useState } from "react";
import { fetchRecentSongs } from "../utils/fetchRecentSongs";
import { SiSpotify } from "react-icons/si";

type Song = {
  name: string;
  artist: { "#text": string };
  album: { "#text": string };
  image: { "#text": string }[];
  url: string;
};

export default function RecentSongs() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentSongs()
      .then((data: SetStateAction<Song[]>) => setSongs(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-menus dark:bg-menus-dark p-4 rounded-xl mt-4">
      <h2 className="inline-flex items-center text-xl font-semibold mb-4 text-primary-dark"> <SiSpotify className="text-3xl text-accent mr-3"/> What I'm Listening To:</h2>
      {loading ? (
        <p className="text-secondary dark:text-secondary-dark">Loading...</p>
      ) : (
        <ul className="space-y-4">
          {songs.slice(0, 3).map((song, index) => (
            <li key={index} className="flex items-center space-x-4">
              <img
                src={song.image?.[1]?.["#text"] || ""}
                alt={song.name}
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <a
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent decoration-wavy hover:underline"
                >
                  {song.name}
                </a>
                <p className="text-sm text-secondary-dark">
                  {song.artist["#text"]} — {song.album["#text"]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
