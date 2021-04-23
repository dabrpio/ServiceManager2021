import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  deviceTypes,
  brandTypes,
  modelTypes,
  statusTypes,
} from '../../common/dropdownOptions';
import NavBar from '../NavBar';
import Dropdown from '../Dropdown';
import styles from './Ticket.module.scss';

function Ticket() {
  let { ticketId } = useParams();

  const [ticketData, setTicketData] = useState({
    device_type: null,
    brand: null,
    model: null,
    cost: null,
    password: null,
    status: null,
    additional_info: null,
    name: null,
    surname: null,
    email: null,
    phone_number: null,
  });

  const resetThenSet = (key, title) => {
    setTicketData({ ...ticketData, [key]: title });
  };

  return (
    <>
      <NavBar />
      <div className={styles.ticket}>
        <h2 className={styles.heading}>ZLECENIE {ticketId}</h2>
        <form className={styles.form}>
          <Dropdown
            defaultTitle="typ urządzenia"
            list={deviceTypes}
            resetThenSet={resetThenSet}
          />
          <Dropdown
            defaultTitle="producent"
            list={brandTypes}
            resetThenSet={resetThenSet}
          />
          <Dropdown
            defaultTitle="model"
            list={modelTypes}
            resetThenSet={resetThenSet}
          />
          <Dropdown
            defaultTitle="status"
            list={statusTypes}
            resetThenSet={resetThenSet}
          />
        </form>
      </div>
    </>
  );
}

export default Ticket;
