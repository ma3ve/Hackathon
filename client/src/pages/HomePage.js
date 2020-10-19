import React, { useEffect, useState } from "react";
import Filter from "../components/Filters";
import { Grid, Container, IconButton } from "@material-ui/core";
import JobComponent from "../components/JobComponent";
import { getToken } from "../components/getToken";
import Cookies from "js-cookie";
import axios from "axios";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function HomePage(props) {
  const [token, setToken] = useState("");
  const [jobs, setJobs] = useState([]);

  const {
    params: { pageId },
  } = props.match;

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
        setToken(data.token);
      }

      const res = await axios.get(
        `http://localhost:8000/api/jobs?${
          !pageId ? "page=1" : "page=" + pageId
        }`,
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      setJobs(res.data.results);
    })();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Filter />
        </Grid>
        <Grid item container xs={9} spacing={3}>
          {jobs.map((job, id) => (
            <Grid item md={4} sm={6} key={id}>
              <JobComponent data={job} />
            </Grid>
          ))}
          <BottomNavigation
            showLabels
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <IconButton
              onClick={(e) => {
                let url = window.location.href;
                let cpg = Number(url[url.length - 1]);
                let pgno = cpg - 1 > 0 ? cpg - 1 : 1;
                window.location.href = "http://localhost:3000/" + pgno;
              }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {
                let url = window.location.href;
                let cpg = Number(url[url.length - 1]);
                let pgno = cpg + 1;
                window.location.href = "http://localhost:3000/" + pgno;
              }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </BottomNavigation>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
