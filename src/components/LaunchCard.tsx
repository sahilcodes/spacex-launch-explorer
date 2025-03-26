import React from "react";
import { Link } from "react-router-dom";
import { Launch } from "../hooks/useLaunches";

interface Props {
  launch: Launch;
}

const LaunchCard: React.FC<Props> = ({ launch }) => {
  return (
    <div className="launch-card">
      <img
        src={launch.links.patch.small || "fallback_placeholder.png"}
        alt="{launch.name}"
      />

      <h3>{launch.name}</h3>
      <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
      <p>Status: {launch.success ? "Success" : "Oh ho! Failure :("}</p>

      <Link to={`/launch/${launch.id}`}>Details</Link>
    </div>
  );
};

export default LaunchCard;
