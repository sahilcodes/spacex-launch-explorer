import React from "react";
import { useParams, Link } from "react-router-dom";
import { useLaunchDetails } from "../hooks/useLaunchDetails";

const LaunchDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get ID from URL
  const { launch, loading } = useLaunchDetails(id || ""); // Use our custom hook

  if (loading) return <p>Loading launch details...</p>;
  if (!launch) return <p>Launch not found.</p>;

  return (
    <div className="launch-details">
      <div className="launch-details__header">
        <h1>{launch.name}</h1>
        <p className="launch-details__date">
          {new Date(launch.date_utc).toLocaleDateString()}
        </p>
      </div>

      <div className="launch-details__status">
        <p>Status: {launch.success ? "✅ Success" : "❌ Failure"}</p>
      </div>

      <div className="launch-details__rocket">
        <p>Rocket Used: {launch.rocket}</p>
      </div>

      {launch.details && (
        <div className="launch-details__info">
          <p>{launch.details}</p>
        </div>
      )}

      {launch.links.patch.small && (
        <img
          src={launch.links.patch.small}
          alt={launch.name}
          className="launch-details__image"
        />
      )}

      <div className="launch-details__links">
        {launch.links.webcast && (
          <a
            href={launch.links.webcast}
            target="_blank"
            rel="noopener noreferrer"
            className="launch-details__link"
          >
            📺 Watch Launch
          </a>
        )}
        {launch.links.wikipedia && (
          <a
            href={launch.links.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="launch-details__link"
          >
            📖 Read on Wikipedia
          </a>
        )}
      </div>

      {/* Back to Home button */}
      <Link to="/" className="home-button">
        🏠 Back to Home
      </Link>
    </div>
  );
};

export default LaunchDetails;
