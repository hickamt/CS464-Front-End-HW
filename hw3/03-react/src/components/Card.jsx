/* eslint-disable react/prop-types */

/**
 * Builds a card with character information
 * @param data is a single character object
 * @returns a card with character information
 */
function Card({ data, bgColor, index }) {
  const backgroundColor = bgColor || "rgba(49, 70, 89, 0.9)";

  return (
    <div key={index} className="card mx-auto" style={{ backgroundColor: backgroundColor }}>
      <div className="row g-0">
        <div className="col">
          <img 
          src={data.imageUrl} 
          alt={data.fullName} 
          className="card-img" />
        </div>
        <div className="col">
          <div className="card-body">
            <h2 className="card-title fs-4">{data.fullName}</h2>
            {data.family !== "Unknown" && (
              <p className="card-text">House of {data.family}</p>
            )}
            <p className="card-text">{data.title}</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
