import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Mobilenavigation from "./Mobilenavigation";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar:{
    boxShadow: 'none',
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
  menuLink:{
    fontFamily: 'Montserrat',
    textTransform: 'upperCase',
    fontWeight: '700',
    listStyle: 'none',
    padding: '1rem',
    cursor: 'pointer'
  }
}));

const Navigation = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.root}>
      <AppBar position="static" color='transparent' className={classes.navBar}>
          <Container>
        <Toolbar disableGutters={true}>
          <Typography variant="h4" className={classes.title}>
            Masoudi
          </Typography>
          {isMobile ? (
            <>
              <Mobilenavigation menuItems={props.menuItems} />
            </>
          ) : (
            <div className={classes.headerOptions}>
              {props.menuItems.map((menuItem, i) => {
                const { menuTitle, pageURL } = menuItem;
                return <MenuItem class={classes.menuLink} key={i}>{menuTitle}</MenuItem>;
              })}
            </div>
          )}
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navigation;
