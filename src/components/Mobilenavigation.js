import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  mobileDrawer: {
    width: "70%",
  },
  cancelButton: {
    position: "absolute",
    right: 0,
    zIndex: 99,
  },
}));

const Mobilenavigation = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        classes={{
          paper: classes.mobileDrawer,
        }}
        open={open}
        ModalProps={{ onBackdropClick: handleDrawerClose }}
      >
        <Typography variant="h4">Masoudi</Typography>
        <IconButton
          className={classes.cancelButton}
          onClick={handleDrawerClose}
        >
          <CancelIcon />
        </IconButton>
        {props.menuItems.map((menuItem, i) => {
          const { menuTitle, pageURL } = menuItem;
          return <MenuItem key={i}>{menuTitle}</MenuItem>;
        })}
      </Drawer>
    </React.Fragment>
  );
};

export default Mobilenavigation;
