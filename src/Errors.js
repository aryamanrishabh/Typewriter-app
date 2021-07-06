const Errors = ({ errors }) => {
  return (
    <div id={errors ? "display-block" : "display-none"} className="row mt-4">
      <div className="col-md-2 offset-md-5">Errors: {errors}</div>
    </div>
  );
};

export default Errors;
