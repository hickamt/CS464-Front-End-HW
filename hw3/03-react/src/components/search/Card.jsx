/* eslint-disable react/prop-types */
function Card({data}) {
  return (
    <div className="card single-card rounded">
      <div className="row g-0">
        <div className="col md-4">
          <img src={data.imageUrl} alt={data.fullName} className="card-img rounded" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title fs-4">{data.fullName}</h2>
            <p className="card-text">
              {data.title} {data.family}
            </p>
            {/* <a href="https://thronesapi.com/" className="btn btn-primary">
                    Go somewhere
                  </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
