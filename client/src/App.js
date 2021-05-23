import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewCampusFormContainer,
  AddStudentContainer
} from './components/containers';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  links:{
    textDecoration: 'none',
  }

}));
// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link to={'/'}  >
            <Typography variant="h6" className={classes.title} color="inherit" >
              CRUD App
            </Typography>
          </Link>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginLeft: '30px', marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link to={'/form'}>
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              Add Campus
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} style={{marginRight: '10px'}}>
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>

          <Link to={'/addStudent'}>
            <Button variant="contained" color="primary">
              Add Student
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );    
}

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/form" component={NewCampusFormContainer} />
        <Route exact path="/addStudent" component={AddStudentContainer} />
      </Switch>        
    </div>
  );
}

export default App;
