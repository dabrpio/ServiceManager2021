import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DevicesOtherRoundedIcon from '@material-ui/icons/DevicesOtherRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import RecentActorsRoundedIcon from '@material-ui/icons/RecentActorsRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import WorkOutlineRoundedIcon from '@material-ui/icons/WorkOutlineRounded';
import AssessmentIcon from '@material-ui/icons/Assessment';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/auth/auth.actions';

const NavBarContent = ({ handleMenuItemClick, classes, pathname, logout }) => {
  return (
    <List classes={{ root: classes.list }}>
      <div className={classes.main}>
        <ListItem
          button
          component={Link}
          to="/"
          selected={'/' === pathname}
          onClick={handleMenuItemClick}
          classes={{ root: classes.listItemWrapper }}
        >
          <ListItemIcon className={classes.listItem}>
            <HomeRoundedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Home</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/stats"
          selected={'/stats' === pathname}
          onClick={handleMenuItemClick}
          classes={{ root: classes.listItemWrapper }}
        >
          <ListItemIcon className={classes.listItem}>
            <AssessmentIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Statystyki</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/tickets"
          selected={'/tickets' === pathname}
          onClick={handleMenuItemClick}
          classes={{ root: classes.listItemWrapper }}
        >
          <ListItemIcon className={classes.listItem}>
            <ListAltRoundedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Zlecenia</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/clients"
          selected={'/clients' === pathname}
          onClick={handleMenuItemClick}
          classes={{ root: classes.listItemWrapper }}
        >
          <ListItemIcon className={classes.listItem}>
            <RecentActorsRoundedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Klienci</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/devices"
          selected={'/devices' === pathname}
          onClick={handleMenuItemClick}
          classes={{ root: classes.listItemWrapper }}
        >
          <ListItemIcon className={classes.listItem}>
            <DevicesOtherRoundedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Urządzenia</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/employees"
          selected={'/employees' === pathname}
          onClick={handleMenuItemClick}
          classes={{ root: classes.listItemWrapper }}
        >
          <ListItemIcon className={classes.listItem}>
            <WorkOutlineRoundedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Pracownicy</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/settings"
          selected={'/settings' === pathname}
          onClick={handleMenuItemClick}
          classes={{ root: classes.listItemWrapper }}
        >
          <ListItemIcon className={classes.listItem}>
            <SettingsRoundedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Ustawienia</ListItemText>
        </ListItem>
      </div>
      <div className={classes.logout}>
        <Divider />
        <ListItem
          button
          component={Link}
          to="/login"
          selected={'/login' === pathname}
          onClick={logout}
          classes={{ root: classes.listItemWrapper }}
        >
          <ListItemIcon className={classes.listItem}>
            <ExitToAppIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Wyloguj</ListItemText>
        </ListItem>
      </div>
    </List>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(NavBarContent);
