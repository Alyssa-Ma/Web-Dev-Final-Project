import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './css/AllCampusesView.css';

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  return (
    <div>
      {props.allCampuses.map((campus) => {

        console.log(props.allCampuses);
        return (
          <div className="campus-container">
            <div className="row">
              <div key={campus.id} className="col-12">

                <Link to={`/campus/${campus.id}`} className="campus-link">
                  <h1>{campus.name}</h1>
                </Link>
              </div>

              <div className="col-12">
                <img src={campus.imageUrl} alt='campus-pic' className="campus-pic" />
              </div>

              <div className="col-12">
                <p>{campus.description}</p>
                <p>{campus.address}</p>
              </div>

            </div>
          </div>

        )
      })}
    </div>

  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;