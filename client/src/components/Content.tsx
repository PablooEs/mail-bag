import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { IRootState } from "../code/redux/store";
import { useSelector } from "react-redux";
import { ListMessages } from "./ListMessages";
import { MessageDetail } from "./MessageDetail";
import { AddContact } from "./AddContact";
import { NewMessage } from "./NewMessage";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export const Content: React.FC = () => {
  const classes = useStyles();
  const selectView = (state: IRootState) => state.state.view;
  const view = useSelector(selectView);
  const selectMessage = (state: IRootState) => state.state.messageDetail;
  const message = useSelector(selectMessage);

  return view === "addContact" ? (
    <div>
      <AddContact />
    </div>
  ) : view === "welcome" ? (
    <div>
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Grid container spacing={3}>
          <ListMessages />
        </Grid>
        <Grid container spacing={3}>
          <MessageDetail />
        </Grid>
      </Grid>
    </div>
  ) : view === "newMessage" ? (
    <NewMessage />
  ) : (
    <></>
  );
};
