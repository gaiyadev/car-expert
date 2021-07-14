import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [check, setCheck] = React.useState(false);
  //  const handleChange = (event) => {
  //    setCheck({ ...check, [event.target.name]: event.target.checked });
  //  };

  const linksLIst = [
    {
      id: "1",
      title: "Sign in",
      href: "/signin",
    },
    {
      id: "2",
      title: "Sign up",
      href: "/signup",
    },
  ];

  // Links List
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {linksLIst.map((text, index) => (
          <ListItem button key={index}>
            <Link href={text.href}>
              <a>
                <ListItemText primary={text.title} />
              </a>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // toogle
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Hidden mdUp>
            <Box>
              {[""].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    onClick={toggleDrawer(anchor, true)}
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                    {anchor}
                  </IconButton>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </Box>
          </Hidden>

          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <a> Car Expert</a>
            </Link>
          </Typography>

          <Hidden mdDown>
            <Button color="inherit">
              <Link href="/signin">
                <a> Sign In</a>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/signup">
                <a> Sign Up</a>
              </Link>
            </Button>
          </Hidden>
          {/* <Brightness4Icon />
          <WbSunnyIcon /> */}
          {/* <Switch
            checked={check}
            onChange={() => {
              setCheck(!check);
              const mode = check === true ? "dark" : "light";
              localStorage.setItem("mode", mode);
            }}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
