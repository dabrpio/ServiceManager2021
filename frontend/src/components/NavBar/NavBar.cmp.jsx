import styles from './NavBar.module.scss';

function NavBar() {
  //TODO: replace h1 with icons
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li>
          <h1 className={styles.name}>SM21</h1>
        </li>
        <li className={styles.navbar__list__item}>
          <h1>Home</h1>
        </li>
        <li className={styles.navbar__list__item}>
          <h1>Tickets</h1>
        </li>
        <li className={styles.navbar__list__item}>
          <h1>New</h1>
        </li>
        <li className={styles.navbar__list__item}>
          <h1>Settings</h1>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
