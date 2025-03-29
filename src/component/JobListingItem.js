function JobListingItem({ data }) {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = data;
  //   const { languages } = data;
  console.log(languages);
  return (
    <li className="data-list">
      <div className="img-cnt">
        <img src={logo} alt="dhdhd" />
      </div>
      <div className="dv-mrg">
        <div className="bd-spac">
          <p>
            <span className="grn-clr">{company}</span>
          </p>

          <div className="mrg">
            <span className="bd-grn-wht">{isNew && "NEW!"}</span>
            <span className="bd-blc-wht"> {featured && "FEATURED"} </span>
          </div>
        </div>

        <p className="pst"> {position} </p>

        <p className="pst-at">
          {postedAt}. •{contract} •{location}
        </p>
        <hr />
      </div>
      <div>
        <div className="skills">
          {<span className="tool">{level}</span>}

          {languages?.map((lang, index) => (
            <span key={`lang-${index}`} className="lng">
              {lang}
            </span>
          ))}

          {tools?.map((tool, index) => (
            <span key={`tool-${index}`} className="tool">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}

export default JobListingItem;
