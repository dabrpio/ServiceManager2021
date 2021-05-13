import { useState } from 'react';
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme,
} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import NavBarContent from './NavBarContent.cmp';
import { useStyles } from './styles';

function NavBar() {
  const [title, setTitle] = useState('SM21');
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const theme = unstable_createMuiStrictModeTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuItemClick = (title) => {
    setTitle(title);
    setMobileOpen(false);
  };

  return (
    <div className={classes.root}>
      <Hidden smUp implementation="css">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Hidden>

      <nav className={classes.drawer}>
        <ThemeProvider theme={theme}>
          <Hidden smDown implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <Toolbar>
                <IconButton
                  onClick={handleDrawerToggle}
                  className={classes.closeMenuButton}
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
              <NavBarContent handleMenuItemClick={handleMenuItemClick} />
            </Drawer>
          </Hidden>
        </ThemeProvider>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <NavBarContent handleMenuItemClick={handleMenuItemClick} />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default NavBar;
