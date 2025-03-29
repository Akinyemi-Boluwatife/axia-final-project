import Filter from "./component/Filter";
import Header from "./component/Header";
import JobListing from "./component/JobListing";
import Section from "./component/Section";

function App() {
  return (
    <>
      <Header />
      <Section>
        <Filter />
      </Section>
      <Section>
        <JobListing />
      </Section>
    </>
  );
}

export default App;
