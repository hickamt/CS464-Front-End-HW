/* eslint-disable react/prop-types */

/**
 * Builds a card with character information
 * @param data is a single character object
 * @returns a card with character information
 */
function Card({ data }) {
  return (
    <div className="card mx-auto">
      <div className="row g-0">
        <div className="col">
          <img
            src={data.imageUrl}
            alt={data.fullName}
            className="card-img"
          />
        </div>
        <div className="col">
          <div className="card-body">
            <h2 className="card-title fs-4">{data.fullName}</h2>
            <p className="card-text">
              {data.title} {data.family}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
