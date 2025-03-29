import { useEffect, useState } from "react";
import Filter from "./component/Filter";
import Header from "./component/Header";
import JobListing from "./component/JobListing";
import Section from "./component/Section";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:9009/data"); // Replace with your endpoint
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setData(data);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message || "There was an error loading the data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Section>
        <Filter />
      </Section>
      <Section>
        <JobListing data={data} isLoading={isLoading} />
      </Section>
    </>
  );
}

export default App;
