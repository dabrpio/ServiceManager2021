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
import { selectUserType } from '../../store/auth/auth.selectors';

const routes = [
  '/',
  '/stats',
  '/tickets',
  '/clients',
  '/devices',
  '/employees',
  '/settings',
  '/login',
];

const linksData = [
  { path: routes[0], label: 'Home' },
  { path: routes[1], label: 'Statystyki' },
  { path: routes[2], label: 'Zlecenia' },
  { path: routes[3], label: 'Klienci' },
  { path: routes[4], label: 'Urządzenia' },
  { path: routes[5], label: 'Pracownicy' },
  { path: routes[6], label: 'Ustawienia' },
];

const RenderIcon = ({ path, iconProps }) => {
  switch (path) {
    case routes[0]:
      return <HomeRoundedIcon {...iconProps} />;
    case routes[1]:
      return <AssessmentIcon {...iconProps} />;
    case routes[2]:
      return <ListAltRoundedIcon {...iconProps} />;
    case routes[3]:
      return <RecentActorsRoundedIcon {...iconProps} />;
    case routes[4]:
      return <DevicesOtherRoundedIcon {...iconProps} />;
    case routes[5]:
      return <WorkOutlineRoundedIcon {...iconProps} />;
    case routes[6]:
      return <SettingsRoundedIcon {...iconProps} />;
    case routes[7]:
      return <ExitToAppIcon {...iconProps} />;
    default:
      return null;
  }
};

const NavBarLink = ({
  path,
  label,
  handleMenuItemClick,
  classes,
  pathname,
}) => {
  return (
    <ListItem
      button
      component={Link}
      to={path}
      selected={path === pathname}
      onClick={handleMenuItemClick}
      classes={{ root: classes.listItemWrapper }}
    >
      <ListItemIcon className={classes.listItem}>
        <RenderIcon path={path} iconProps={{ className: classes.icon }} />
      </ListItemIcon>
      <ListItemText className={classes.text}>{label}</ListItemText>
    </ListItem>
  );
};

const NavBarContent = ({
  handleMenuItemClick,
  classes,
  pathname,
  logout,
  userType,
}) => {
  const prepareLinks = () => {
    switch (userType) {
      case 1:
        return linksData;
      case 2:
        return linksData;
      case 3:
        return linksData[3];
      case 4: {
        return linksData.filter((l) => l.path !== routes[1]);
      }
    }
  };

  return (
    <List classes={{ root: classes.list }}>
      <div className={classes.main}>
        {prepareLinks().map((item) => (
          <NavBarLink
            key={item.label}
            path={item.path}
            label={item.label}
            handleMenuItemClick={handleMenuItemClick}
            classes={classes}
            pathname={pathname}
          />
        ))}
      </div>
      <div className={classes.logout}>
        <Divider />
        <NavBarLink
          path="/login"
          label="Wyloguj"
          handleMenuItemClick={logout}
          classes={classes}
          pathname={pathname}
        />
      </div>
    </List>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userType: selectUserType(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContent);
