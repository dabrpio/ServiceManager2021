import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import RecentActorsRoundedIcon from '@material-ui/icons/RecentActorsRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

const NavBarContent = ({ handleMenuItemClick, classes }) => {
  const location = useLocation();
  return (
    <List>
      <ListItem
        button
        component={Link}
        to="/"
        selected={'/' === location.pathname}
        onClick={() => handleMenuItemClick('SM21')}
      >
        <ListItemIcon className={classes.listItem}>
          <HomeRoundedIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Home</ListItemText>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/tickets"
        selected={'/tickets' === location.pathname}
        onClick={() => handleMenuItemClick('Tickets')}
      >
        <ListItemIcon className={classes.listItem}>
          <ViewListRoundedIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Tickets</ListItemText>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/employees"
        selected={'/employees' === location.pathname}
        onClick={() => handleMenuItemClick('Employees')}
      >
        <ListItemIcon className={classes.listItem}>
          <RecentActorsRoundedIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Employees</ListItemText>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/settings"
        selected={'/settings' === location.pathname}
        onClick={() => handleMenuItemClick('Settings')}
      >
        <ListItemIcon className={classes.listItem}>
          <SettingsRoundedIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Settings</ListItemText>
      </ListItem>
      <Divider />
      <ListItem
        button
        component={Link}
        to="/login"
        selected={'/login' === location.pathname}
        onClick={() => handleMenuItemClick('Login')}
      >
        <ListItemIcon className={classes.listItem}>
          <ExitToAppIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Logout</ListItemText>
      </ListItem>
    </List>
  );
};

export default NavBarContent;
