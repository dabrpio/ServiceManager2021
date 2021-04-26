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
    repair_cost: null,
    customers_cost: null,
    password: null,
    defect_description: null,
    status: null,
    additional_info: null,
    name: null,
    surname: null,
    email: null,
    phone_number: null,
  });

  const setTicketDropdown = (key, title) => {
    setTicketData({ ...ticketData, [key]: title });
  };

  const setInputTicketData = (key, value) => {
    setTicketData({
      ...ticketData,
      [key]: value,
    });
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
              resetThenSet={setTicketDropdown}
            />
            <Dropdown
              defaultTitle="producent"
              list={brandTypes}
              resetThenSet={setTicketDropdown}
            />
            <Dropdown
              defaultTitle="model"
              list={modelTypes}
              resetThenSet={setTicketDropdown}
            />
            <Dropdown
              defaultTitle="status"
              list={statusTypes}
              resetThenSet={setTicketDropdown}
            />
            <FormInput
              stateValue={ticketData.defect_description}
              resetThenSet={setInputTicketData}
              valueKey="defect_description"
              text="usterka"
              inputType="text"
            />
            <FormInput
              stateValue={ticketData.repair_cost}
              resetThenSet={setInputTicketData}
              valueKey="repair_cost"
              text="koszt części"
              inputType="number"
              min="0"
              inputPattern="[0-9]{1,}"
            />
            <FormInput
              stateValue={ticketData.customers_cost}
              resetThenSet={setInputTicketData}
              valueKey="customers_cost"
              text="koszt naprawy"
              inputType="number"
              min="0"
              inputPattern="[0-9]{1,}"
            />
            <FormInput
              stateValue={ticketData.additional_info}
              resetThenSet={setInputTicketData}
              valueKey="additional_info"
              text="dodatkowe informacje"
              inputType="text"
            />
            <FormInput
              stateValue={ticketData.password}
              resetThenSet={setInputTicketData}
              valueKey="password"
              text="hasło"
              inputType="text"
            />
          </fieldset>
          <fieldset className={styles.form__client_data}>
            <h2 className={styles.heading}>DANE KLIENTA</h2>

            <FormInput
              stateValue={ticketData.name}
              resetThenSet={setInputTicketData}
              valueKey="name"
              text="imię"
              inputType="text"
              inputPattern="[A-Za-z]{1,10}"
            />
            <FormInput
              stateValue={ticketData.surname}
              resetThenSet={setInputTicketData}
              valueKey="surname"
              text="nazwisko"
              inputType="text"
              inputPattern="[A-Za-z]{1,10}"
            />
            <FormInput
              stateValue={ticketData.email}
              resetThenSet={setInputTicketData}
              valueKey="email"
              text="email"
              inputType="email"
            />
            <FormInput
              stateValue={ticketData.phone_number}
              resetThenSet={setInputTicketData}
              valueKey="phone_number"
              text="nr tel."
              inputType="number"
              inputPattern="[0-9]{9}"
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
