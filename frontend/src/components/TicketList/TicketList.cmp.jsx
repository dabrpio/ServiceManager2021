import { Link, useRouteMatch } from 'react-router-dom';
import NavBar from '../NavBar';
import styles from './TicketList.module.scss';

function TicketList() {
  let { url } = useRouteMatch();

  const temporaryTicketList = [
    {
      RMA: 1,
      imie: 'lorem',
      nazwisko: 'ipsum',
      nr_tel: 123456789,
      data_przyjecia: 'data',
      rodzaj: 'telefon',
      marka: 'iPhone',
      model: '5s',
      usterka: 'zepsuta bateria',
      status: 'do naprawy',
      koszt_naprawy: 200,
      koszt_czesci: 100,
      informacje: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      RMA: 2,
      imie: 'lorem',
      nazwisko: 'ipsum',
      nr_tel: 123456789,
      data_przyjecia: 'data',
      rodzaj: 'telefon',
      marka: 'iPhone',
      model: '5s',
      usterka: 'zepsuta bateria',
      status: 'do naprawy',
      koszt_naprawy: 200,
      koszt_czesci: 100,
      informacje: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      RMA: 3,
      imie: 'lorem',
      nazwisko: 'ipsum',
      nr_tel: 123456789,
      data_przyjecia: 'data',
      rodzaj: 'telefon',
      marka: 'iPhone',
      model: '5s',
      usterka: 'zepsuta bateria',
      status: 'do naprawy',
      koszt_naprawy: 200,
      koszt_czesci: 100,
      informacje: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      RMA: 4,
      imie: 'lorem',
      nazwisko: 'ipsum',
      nr_tel: 123456789,
      data_przyjecia: 'data',
      rodzaj: 'telefon',
      marka: 'iPhone',
      model: '5s',
      usterka: 'zepsuta bateria',
      status: 'do naprawy',
      koszt_naprawy: 200,
      koszt_czesci: 100,
      informacje: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      RMA: 5,
      imie: 'lorem',
      nazwisko: 'ipsum',
      nr_tel: 123456789,
      data_przyjecia: 'data',
      rodzaj: 'telefon',
      marka: 'iPhone',
      model: '5s',
      usterka: 'zepsuta bateria',
      status: 'do naprawy',
      koszt_naprawy: 200,
      koszt_czesci: 100,
      informacje: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    },
  ];

  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <ul className={styles.ticket_list}>
          <li className={styles.ticket_list__item}>
            <div className={styles.col_names}>
              <p>RMA</p>
              <p>data</p>
              <p>status</p>
              <p>rodzaj</p>
              <p>koszt</p>
            </div>
          </li>
          {temporaryTicketList.map((element) => (
            <li className={styles.ticket_list__item} key={element.RMA}>
              <Link to={`${url}/${element.RMA}`} className={styles.link}>
                <p>{element.RMA}</p>
                <p>{element.data_przyjecia}</p>
                <p>{element.status}</p>
                <p>{element.rodzaj}</p>
                <p>{element.koszt_naprawy}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TicketList;
