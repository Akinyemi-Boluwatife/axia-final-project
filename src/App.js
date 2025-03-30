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
  const [filterWord, setFilterWord] = useState("");
  const [searchWords, setSearchWords] = useState([]);

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

  const searchedPosts =
    filterWord.length > 0
      ? data.filter((data) =>
          `${data.position} ${data.role} ${data.company} ${data.languages}`
            .toLowerCase()
            .includes(filterWord.toLowerCase())
        )
      : data;

  function handleAddSearch(newWord) {
    setSearchWords((word) => [...word, { name: newWord }]);
  }

  return (
    <>
      <Header />
      <Section>
        <Filter
          handleAddSearch={handleAddSearch}
          filterWord={filterWord}
          setFilterWord={setFilterWord}
          searchWords={searchWords}
          setSearchWords={setSearchWords}
        />
      </Section>
      {errorMessage ? (
        <Error errorMessage={errorMessage} />
      ) : (
        <Section>
          <JobListing data={searchedPosts} isLoading={isLoading} />
        </Section>
      )}
    </>
  );
}

export default App;
