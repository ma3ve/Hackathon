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
    gridxs:{
        backgroundImage:`url(${require("./4159b8b0c65c017.jpg")})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"100% 45%",
        paddingTop:"200px",
        // position:"relative",
        // "&::before":{
        //     position:"absolute",
        //     content:'"akash what are you doing"', 
        //     width:"100px", 
        //     height:"100px",
        //     backgroundColor:"blue",
        //     top:"0", 
        //     left:"0",
        // }
    },
    root: {
        padding:"20px",
        
    },
    ch:{
        marginRight:"10px",
        marginBottom:"8px"
    },
    marginAuto:{
      margin:"auto",  
    },
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
                
function ProfileIntro(){
    const classes = useStyles();

    return (
        <>
        <div className="grid-div">
        <Grid container spacing={1} className={classes.marginAuto} justify='center'>
            <Grid item xs={7} container direction='row'  >
                <Card className={classes.root,classes.gridxs}>
                    <Grid item xs={7}>
                        <CardContent>
                        <img src={require("./ten.jpg")}  
                        className="rounded-circle yo-image" height="160px"
                        width="160px"></img>
                        </CardContent>
                       <CardContent>
                       <h2>Akash</h2>
                        <p className="font-bolder">STUDYING BE COMPUTER SCIENCE IN ARMY 
                        INSTITUTE OF TECHNOLOGY | FRONT END ENTHUSIAST | COMPETETIVE
                        PROGRAMMER</p>
                        <p>
                            Pune, Maharashtra, India
                        </p>
                       </CardContent>
                       
                    </Grid>
                    <Grid item xs={7}>
                    <CardContent>
                    <Button
                            variant="contained"
                            component="label"
                            >
                            Upload Resume
                            <input
                                type="file"
                                style={{ display: "none" }}
                            />
                            </Button>
                    </CardContent>
                    
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={7}>
                <Card className={classes.root}>
                    <Grid item xs={6}>
                    <CardContent>
                    <h2>EDUCATION</h2>
                    </CardContent>
                      <CardContent>
                      <div>
                          <ul>
                              <li>
                                  <h5>B.E Computer Science</h5>
                                  <p>2018-2022</p>
                                  <p>Perentage: 93</p>
                              </li>
                              <hr></hr>
                              <li>
                                 <h5>12th Standard</h5>
                                  <p>2018-2022</p>
                                  <p>Perentage: 93</p>
                              </li>
                              <hr></hr>
                              <li>
                              <h5>10th Standard</h5>
                                  <p>2018-2022</p>
                                  <p>Perentage: 93</p>
                              </li>
                          </ul>
                          </div>
                      </CardContent>                     
                    </Grid>                
                </Card>
            </Grid>
            <Grid item xs={7}>
                <Card className={classes.root}>
                    <Grid item xs={12}>
                    <CardContent>
                    <h2>Skills </h2>
                    </CardContent>
                      <CardContent>
<Chip size="small" label="Deletable Primary" onDelete={handleDelete} className={classes.ch} color="primary" />
<Chip size="small" label="Deletable Primary" onDelete={handleDelete} className={classes.ch} color="primary" />
<Chip size="small" label="Deletable Primary" onDelete={handleDelete} className={classes.ch} color="primary" />
<Chip size="small" label="Deletable Primary" onDelete={handleDelete} className={classes.ch} color="primary" />
<Chip size="small" label="Deletable Primary" onDelete={handleDelete} className={classes.ch} color="primary" />
<Chip size="small" label="Deletable Primary" onDelete={handleDelete} className={classes.ch} color="primary" />
<Chip size="small" label="Deletable Primary" onDelete={handleDelete} className={classes.ch} color="primary" />

                      
                      
                      
                      </CardContent>
                       
                    </Grid>
                
                </Card>
            </Grid>
        </Grid>
        </div>  
        </>
    ); 
}

export default ProfileIntro;    