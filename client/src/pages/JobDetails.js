import React, { useEffect } from "react";

import {
  Card,
  Container,
  Grid,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { getToken } from "../components/getToken";
import Cookies from "js-cookie";

export default function JobDetails(props) {
  useEffect(() => {
    (async () => {
      let data = await getToken();
      console.log(data);
      if (!data) {
        Cookies.remove("token");
        props.history.push("/loginregister");
      } else {
        document.getElementById("loading-background").style.display =
          "none";
      }
    })();
  }, []);

  return (
    <div>
      <Container>
        <Grid container justify="center">
          <Grid container item md={8}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <h1>Walkin Data Entry Operator (night Shift)</h1>
            </Grid>
            <Grid item xs={12}>
              <Card style={{ textAlign: "left" }}>
                <CardContent>
                  <Typography variant="h5">industry</Typography>
                  <Typography
                    variant="inherit"
                    style={{ color: "#8a8a8a" }}
                  >
                    compony name
                  </Typography>
                </CardContent>
                <CardContent>
                  <Grid container item xs={12}>
                    <Grid item md={3} sm={6}>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "#8a8a8a" }}
                      >
                        experience
                      </Typography>
                      <Typography variant="subtitle2">0-1yrs</Typography>
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "#8a8a8a" }}
                      >
                        education
                      </Typography>
                      <Typography variant="subtitle2">
                        UG: B.Tech/B.E. - Any Specialization PG:Any
                        Postgraduate - Any Specialization, Post Graduation
                        Not Required
                      </Typography>
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "#8a8a8a" }}
                      >
                        locations
                      </Typography>
                      <Typography variant="subtitle2">mumbai</Typography>
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "#8a8a8a" }}
                      >
                        postions
                      </Typography>
                      <Typography variant="subtitle2">5</Typography>
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "#8a8a8a" }}
                      >
                        salary
                      </Typography>
                      <Typography variant="subtitle2">
                        1,50,500 - 2,50,000 pa
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardContent>
                  <Typography variant="h6">Desvription</Typography>
                  <Typography variant="p">
                    Send me Jobs like this As a Hadoop Architect, you will
                    be responsible for planning, design and development of
                    platform features/capabilities leveraging open source,
                    Hadoop-related technologies. Candidates must be able to
                    collaborate with other architects on component design,
                    and experienced with the software development
                    lifecycle. Requirements: - 10+ years of experience with
                    Architecture with a minimum of 3-4 Years on Hadoop. -
                    Experience as Hadoop Architect and/or Developer who is
                    application development focused - Experience Hadoop
                    architect who has experience developing and integrating
                    applications within the Hadoop Framework - Experience
                    designing and optimizing an Hbase schema, select
                    appropriate technologies for the required solutions. -
                    Extensive Solutioning and implementation skills using
                    CDH involving Impala, Spark. MapReduce and Hive. - Able
                    to architect hadoop solutions and have intelligent
                    conversation with other architects and leadership team
                    about big data and analytics. - Knowledge of working in
                    a Agile / Scrum based enviroment will be a plus. -
                    Capacity Planning for Hadoop Clusters Salary: Not
                    Disclosed by Recruiter Industry: IT-Software / Software
                    Services Functional Area: IT Software - Application
                    Programming , Maintenance Role Category:Programming &
                    Design Role:Technical Architect Keyskills Hadoop HBase
                    Data Analytics Design Development Application
                    Development Hadoop Architect designing Desired
                    Candidate Profile Â  Education- UG: Any Graduate - Any
                    Specialization PG:Any Postgraduate - Any Specialization
                    Company Profile: Talent Acceleration Corridor Leading
                    client of Talent Acceleration Corridor Download PPT
                    Photo 1 Â  View Contact Details
                  </Typography>
                </CardContent>
                <CardContent>
                  <Grid container justify="center">
                    <Grid item sm={4}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Apply
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
