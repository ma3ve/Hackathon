import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
// import JobDetails from "../pages/JobDetails";
import Button from "@material-ui/core/Button";
import { images } from "../images";

import {
  Grid,
  Card,
  CardActionArea,
  Typography,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function JobComponent() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent style={{ paddingBottom: "0px" }}>
        <img
          className="job-image image-fluid"
          src={require("../microsoft.png")}
          alt="job-image"
          width="100px"
          height="100px"
        />
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Front End Developer
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          porro sint architecto numquam id excepturi? Quos incidunt ad
          delectus neque.
        </Typography>
        <div style={{ marginTop: "10px" }}>
          <Chip
            label="ajdslfmasdfasd"
            size="small"
            color="primary"
            style={{ margin: "0 5px 5px 0" }}
          />
          <Chip
            label="adsafsdl"
            size="small"
            color="primary"
            style={{ margin: "0 5px 5px 0" }}
          />
          <Chip
            label="asdsadfasdf"
            size="small"
            color="primary"
            style={{ margin: "0 5px 5px 0" }}
          />
        </div>

        <Grid container spacing={1} style={{ marginTop: "10px" }}>
          <Grid item xs={6}>
            <Button variant="contained" size="medium" fullWidth>
              Apply Here
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" size="medium" fullWidth>
              show
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default JobComponent;
