import { SetStateAction, useEffect, useState } from "react";
import { fetchRecentSongs } from "../../utils/fetchRecentSongs";
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
    <div className="mt-4 rounded-xl bg-menus p-4 dark:bg-menus-dark">
      <h2 className="mb-4 inline-flex items-center text-xl font-semibold text-primary-dark">
        {" "}
        <SiSpotify className="mr-3 text-3xl text-accent" /> What I'm Listening
        To:
      </h2>
      {loading ? (
        <p className="text-secondary dark:text-secondary-dark">Loading...</p>
      ) : (
        <ul className="space-y-4">
          {songs.slice(0, 3).map((song, index) => (
            <li key={index} className="flex items-center space-x-4">
              <img
                src={song.image?.[1]?.["#text"] || ""}
                alt={song.name}
                className="h-12 w-12 rounded object-cover"
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
