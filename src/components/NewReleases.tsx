import { useState, useEffect } from "react";
import { api } from "../api/api";

export const NewReleases = () => {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    getNewReleases();
  }, []);

  const getNewReleases = async () => {
    try {
      const result = await api.get("/browse/new-releases");
      setNewReleases(result.data.albums.items);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>NewReleases</h1>

      <ul>
        {newReleases.map((releas: any) => (
          <li key={releas.id}>{releas.name}</li>
        ))}
      </ul>
    </div>
  );
};
