import React, { useEffect, useState } from "react";
import Filter from "../components/Filters";
import { Grid, Container } from "@material-ui/core";
import JobComponent from "../components/JobComponent";
import { getToken } from "../components/getToken";
import Cookies from "js-cookie";

function HomePage(props) {
  const [token, setToken] = useState("");

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

  useEffect(() => {
    (async () => {})();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Filter />
        </Grid>
        <Grid item container xs={9} spacing={3}>
          <Grid item md={4} sm={6}>
            <JobComponent />
          </Grid>
          <Grid item md={4} sm={6}>
            <JobComponent />
          </Grid>
          <Grid item md={4} sm={6}>
            <JobComponent />
          </Grid>
          <Grid item md={4} sm={6}>
            <JobComponent />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
