function People() {
  return (
    <div className="calculator">
      <div className="calculator__form">
        <div className="calculator__control">
          <label className="calculator__control--label" htmlFor="person">
            Number of people
          </label>
          <span className="invalid" id="invalid-person">
            Don't smaller than 1
          </span>
          <input
            type="number"
            name="person"
            id="person"
            data-index="person"
            className="calculator__control--input calculator__control--person"
            placeholder={0}
          />
        </div>
      </div>
    </div>
  );
}
export default People;
