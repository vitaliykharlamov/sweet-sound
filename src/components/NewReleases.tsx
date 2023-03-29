import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/api";

interface NewReleasesInfo {
  albums: Albums;
}

interface Albums {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

interface Item {
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

export const NewReleases = () => {
  const [newReleasesInfo, setNewReleasesInfo] =
    useState<NewReleasesInfo | null>(null);

  useEffect(() => {
    getNewReleasesInfo();
  }, []);

  const getNewReleasesInfo = async () => {
    try {
      const result = await api.get("/browse/new-releases");
      setNewReleasesInfo(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!newReleasesInfo) return null;

  return (
    <div>
      <h1>NewReleases</h1>

      <ul>
        {newReleasesInfo.albums.items.map((item) => (
          <li key={item.id} className="mb-3 border-2">
            <Link to={`/album/${item.id}`}>
              <img src={item.images[item.images.length - 1].url} alt="" />
              <h3>{item.name}</h3>
              <p>
                {item.artists.map((artist) => (
                  <span key={artist.id} className="mr-1">
                    {artist.name}
                  </span>
                ))}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
