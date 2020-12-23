import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { Typography, Divider, CircularProgress } from "@material-ui/core";

export const WhiteDivider = withStyles({
  root: {
    background: "#FFFFFF",
  },
})(Divider);

export const WhiteTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

export function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="inherit" />
    </div>
  );
}
