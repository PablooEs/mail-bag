import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { changeView } from "../code/redux/actions/actions";
import { useDispatch } from "react-redux";

interface Props {
  name: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 0,
      marginBottom: 15,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const Nav: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.name}
          </Typography>
          <Button
            color="inherit"
            onClick={() => dispatch(changeView("addContact"))}
          >
            New Contact
            <PersonAddIcon />
          </Button>
          <Button color="inherit">
            New Message
            <EmailIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
