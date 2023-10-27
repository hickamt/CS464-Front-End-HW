/* eslint-disable react/prop-types */
// Sidbar setup for testing
export default function Sidebar({ getComponent }) {
  return (
    <div className="sidebar d-block">
      <p>Sidebar</p>
      <button
        className="card-btn rounded bg-success text-light m-1"
        value="search"
        onClick={(e) => getComponent(e, e.target.value)}>
        Search
      </button>
      <button
        className="card-btn rounded bg-success text-light m-1"
        value="houses"
        onClick={(e) => getComponent(e, e.target.value)}>
        Houses
      </button>
      {/* <button
        className="card-btn rounded bg-success text-light m-1"
        value="table"
        onClick={(e) => getComponent(e, e.target.value)}>
        Table
      </button> */}
    </div>
  );
}
