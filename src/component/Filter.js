import FilterItem from "./FilterItem";

function Filter() {
  const result = [
    { name: "Frontend" },
    { name: "css" },
    { name: "javascript" },
  ];

  return (
    <section className="filter">
      <form>
        <div className="inp-btn-cont">
          <input placeholder="Search..." />
          <button className="btn-cnt">Filter</button>
        </div>
        <div className="filt-res-clr-cnt">
          <ul className="filt-res">
            {result.map((res) => (
              <FilterItem key={res.name} res={res} />
            ))}
          </ul>
          <div className="clear">
            <button>Clear</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Filter;
