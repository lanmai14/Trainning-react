function Bill() {
  return (
    <div className="calculator">
      <div className="calculator__form">
        <div className="calculator__control">
          <label className="calculator__control--label" htmlFor="bill">
            Bill
          </label>
          <span className="invalid" id="invalid-bill">
            Don't smaller than 1{" "}
          </span>
          <input
            type="number"
            name="bill"
            id="bill"
            data-index="bill"
            className="calculator__control--input calculator__control--bill"
            placeholder={0}
          />
        </div>
      </div>
    </div>
  );
}
export default Bill;
