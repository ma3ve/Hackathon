import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './index.css'


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });




function Profileupdateform(){

    const classes = useStyles();
    return (
        <div className="grid-div">
        <Grid container sm={12} justify="center">
        <Grid item xs={7}>
        <Card>
            <CardContent>
            <form className={classes.root} noValidate autoComplete="off">
                    <CardContent>
                        <Typography>
                            <h2>Name</h2>
                        </Typography>
                    </CardContent>
                    <hr></hr>
                    <CardContent>
                     <h4>Date Of Birth</h4>>
                     <Typography>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Typography>
                    </CardContent>
                    <hr></hr>
                    <CardContent>
                     <h4>Gender</h4>>
                     <Typography>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Typography>
                    </CardContent>
                    <hr></hr>
                    <CardContent>
                     <h4>Education</h4>>
                     <Typography>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Typography>
                    </CardContent>
                    <hr></hr>

                    <CardContent>

                    <Typography>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Typography>
                    </CardContent>
                    <hr></hr>
                   <CardContent>

                    <Typography>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Typography>
                    </CardContent>
                    <hr></hr>
                    <CardContent>
                    <h4>Skills</h4>

<Typography>
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
</Typography>
</CardContent>
<hr></hr>

<CardContent>
                    <h4>Skills</h4>

<Typography>
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
</Typography>
</CardContent>
<hr></hr>
                    

            </form>
            </CardContent>
        </Card>
        </Grid>
        </Grid>
        </div>
    ); 
}

export default Profileupdateform; 