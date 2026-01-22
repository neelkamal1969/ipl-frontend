import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "https://ipl-backend-z0i3.onrender.com";

export default function Matches() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setData(null);
    axios.get(`${API_BASE}/matches?page=${page}&limit=10`)
      .then(res => setData(res.data));
  }, [page]);

  if (!data) return <p>Loading matches...</p>;

  return (
    <div>
      <h2>Matches</h2>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Match</th>
            <th>Teams</th>
            <th>Result</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map(m => (
            <tr key={m.id}>
              <td>{m.title}</td>
              <td>{m.team_a} vs {m.team_b}</td>
              <td>{m.result}</td>
              <td>{m.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
      <span style={{ margin: "0 10px" }}>Page {page}</span>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
