import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button/";
import Grid from "@material-ui/core/Grid";

export const AddContact: React.FC = () => {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={12}>
        <TextField label="Contact Name" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField label="contact@mail.com" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="contained" color="primary">
          Add
        </Button>
      </Grid>
    </Grid>
  );
};
