function Error({ msg }) {
  return (
    <div className="error-container">
      <span className="error-icon"> &#9785;</span>
      <span className="error-msg heading-m ">{msg}</span>
    </div>
  );
}

export default Error;
