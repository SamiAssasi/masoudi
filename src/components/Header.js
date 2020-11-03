import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const navLinks = [
  { title: `Page 1`, path: `/1` },
  { title: `Page 2`, path: `/2` },
  { title: `Page 3`, path: `/3` },
  { title: `Page 4`, path: `/4` },
  { title: `Page 5`, path: `/5` },
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
