import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/api";

interface AlbumInfo {
  album_group: string;
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  copyrights: Copyright[];
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  genres: any[];
  href: string;
  id: string;
  images: Image[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  tracks: Tracks;
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

interface Copyright {
  text: string;
  type: string;
}

interface ExternalIds {
  upc: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface Tracks {
  href: string;
  items: Item[];
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;
}

interface Item {
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export const AlbumPage = () => {
  const params = useParams();

  const [albumInfo, setAlbumInfo] = useState<AlbumInfo | null>(null);

  useEffect(() => {
    getAlbumInfo();
  }, []);

  const getAlbumInfo = async () => {
    try {
      const result = await api.get(`/albums/${params.albumID}`);
      setAlbumInfo(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!albumInfo) return null;

  return (
    <div>
      <h1 className="text-blue-500 mb-4">AlbumPage</h1>

      <img src={albumInfo.images[0].url} alt="" />
      <p>{albumInfo.name}</p>
      <ul>
        {albumInfo.tracks.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
