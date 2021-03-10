import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { IState } from "./BaseLayout";
import { IRootState } from "../code/redux/store";
import { useSelector } from "react-redux";
import { ListMessages } from "./ListMessages";

const useStyles = makeStyles(() => ({
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
          {view === "welcome" && <ListMessages />}
        </Grid>
        <Grid xs={12} spacing={3}>
          <h1>Content:{view}</h1>
        </Grid>
      </Grid>
    </div>
  );
};
