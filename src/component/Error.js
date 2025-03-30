function Error({ errorMessage }) {
  return (
    <div className="error">{errorMessage || " Unable to load data..."}</div>
  );
}

export default Error;
