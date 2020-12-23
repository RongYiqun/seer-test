import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Divider,
  CircularProgress,
  Container,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

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

export function ErrorMessage({ error }) {
  return (
    <Container maxWidth="xs">
      <Alert severity="error">
        <AlertTitle>Sorry, there is an error while loading</AlertTitle>
        {error.message}
      </Alert>
    </Container>
  );
}
