import React from "react";
import { locations } from "./locations.json";
import { category } from "./category.json";
import {
  Button,
  Grid,
  TextField,
  Chip,
  FormGroup,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
function Filters() {
  const [selectedLocations, setSelectedLocations] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState([]);
  const [experience, setExperience] = React.useState();

  const handleApplyFilter = () => {};

  return (
    <>
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="contained"
            size="small"
            onClick={handleApplyFilter}
          >
            Apply Filters
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            multiple
            id="fixed-tags-demo"
            value={selectedLocations}
            onChange={(event, newValue) => {
              setSelectedLocations([...newValue]);
            }}
            options={locations}
            getOptionLabel={(option) => option}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="location(s)"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            multiple
            id="fixed-tags-demo"
            value={selectedCategory}
            onChange={(event, newValue) => {
              setSelectedCategory([...newValue]);
            }}
            options={category}
            getOptionLabel={(option) => option}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="category(s)"
                variant="outlined"
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "10px" }}>
        <Grid item xs={12}>
          <FormLabel component="legend">Experience</FormLabel>
        </Grid>
        <FormGroup row>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox />}
              label="0 - 5 years"
              checked={experience === "0-5"}
              onChange={(e) => {
                setExperience(e.target.checked ? "0-5" : null);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={experience === "6-10"}
                  onChange={(e) => {
                    setExperience(e.target.checked ? "6-10" : null);
                  }}
                />
              }
              label="6 - 10 years"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={experience === "11-15"}
                  onChange={(e) => {
                    setExperience(e.target.checked ? "11-15" : null);
                  }}
                />
              }
              label="11 - 15 years"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={experience === "16-20"}
                  onChange={(e) => {
                    setExperience(e.target.checked ? "16-20" : null);
                  }}
                />
              }
              label="16 - 20 years"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={experience === "20+"}
                  onChange={(e) => {
                    setExperience(e.target.checked ? "20+" : null);
                  }}
                />
              }
              label="20+ years"
            />
          </Grid>
        </FormGroup>
      </Grid>
    </>
  );
}

export default Filters;
