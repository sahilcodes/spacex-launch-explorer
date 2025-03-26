import React, { useState } from "react";
import { useLaunches } from "../hooks/useLaunches";
import LaunchCard from "../components/LaunchCard";

const Home: React.FC = () => {
  const { launches, loading } = useLaunches();
  const [query, setQuery] = useState("");

  if (loading) return <p>Loading launches...</p>;

  return (
    <>
      <input
        type="text"
        placeholder="Search by mission name..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <div className="launch-list">
        {launches
          .filter((launch) => launch.name.toLowerCase().includes(query))
          .map((launch) => (
            <LaunchCard key={launch.id} launch={launch} />
          ))}
      </div>
    </>
  );
};

export default Home;
