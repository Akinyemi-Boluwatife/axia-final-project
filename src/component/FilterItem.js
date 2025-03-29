function FilterItem({ res }) {
  return (
    <li className="filt-res-li">
      <div className="name-cont"> {res.name} </div>
      <button>X</button>
    </li>
  );
}

export default FilterItem;
