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

function JobComponent(props) {
  const classes = useStyles();
  const { data } = props;
  return (
    <Card style={{ height: "100%" }}>
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
        <Typography gutterBottom variant="h5" component="h6">
          {data.jobtitle.substring(0, 20)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.jobdescription.substring(0, 100)}
        </Typography>
        <div style={{ marginTop: "10px" }}>
          <Chip
            label={data.experience}
            size="small"
            color="primary"
            style={{ margin: "0 5px 5px 0" }}
          />
          <Chip
            label={data.joblocation_address.substring(0, 20)}
            size="small"
            color="primary"
            style={{ margin: "0 5px 5px 0" }}
          />
          <Chip
            label={data.skills}
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
            <Button
              variant="contained"
              size="medium"
              fullWidth
              onClick={(e) => {
                window.location.href = `http://localhost:3000/job/${data.id}`;
              }}
            >
              show
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default JobComponent;
