import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
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
import { Link } from 'react-router-dom';

const NavBarContent = ({ handleMenuItemClick, classes, pathname }) => {
  return (
    <List>
      <ListItem
        button
        component={Link}
        to="/"
        selected={'/' === pathname}
        onClick={handleMenuItemClick}
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
        selected={'/tickets' === pathname}
        onClick={handleMenuItemClick}
      >
        <ListItemIcon className={classes.listItem}>
          <ViewListRoundedIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Zlecenia</ListItemText>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/employees"
        selected={'/employees' === pathname}
        onClick={handleMenuItemClick}
      >
        <ListItemIcon className={classes.listItem}>
          <RecentActorsRoundedIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Pracownicy</ListItemText>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/settings"
        selected={'/settings' === pathname}
        onClick={handleMenuItemClick}
      >
        <ListItemIcon className={classes.listItem}>
          <SettingsRoundedIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Ustawienia</ListItemText>
      </ListItem>
      <Divider />
      <ListItem
        button
        component={Link}
        to="/login"
        selected={'/login' === pathname}
        onClick={handleMenuItemClick}
      >
        <ListItemIcon className={classes.listItem}>
          <ExitToAppIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText className={classes.text}>Wyloguj</ListItemText>
      </ListItem>
    </List>
  );
};

export default NavBarContent;
