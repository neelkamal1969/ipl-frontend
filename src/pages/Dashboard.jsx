import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie } from "recharts";

const API_BASE = "https://ipl-backend-z0i3.onrender.com";

export default function Dashboard() {
  const [wins, setWins] = useState(null);
  const [venues, setVenues] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE}/stats/wins-by-team`).then(res => {
      const data = Object.entries(res.data).map(([k, v]) => ({ team: k, wins: v }));
      setWins(data);
    });

    axios.get(`${API_BASE}/stats/matches-by-venue`).then(res => {
      const data = Object.entries(res.data).map(([k, v]) => ({ venue: k, count: v }));
      setVenues(data);
    });
  }, []);

  if (!wins || !venues) return <p>Loading dashboard...</p>;

  return (
    <div>
      <h2>IPL Dashboard</h2>

      <h3>Wins by Team</h3>
      <BarChart width={500} height={300} data={wins}>
        <XAxis dataKey="team" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="wins" />
      </BarChart>

      <h3>Matches by Venue</h3>
      <PieChart width={500} height={300}>
        <Pie data={venues} dataKey="count" nameKey="venue" />
        <Tooltip />
      </PieChart>
    </div>
  );
}
