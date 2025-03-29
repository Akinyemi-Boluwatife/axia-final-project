import { useEffect, useState } from "react";
import Filter from "./component/Filter";
import Header from "./component/Header";
import JobListing from "./component/JobListing";
import Section from "./component/Section";
import Error from "./component/Error";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:9009/data"); // Replace with your endpoint
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setData(data);
        setErrorMessage(null); // Clear any previous errors
      } catch (err) {
        setErrorMessage(
          err.message || "There was an error loading the data..."
        );
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
      {errorMessage ? (
        <Error errorMessage={errorMessage} />
      ) : (
        <Section>
          <JobListing data={data} isLoading={isLoading} />
        </Section>
      )}
    </>
  );
}

export default App;
