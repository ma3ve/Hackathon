import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Grid, Card,CardActionArea,Typography,CardContent} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const handleClick = () => {
  console.info('You clicked the Chip.');
};



function JobComponent() {
  const classes = useStyles();

  return (
   <Card>
         <CardContent style = {{paddingBottom : "0px"}}>
          <img className="job-image image-fluid" src="./download.png" alt="job-image" width = "100px" height="100px"/> 
         </CardContent>
         <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
          Front End Developer
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          porro sint architecto numquam id excepturi? Quos incidunt ad delectus neque.
        </Typography>
           <div style = {{marginTop: "10px"}}>

           <Chip label="Deletable primary" onDelete={handleDelete} size="small" color="primary"  />
        <Chip label="Deletable primary" onDelete={handleDelete} size="small" color="primary" />
        <Chip label="Deletable primary" onDelete={handleDelete} size="small" color="primary" />
      
           </div>
           
        <Grid container spacing = {1} style = {{marginTop: "10px"}}>
        <Grid item xs={6}>
          <Button variant="contained" size="medium" color="#00b0ff" fullWidth >
            Apply Here
          </Button>

        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" size="medium" color="warning" fullWidth>
            Message
          </Button>
        </Grid>
      </Grid>
      </CardContent>
         
   </Card>
      
      


  );
}

export default JobComponent; 