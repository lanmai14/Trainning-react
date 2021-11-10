function Tips() {
  return (
    <div className="calculator">
      <div className="calculator__form">
        <div className="calculator__control">
          <label className="calculator__control--label" htmlFor="select">
            Select Tip %
          </label>
          <div className="calculator__control--select">
            <button className="btn tip--btn" id="tip--1" value={5}>
              5%
            </button>
            <button className="btn tip--btn" id="tip--2" value={10}>
              10%
            </button>
            <button className="btn tip--btn" id="tip--3" value={15}>
              15%
            </button>
            <button className="btn tip--btn" id="tip--4" value={25}>
              25%
            </button>
            <button className="btn tip--btn" id="tip--5" value={50}>
              50%
            </button>
            <input
              className="calculator__control--input calculator__control--custom"
              type="number"
              data-index="custom"
              placeholder="Custom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tips;
