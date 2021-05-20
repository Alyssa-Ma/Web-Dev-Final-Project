import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CampusView = (props) => {
  
  const {campus} = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
  //no students


  return (
    <div>      
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} alt='campus-pic'/>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <ul>
      
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        if (!campus.students) {
          console.log("no tsudents")
          return <li>There are currently no students registered for this campus.</li>
        }
        else {
          console.log("students")
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h1>{name}</h1>
              </Link>
            </div>
          );
        }
      })}
      </ul>
    </div>
  );

};

export default CampusView;