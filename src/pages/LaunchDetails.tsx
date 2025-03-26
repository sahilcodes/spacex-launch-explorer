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
      <h2>{launch.name}</h2>
      <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
      <p>Status: {launch.success ? "Success" : "Failure"}</p>
      <p>{launch.details || "No details available."}</p>

      {launch.links.patch.small && (
        <img src={launch.links.patch.small} alt={launch.name} />
      )}

      <div className="links">
        {launch.links.webcast && (
          <a
            href={launch.links.webcast}
            target="_blank"
            rel="noopener noreferrer"
          >
            📺 Watch Launch
          </a>
        )}
        {launch.links.wikipedia && (
          <a
            href={launch.links.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
          >
            📖 Read on Wikipedia
          </a>
        )}
      </div>

      <Link to="/" className="home-button">🏠 Back to Home</Link>
    </div>
  );
};

export default LaunchDetails;
