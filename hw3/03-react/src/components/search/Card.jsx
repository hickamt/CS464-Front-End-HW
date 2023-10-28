/* eslint-disable react/prop-types */

/**
 * Builds a card with character information
 * @param data is a single character object
 * @returns a card with character information
 */
function Card({ data }) {
  return (
    <div className="card single-card rounded">
      <div className="row g-0">
        <div className="col md-4">
          <img
            src={data.imageUrl}
            alt={data.fullName}
            className="card-img rounded"
          />
        </div>
        <div className="col-md-8">
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
