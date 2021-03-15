import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export const NewMessage: React.FC = () => {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        <label>Contact mail</label>

        <TextField
          style={{ marginBottom: "1rem" }}
          label="contact@mail.com"
          variant="outlined"
        />

        <label>Subject</label>
        <TextField
          style={{ marginBottom: "1rem" }}
          label="Subject"
          variant="outlined"
        />
        <label>Message</label>
        <TextField
          style={{ marginBottom: "1rem" }}
          label="Message"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Grid>
    </div>
  );
};
