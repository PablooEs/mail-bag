import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { IState } from "./BaseLayout";
import { MailBoxes } from "./MailBoxes";
import { IRootState } from "../code/redux/store";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
export const Content: React.FC<IState> = (props) => {
  const classes = useStyles();
  const selectView = (state: IRootState) => state.state.view;
  const view = useSelector(selectView);

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Grid xs={12} spacing={3}>
          {view === "welcome" && <MailBoxes />}
        </Grid>
        <Grid xs={12} spacing={3}>
          <h1>Content:{view}</h1>
        </Grid>
      </Grid>
    </div>
  );
};
