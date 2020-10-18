import React from "react";
import Filter from "../components/Filters";
import { Grid, Container } from "@material-ui/core";

function HomePage() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={3}>
          <Filter />
        </Grid>
        <Grid item xs={9}></Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
