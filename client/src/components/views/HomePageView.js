import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  }
}));

const HomePageView = () => {
  const classes = useStyles();
  return (
      <div className={classes.greeting}><h1>Campus Manager</h1></div>
  
  );    
}




export default HomePageView;
