import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { IState } from "./BaseLayout";
import { MailBoxes } from "./MailBoxes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
export const Content: React.FC<IState> = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Grid xs={12} spacing={3}>
          {props.view === "welcome" && <MailBoxes />}
        </Grid>
        <Grid xs={12} spacing={3}>
          <h1>Content</h1>
        </Grid>
      </Grid>
    </div>
  );
};
