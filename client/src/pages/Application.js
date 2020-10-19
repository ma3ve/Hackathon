import React from "react"; 
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import './index.css';

const useStyles = makeStyles((theme) => ({
   
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }));

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

// {/* <img src={require("./4159b8b0c65c017.jpg")} ></img> */}
                
function Application(){
    const classes = useStyles();

    return (
        <>
        <div className="grid-div" style={{
            height:"100vh",
            paddingTop:"20px",
        }}>
        <Grid container xs={8} spacing={1} className={classes.marginAuto} justify='space-around'>
        <Grid item xs={7}>
                <Card className={classes.root}>
                    <Grid item xs={6}>
                    <CardContent>
                        <h1>Job Postion</h1>
                        <hr></hr>
                        <h6>Company</h6>
                    </CardContent>            
                    </Grid>                
                </Card>
            </Grid>
            <Grid item xs={7}>
                <Card className={classes.root}>
                    <Grid item xs={6}>
                    <CardContent>
                        <h1>Job Postion</h1>
                        <hr></hr>
                        <h6>Company</h6>
                    </CardContent>                         
                    </Grid>                
                </Card>
            </Grid>
            <Grid item xs={7}>
                <Card className={classes.root}>
                    <Grid item xs={6}>
                    <CardContent>
                        <h1>Job Postion</h1>
                        <hr></hr>
                        <h6>Company</h6>
                    </CardContent>                      
                    </Grid>                
                </Card>
            </Grid>
        </Grid>
        </div>  
        </>
    ); 
}

export default Application;    