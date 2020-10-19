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
import axios from "axios";

export default function JobDetails(props) {
  const {
    params: { jobId },
  } = props.match;

  const [data, setData] = React.useState({});
  useEffect(() => {
    (async () => {
      let token = await getToken();
      console.log(token);
      if (!token) {
        Cookies.remove("token");
        props.history.push("/loginregister");
      } else {
        document.getElementById("loading-background").style.display =
          "none";
      }

      const res = await axios.get(
        `fastsync.herokuapp.com/api/jobs/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      setData(res.data);
    })();
  }, []);

  return (
    <div>
      <Container>
        <Grid container justify="center">
          <Grid container item md={8}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <h1>{data.title}</h1>
            </Grid>
            <Grid item xs={12}>
              <Card style={{ textAlign: "left" }}>
                <CardContent>
                  <Typography variant="h5">{data.industry}</Typography>
                  <Typography
                    variant="inherit"
                    style={{ color: "#8a8a8a" }}
                  >
                    {data.company}
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
                      <Typography variant="subtitle2">
                        {data.experience}
                      </Typography>
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "#8a8a8a" }}
                      >
                        education
                      </Typography>
                      <Typography variant="subtitle2">
                        {data.education}
                      </Typography>
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "#8a8a8a" }}
                      >
                        locations
                      </Typography>
                      <Typography variant="subtitle2">
                        {data.joblocation_address}
                      </Typography>
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "#8a8a8a" }}
                      >
                        postions
                      </Typography>
                      <Typography variant="subtitle2">
                        {data.numberofpositions}
                      </Typography>
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "#8a8a8a" }}
                      >
                        salary
                      </Typography>
                      <Typography variant="subtitle2">
                        {data.payrate}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardContent>
                  <Typography variant="h6">Description</Typography>
                  <Typography variant="p">
                    {data.jobdescription}
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
