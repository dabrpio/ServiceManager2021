import { useParams } from 'react-router-dom';
import NavBar from '../../NavBar';
import styles from './Ticket.module.scss';

function Ticket() {
  let { ticketId } = useParams();

  return (
    <>
      <NavBar />
      <div className={styles.ticket}>
        <h3>{ticketId}</h3>
      </div>
    </>
  );
}

export default Ticket;
