import { NewReleases } from "../components/NewReleases";
import { RecommendationsTracks } from "../components/RecommendationsTracks";

export const HomePage = () => {
  return (
    <div>
      <h1 className="text-blue-500 mb-4">HomePage</h1>

      <NewReleases />
      <RecommendationsTracks />
    </div>
  );
};
