import JobListingItem from "./JobListingItem";

function JobListing({ data, isLoading, error }) {
  return (
    <ul className="data-cont">
      {data.map((data) => (
        <JobListingItem key={data.id} data={data} />
      ))}
    </ul>
  );
}

export default JobListing;
