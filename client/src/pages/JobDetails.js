import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import {
  Card,
  Container,
  Grid,
  Paper,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function JobDetails() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container>
        <Grid style={{ width: "80vw", minHeight: "80vh" }}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <h1>title</h1>
          </Grid>
          <Grid item xs={12}>
            <Card style={{ textAlign: "left" }}>
              <CardContent>
                <Typography variant="h5">industry</Typography>
                <Typography variant="inherit">compony name</Typography>
              </CardContent>
              <CardContent>
                <Grid container item xs={12}>
                  <Grid item md={3} sm={6}>
                    <Typography variant="subtitle1">experience</Typography>
                    <Typography variant="subtitle2">0-1yrs</Typography>
                  </Grid>
                  <Grid item md={3} sm={6}>
                    <Typography variant="subtitle1">education</Typography>
                    <Typography variant="subtitle2">
                      UG: B.Tech/B.E. - Any Specialization PG:Any
                      Postgraduate - Any Specialization, Post Graduation
                      Not Required
                    </Typography>
                  </Grid>
                  <Grid item md={3} sm={6}>
                    <Typography variant="subtitle1">locations</Typography>
                    <Typography variant="subtitle2">mumbai</Typography>
                  </Grid>
                  <Grid item md={3} sm={6}>
                    <Typography variant="subtitle1">postions</Typography>
                    <Typography variant="subtitle2">5</Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Typography variant="h6">Desvription</Typography>
                <Typography variant="p">
                  Send me Jobs like this As a Hadoop Architect, you will be
                  responsible for planning, design and development of
                  platform features/capabilities leveraging open source,
                  Hadoop-related technologies. Candidates must be able to
                  collaborate with other architects on component design,
                  and experienced with the software development lifecycle.
                  Requirements: - 10+ years of experience with Architecture
                  with a minimum of 3-4 Years on Hadoop. - Experience as
                  Hadoop Architect and/or Developer who is application
                  development focused - Experience Hadoop architect who has
                  experience developing and integrating applications within
                  the Hadoop Framework - Experience designing and
                  optimizing an Hbase schema, select appropriate
                  technologies for the required solutions. - Extensive
                  Solutioning and implementation skills using CDH involving
                  Impala, Spark. MapReduce and Hive. - Able to architect
                  hadoop solutions and have intelligent conversation with
                  other architects and leadership team about big data and
                  analytics. - Knowledge of working in a Agile / Scrum
                  based enviroment will be a plus. - Capacity Planning for
                  Hadoop Clusters Salary: Not Disclosed by Recruiter
                  Industry: IT-Software / Software Services Functional
                  Area: IT Software - Application Programming , Maintenance
                  Role Category:Programming & Design Role:Technical
                  Architect Keyskills Hadoop HBase Data Analytics Design
                  Development Application Development Hadoop Architect
                  designing Desired Candidate Profile Â  Education- UG: Any
                  Graduate - Any Specialization PG:Any Postgraduate - Any
                  Specialization Company Profile: Talent Acceleration
                  Corridor Leading client of Talent Acceleration Corridor
                  Download PPT Photo 1 Â  View Contact Details
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
