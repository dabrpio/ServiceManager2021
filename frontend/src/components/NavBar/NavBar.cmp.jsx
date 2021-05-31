import { useState } from 'react';
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import NavBarContent from './NavBarContent.cmp';
import { useStyles } from './styles';
import { useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuItemClick = () => {
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
              Service Manager 2021
            </Typography>
          </Toolbar>
        </AppBar>
      </Hidden>

      <nav className={classes.drawer}>
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
            <NavBarContent
              handleMenuItemClick={handleMenuItemClick}
              classes={classes}
              pathname={location.pathname}
            />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <NavBarContent
              handleMenuItemClick={handleMenuItemClick}
              classes={classes}
              pathname={location.pathname}
            />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default NavBar;
