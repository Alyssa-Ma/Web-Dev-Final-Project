import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './css/AllCampusesView.css';
import Button from '@material-ui/core/Button';

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
            <div className="row text-center">
              <div key={campus.id} className="col">

                <Link to={`/campus/${campus.id}`} className="campus-link">
                  <h2>{campus.name}</h2>
                </Link>
                
                <img src={campus.imageUrl} alt='campus-pic' className="campus-pic" />
              
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