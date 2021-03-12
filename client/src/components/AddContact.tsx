import * as React from "react";
import TextField from "@material-ui/core/TextField";

export const AddContact: React.FC = () => {
  return (
    <form>
      <TextField id="outlined-basic" label="Contact Name" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="contact@mail.com"
        variant="outlined"
      />
    </form>
  );
};
