import NavBar from '../NavBar';
import styles from './Settings.module.scss';

function Settings() {
  return (
    <>
      <NavBar />
      <div className={styles.settings}>
        <h2>Settings</h2>
      </div>
    </>
  );
}

export default Settings;
