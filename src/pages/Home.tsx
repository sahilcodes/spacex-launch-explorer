import React, { useState } from "react";
import { useLaunches } from "../hooks/useLaunches";
import LaunchCard from "../components/LaunchCard";

const Home: React.FC = () => {
  const { launches, loading } = useLaunches();
  const [query, setQuery] = useState(""); // For search query
  const [visibleCount, setVisibleCount] = useState(10); // Number of launches currently visible

  if (loading) return <p>Loading launches...</p>;

  // Filter launches based on query (search by mission name)
  const filteredLaunches = launches.filter((launch) =>
    launch.name.toLowerCase().includes(query)
  );

  // Handle "Load More" button click
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); // Increase visible count by 10
  };

  return (
    <>
      {/* Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search by mission name..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      {/* Total Launch Count and Current Viewing Count */}
      <div className="launch-count">
        {/* <p className="launch-count__total">
          Total Launches: <span>{filteredLaunches.length}</span>
        </p> */}
        <p className="launch-count__viewing">
          Currently Viewing:{" "}
          <span> {Math.min(visibleCount, filteredLaunches.length)} </span>
           &nbsp; out of <span> {filteredLaunches.length}</span>
        </p>
      </div>

      {/* Launch List */}
      <div className="launch-list">
        {filteredLaunches.slice(0, visibleCount).map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>

      {/* Load More Button */}
      {filteredLaunches.length > visibleCount && (
        <button onClick={handleLoadMore} className="load-more">
          Load More
        </button>
      )}
    </>
  );
};

export default Home;
