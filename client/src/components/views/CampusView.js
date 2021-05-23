import "./css/CampusView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CampusView = (props) => {
  
  const {campus} = props;
  //waiting for students array to be populated
  if (campus.students === undefined){
    return <div>Loading...</div>
  }
  //no students
  let hasStudents = campus.students.length > 0;

  return (
    <div>      
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} alt='single-campus-pic' className="single-campus-pic"/>
      <h2>Location</h2> 
      <p>{campus.address}</p>
      <h2>Description</h2>
      <p>{campus.description}</p>
      
      <h2>Students</h2>
      { 
          (!hasStudents) ? <li>There are currently no students registered for this campus.</li>:(
            campus.students.map( student => {
              let name = student.firstname + " " + student.lastname;
              console.log(campus.students)
              console.log("students")
              return (
                <div key={student.id}>
                  <Link to={`/student/${student.id}`}>
                    <li>{name}</li>
                  </Link>
                </div>
              );
            }))
      }
      
    </div>
  );

};

CampusView.propTypes = {
  campus: PropTypes.array.isRequired,
};

export default CampusView;