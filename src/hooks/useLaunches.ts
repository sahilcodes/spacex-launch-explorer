import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.spacexdata.com/v5/launches";

export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean | null;
  details: string | null;
  links: {
    patch: { small: string | null };
    webcast: string | null;
    wikipedia: string | null;
  };
  rocket: string;
}

export const useLaunches = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setLaunches(response.data);
      setLoading(false);
    });
  }, []);

  return { launches, loading };
};
