import { CssBaseline, Icon, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { WhiteTypography, WhiteDivider } from "../utility/index.js";
const useStyles = makeStyles((theme) => ({
  imageIcon: {
    display: "flex",
    height: "inherit",
    width: "inherit",
    marginRight: theme.spacing(2),
  },
  root: {
    background: "rgb(50,46,59)",
    padding: theme.spacing(8),
    marginTop: theme.spacing(4),
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Icon classes={{ root: classes.imageIcon }}>
          <img
            className={classes.imageIcon}
            alt="seerLogoLarge"
            src="/assets/seerLogoLarge.svg"
          />
        </Icon>
        <WhiteDivider className={classes.divider} />
        <WhiteTypography component="span">
          <Box fontWeight="fontWeightBold">Company</Box>
        </WhiteTypography>
        <a href="https://seerdata.com.au/about">
          <WhiteTypography component="span">About us</WhiteTypography>
        </a>
        <a href="https://seerdata.com.au/privacy-policy">
          <WhiteTypography component="span">Privacy policy</WhiteTypography>
        </a>
        <a href="https://seerdata.com.au/terms-of-service">
          <WhiteTypography component="span">Terms of service</WhiteTypography>
        </a>
        <WhiteTypography component="span" align="right">
          © Seer Data &amp; Analytics 2020
        </WhiteTypography>
      </div>
    </>
  );
}
