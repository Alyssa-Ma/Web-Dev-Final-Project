
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
            <li key={student.id}>{name}</li>
          );
        }
      })}
      </ul>
    </div>
  );

};

export default CampusView;