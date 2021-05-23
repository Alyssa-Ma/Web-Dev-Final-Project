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
      
      <Link to={'/new'}>
        <Button variant="contained" color="primary">
          Add Campus
        </Button>
      </Link>
      
      {props.allCampuses.map((campus) => {

        console.log(props.allCampuses);
        return (
          <div className="campus-container">
            <div className="row text-center">
              <div key={campus.id} className="col-12">

                <Link to={`/campus/${campus.id}`} className="campus-link">
                  <h1>{campus.name}</h1>
                </Link>
              </div>

              <div className="col-12">
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