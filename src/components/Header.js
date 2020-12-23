import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { WhiteTypography } from "../utility.js";
import { AppBar, Toolbar, IconButton, Icon, Button } from "@material-ui/core";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  imageIcon: {
    display: "flex",
    height: "inherit",
    width: "inherit",
    maxHeight: "55px",
    marginRight: theme.spacing(2),
  },
  root: {
    background: "#6c3563",
    marginBottom: theme.spacing(3),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  button: {
    textTransform: "none",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              window.location.href = "https://seerdata.com.au/";
            }}
          >
            <Icon classes={{ root: classes.imageIcon }}>
              <img
                className={classes.imageIcon}
                alt="seerLogo"
                src="/assets/seerLogo.svg"
              />
            </Icon>
          </IconButton>
          <Button className={classes.button}>
            <WhiteTypography
              component="span"
              variant="h6"
              noWrap
              className={classes.title}
              onClick={() => navigate("./")}
            >
              Blogs
            </WhiteTypography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
