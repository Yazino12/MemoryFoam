import { makeStyles } from "@material-ui/core/styles";

export default makeStyles( (theme) => ({
  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  },
}));
