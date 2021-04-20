import { NavLink } from 'react-router-dom';
import {
  BsPlusSquareFill,
  BsFillPersonLinesFill,
  BsFillHouseFill,
  BsFillGearFill,
  BsCardChecklist,
} from 'react-icons/bs';
import styles from './NavBar.module.scss';

function NavBar() {
  const NavBarLink = (props) => {
    return (
      <li className={styles.list__item}>
        <NavLink
          exact
          to={props.to}
          className={styles.list__item__link}
          activeStyle={{ backgroundColor: '#e71d36' }}
        >
          {props.children}
        </NavLink>
      </li>
    );
  };
  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <NavBarLink to="/">
          <BsFillHouseFill />
        </NavBarLink>
        <NavBarLink to="/tickets">
          <BsCardChecklist />
        </NavBarLink>
        <NavBarLink to="/tickets/new">
          <BsPlusSquareFill />
        </NavBarLink>
        <NavBarLink to="/employees">
          <BsFillPersonLinesFill />
        </NavBarLink>
        <NavBarLink to="/settings">
          <BsFillGearFill />
        </NavBarLink>
      </ul>
    </div>
  );
}

export default NavBar;
