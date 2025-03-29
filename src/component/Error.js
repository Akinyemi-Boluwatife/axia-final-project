function Error({ errorMessage }) {
  return (
    <div className="error">{errorMessage || " What is going on here"}</div>
  );
}

export default Error;
