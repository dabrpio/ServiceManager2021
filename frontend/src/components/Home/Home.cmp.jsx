import NavBar from '../NavBar';

import styles from './Home.module.scss';

function Home() {
  return (
    <>
      <NavBar />

      <div className={styles.home}>
        <h1>home</h1>
      </div>
    </>
  );
}

export default Home;
