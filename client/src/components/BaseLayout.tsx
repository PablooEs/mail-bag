import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Nav } from "./Nav";
import { Menu } from "./Menu";
import { Content } from "./Content";
import { Contacts } from "./Contacts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: "100vh",
  },
}));

export interface IState {
  view: string;
}

export const BaseLayout: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = React.useState<IState>({ view: "welcome" });
  return (
    <div className={classes.root}>
      <Nav name="MailBag" />
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
      >
        <Grid xs={3}>
          <Paper className={classes.paper}>
            <Contacts />
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className={classes.paper}>
            <Content view={state.view} />
          </Paper>
        </Grid>
        <Grid xs={3}>
          <Paper className={classes.paper}>
            <Menu />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
