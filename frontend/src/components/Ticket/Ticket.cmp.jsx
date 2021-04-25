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
import FormButton from '../FormButton';
import FormInput from '../FormInput';
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
  });

  const [clientData, setClientData] = useState({
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
            <FormInput
              stateValue={ticketData}
              setValue={setTicketData}
              valueKey="cost"
              text="koszt"
              inputType="number"
              min="0"
              pattern={new RegExp('[0-9]{1,}')}
            />
            <FormInput
              stateValue={ticketData}
              setValue={setTicketData}
              valueKey="additional_info"
              text="dodatkowe informacje"
              inputType="text"
            />
            <FormInput
              stateValue={ticketData}
              setValue={setTicketData}
              valueKey="password"
              text="hasło"
              inputType="text"
            />
          </fieldset>
          <fieldset className={styles.form__client_data}>
            <h2 className={styles.heading}>DANE KLIENTA</h2>

            <FormInput
              stateValue={clientData}
              setValue={setClientData}
              valueKey="name"
              text="imię"
              inputType="text"
            />
            <FormInput
              stateValue={clientData}
              setValue={setClientData}
              valueKey="surname"
              text="nazwisko"
              inputType="text"
            />
            <FormInput
              stateValue={clientData}
              setValue={setClientData}
              valueKey="email"
              text="email"
              inputType="email"
            />
            <FormInput
              stateValue={clientData}
              setValue={setClientData}
              valueKey="phone_number"
              text="nr tel."
              inputType="number"
            />
          </fieldset>
          <div className={styles.button_section}>
            <FormButton text="ZAPISZ" color_dark={true} />
            <FormButton text="DOKUMENT" color_bright={true} />
            <FormButton text="GWARANCJA" color_bright={true} />
          </div>
        </form>
      </div>
    </>
  );
}

export default Ticket;
