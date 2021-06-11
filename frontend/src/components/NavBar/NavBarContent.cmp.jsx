import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import RecentActorsRoundedIcon from '@material-ui/icons/RecentActorsRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import DevicesOtherRoundedIcon from '@material-ui/icons/DevicesOtherRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import WorkOutlineRoundedIcon from '@material-ui/icons/WorkOutlineRounded';
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
    <List classes={{ root: classes.list }}>
      <div className={classes.main}>
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
        >
          <ListItemIcon className={classes.listItem}>
            <DevicesOtherRoundedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Urządzenia</ListItemText>
        </ListItem>
        <ListItem
          // classes={{root: classes.listItem}}
          button
          component={Link}
          to="/employees"
          selected={'/employees' === pathname}
          onClick={handleMenuItemClick}
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
          onClick={handleMenuItemClick}
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

export default NavBarContent;
