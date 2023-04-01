import { useState, useEffect } from "react";
import { api } from "../api/api";

interface RecommendationsTracksInfo {
  tracks: Track[];
  seeds: Seed[];
}

interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url?: string;
  track_number: number;
  type: string;
  uri: string;
}

interface Album {
  album_group: string;
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface ExternalIds {
  isrc: string;
}

interface Seed {
  initialPoolSize: number;
  afterFilteringSize: number;
  afterRelinkingSize: number;
  id: string;
  type: string;
  href: string;
}

export const RecommendationsTracks = () => {
  const [recommendationsTracksInfo, setRecommendationsTracksInfo] =
    useState<RecommendationsTracksInfo | null>(null);

  useEffect(() => {
    getRecommendationsTracksInfo();
  }, []);

  const getRecommendationsTracksInfo = async () => {
    try {
      const result = await api.get("/recommendations", {
        params: {
          seed_tracks: "0c6xIDDpzE81m2q797ordA",
        },
      });
      setRecommendationsTracksInfo(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!recommendationsTracksInfo) return null;

  return (
    <div>
      <h1 className="text-orange-400 mb-5">RecommendationsTracks</h1>

      <ul>
        {recommendationsTracksInfo.tracks.map((track) => (
          <li key={track.id} className="flex gap-2 mb-3">
            <img
              src={track.album.images[track.album.images.length - 1].url}
              alt=""
            />
            <div>
              <p>{track.name}</p>
              <p>
                {track.artists.map((artist) => (
                  <span key={artist.id} className="mr-1">
                    {artist.name}
                  </span>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
