import { useHistory, useRouteMatch } from 'react-router-dom';
import NavBar from '../NavBar';
import styles from './TicketList.module.scss';

function TicketList() {
  let { url } = useRouteMatch();
  const history = useHistory();

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

  const handleClick = (id) => {
    history.push(`${url}/${id}`);
  };

  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <table className={styles.ticket_table}>
          <thead className={styles.ticket_table__head}>
            <tr className={styles.ticket_table__head__row}>
              <th className={styles.header}>RMA</th>
              <th className={styles.header}>data</th>
              <th className={styles.header}>status</th>
              <th className={styles.header}>rodzaj</th>
              <th className={styles.header}>koszt</th>
            </tr>
          </thead>
          <tbody className={styles.ticket_table__body}>
            {temporaryTicketList.map((element) => (
              <tr
                className={styles.ticket_table__body__row}
                key={element.RMA}
                onClick={() => handleClick(element.RMA)}
              >
                <td className={styles.data}>{element.RMA}</td>
                <td className={styles.data}>{element.data_przyjecia}</td>
                <td className={styles.data}>{element.status}</td>
                <td className={styles.data}>{element.rodzaj}</td>
                <td className={styles.data}>{element.koszt_naprawy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TicketList;
