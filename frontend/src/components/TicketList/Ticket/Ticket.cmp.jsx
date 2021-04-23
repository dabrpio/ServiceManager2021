import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../NavBar';
import Dropdown from '../../common/dropdown';
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

  const deviceTypes = [
    { title: 'Samsung', key: 'device_type', id: 1 },
    { title: 'iPhone', key: 'device_type', id: 2 },
    { title: 'Sony', key: 'device_type', id: 3 },
    { title: 'Xiaomi', key: 'device_type', id: 4 },
    { title: 'Hwawei', key: 'device_type', id: 5 },
    { title: 'Motorola', key: 'device_type', id: 6 },
    { title: 'BlackBerry', key: 'device_type', id: 7 },
    { title: 'LG', key: 'device_type', id: 8 },
    { title: 'Nokia', key: 'device_type', id: 9 },
  ];

  return (
    <>
      <NavBar />
      <div className={styles.ticket}>
        <h2 className={styles.heading}>ZLECENIE {ticketId}</h2>
        <Dropdown
          defaultTitle="typ urządzenia"
          list={deviceTypes}
          resetThenSet={resetThenSet}
        />
      </div>
    </>
  );
}

export default Ticket;
