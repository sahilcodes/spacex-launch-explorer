import { useEffect, useState } from "react";
import axios from "axios";
import { Launch } from "./useLaunches";

export const useLaunchDetails = (id: string) => {
  const [launch, setLaunch] = useState<Launch | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`https://api.spacexdata.com/v5/launches/${id}`)
      .then((response) => {
        setLaunch(response.data);
      })
      .catch((error) => {
        console.error("Error fetching launch details:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { launch, loading };
};
