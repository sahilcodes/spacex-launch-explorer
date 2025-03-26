import React from "react";
import { Link } from "react-router-dom";
import { Launch } from "../hooks/useLaunches";

interface Props {
  launch: Launch;
}

const LaunchCard: React.FC<Props> = ({ launch }) => {
  return (
    <div className="launch-card">
      {launch.links.patch.small && (
        <img
          src={launch.links.patch.small}
          alt={launch.name}
          className="launch-card__image"
        />
      )}
      <div className="launch-card__header">
        <h3>{launch.name}</h3>
        <p className="launch-card__date">
          {new Date(launch.date_utc).toLocaleDateString()}
        </p>
      </div>
      <div className="launch-card__status">
        <p>Status: {launch.success ? "✅ Success" : "❌ Failure"}</p>
      </div>

      <Link className="launch-card__link" to={`/launch/${launch.id}`}>Details</Link>
    </div>
  );
};

export default LaunchCard;
