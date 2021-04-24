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
        <form className={styles.form}>
          <fieldset className={styles.form__ticket}>
            <h2 className={styles.heading}>ZLECENIE {ticketId}</h2>
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
            <TicketInput
              ticketData={ticketData}
              setTicketData={setTicketData}
              valueType="cost"
              text="koszt"
              inputType="number"
              min="0"
              pattern={new RegExp('[0-9]{1,}')}
            />
            <TicketInput
              ticketData={ticketData}
              setTicketData={setTicketData}
              valueType="additional_info"
              text="dodatkowe informacje"
              inputType="text"
            />
            <TicketInput
              ticketData={ticketData}
              setTicketData={setTicketData}
              valueType="password"
              text="hasło"
              inputType="text"
            />
          </fieldset>
          <fieldset className={styles.form__client_data}>
            <h2 className={styles.heading}>DANE KLIENTA</h2>

            <TicketInput
              ticketData={ticketData}
              setTicketData={setTicketData}
              valueType="name"
              text="imię"
              inputType="text"
            />
            <TicketInput
              ticketData={ticketData}
              setTicketData={setTicketData}
              valueType="surname"
              text="nazwisko"
              inputType="text"
            />
            <TicketInput
              ticketData={ticketData}
              setTicketData={setTicketData}
              valueType="email"
              text="email"
              inputType="email"
            />
            <TicketInput
              ticketData={ticketData}
              setTicketData={setTicketData}
              valueType="phone_number"
              text="nr tel."
              inputType="number"
            />
          </fieldset>
        </form>
      </div>
    </>
  );
}

const TicketInput = (props) => {
  const {
    ticketData,
    setTicketData,
    valueType,
    text,
    inputType,
    min,
    pattern,
  } = props;
  return (
    <input
      className={styles.input}
      type={inputType}
      pattern={pattern}
      min={min}
      value={ticketData[valueType] ?? ''}
      onChange={(event) =>
        setTicketData({
          ...ticketData,
          [valueType]: event.target.value,
        })
      }
      placeholder={text}
    />
  );
};

export default Ticket;
