import { Link } from 'react-router-dom';
import {
  BsPlusSquareFill,
  BsFillPersonLinesFill,
  BsFillHouseFill,
  BsFillGearFill,
  BsCardChecklist,
} from 'react-icons/bs';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Link to="/" className={styles.list__item__link}>
            <BsFillHouseFill />
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link to="/tickets" className={styles.list__item__link}>
            <BsCardChecklist />
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link to="/tickets/new" className={styles.list__item__link}>
            <BsPlusSquareFill />
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link to="/employees" className={styles.list__item__link}>
            <BsFillPersonLinesFill />
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link to="/settings" className={styles.list__item__link}>
            <BsFillGearFill />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
