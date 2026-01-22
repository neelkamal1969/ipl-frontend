export default function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        This application displays insights from the IPL 2022 dataset.
        Data was sourced from match-level JSON files and simplified
        for demonstration purposes.
      </p>
      <p>
        Backend APIs are built using FastAPI and PostgreSQL, and are
        documented via OpenAPI (Swagger).
      </p>
    </div>
  );
}
