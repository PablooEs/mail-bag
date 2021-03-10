import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { IState } from "./BaseLayout";
import { MailBoxes } from "./MailBoxes";
import { IRootState } from "../code/redux/store";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export const Menu: React.FC = () => {
  const classes = useStyles();
  const selectView = (state: IRootState) => state.state.view;
  const view = useSelector(selectView);

  return (
    <div>
      <MailBoxes />
    </div>
  );
};
