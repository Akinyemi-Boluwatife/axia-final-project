import FilterItem from "./FilterItem";

function Filter({ setFilterWord, handleAddSearch, filterWord, searchWords }) {
  function handleClick(e) {
    e.preventDefault();
    handleAddSearch(filterWord);
    setFilterWord("");
  }
  function handleClear(e) {
    e.preventDefault();
    setFilterWord("");
  }

  console.log(searchWords);
  return (
    <section className="filter">
      <form>
        <div className="inp-btn-cont">
          <input
            placeholder="Search..."
            value={filterWord}
            onChange={(e) => setFilterWord(e.target.value)}
          />
          <button className="btn-cnt" onClick={handleClick}>
            Filter
          </button>
        </div>
        <div className="filt-res-clr-cnt">
          <ul className="filt-res">
            {searchWords.map((res, i) => (
              <FilterItem key={i} res={res} />
            ))}
          </ul>
          {filterWord ? (
            <div className="clear">
              <button onClick={handleClear}>Clear</button>
            </div>
          ) : null}
        </div>
      </form>
    </section>
  );
}

export default Filter;
