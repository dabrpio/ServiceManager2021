import { useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import classnames from 'classnames';
import NavBar from '../NavBar';
import styles from './TicketList.module.scss';

function TicketList({ tickets }) {
  let { url } = useRouteMatch();
  const history = useHistory();

  const handleClick = (id) => {
    history.push({
      pathname: `${url}/${id}`,
      state: {
        ...history.state,
        ticket: tickets.find((t) => t.rma === id),
      },
    });
  };

  useEffect(() => {}, [tickets]);

  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <table className={styles.ticket_table}>
          <thead className={styles.ticket_table__head}>
            <tr className={styles.ticket_table__head__row}>
              <th className={styles.header}>RMA</th>
              <th
                className={classnames(styles.header, styles.media_wide__date)}
              >
                data
              </th>
              <th
                className={classnames(styles.header, styles.media_wide__kind)}
              >
                rodzaj
              </th>
              <th className={styles.header}>marka</th>
              <th className={styles.header}>model</th>
              <th className={styles.header}>koszt</th>
              <th className={styles.header}>status</th>
            </tr>
          </thead>
          <tbody className={styles.ticket_table__body}>
            {tickets.length &&
              tickets.map((element) => (
                <tr
                  className={styles.ticket_table__body__row}
                  key={element.rma}
                  onClick={() => handleClick(element.rma)}
                >
                  <td className={styles.data}>{element.rma}</td>
                  <td
                    className={classnames(styles.data, styles.media_wide__date)}
                  >
                    {element.dataPrzyjecia}
                  </td>
                  <td
                    className={classnames(styles.data, styles.media_wide__kind)}
                  >
                    {element.rodzaj}
                  </td>
                  <td className={styles.data}>{element.marka}</td>
                  <td className={styles.data}>{element.model}</td>
                  <td className={styles.data}>{element.kosztNaprawy}</td>
                  <td className={styles.data}>{element.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TicketList;
