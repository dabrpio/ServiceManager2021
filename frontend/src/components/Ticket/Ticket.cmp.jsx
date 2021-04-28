import { useEffect, useState, useReducer } from 'react';
import { useLocation, useParams, withRouter } from 'react-router-dom';
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

const initialTicketState = {
  rodzaj: null,
  marka: null,
  model: null,
  kosztCzesci: null,
  kosztNaprawy: null,
  usterka: null,
  status: null,
  informacje: null,
  imie: null,
  nazwisko: null,
  nrTel: null,
};

function Ticket({ addTicket }) {
  const { ticketId } = useParams();
  const location = useLocation();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [ticketData, setTicketData] = useState(initialTicketState);

  useEffect(() => {
    if (location.state?.ticket) {
      setTicketData(location.state.ticket);
      forceUpdate();
    }
    return () => setTicketData(initialTicketState);
  }, [location]);

  const setTicketDropdown = (key, title) => {
    setTicketData({ ...ticketData, [key]: title });
  };

  const setInputTicketData = (key, value) => {
    setTicketData({
      ...ticketData,
      [key]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ticketId === 'new') {
      if (!Object.values(ticketData).every((e) => e === null)) {
        addTicket(ticketData);
      } else {
        console.log('ticket is not fully filled');
      }
    } else {
      console.log('future update');
    }
  };

  return (
    <>
      <NavBar />
      <div className={styles.ticket}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <fieldset className={styles.form__ticket}>
            <h2 className={styles.heading}>ZLECENIE {ticketId}</h2>
            <Dropdown
              stateValue={ticketData?.rodzaj}
              defaultTitle="typ urządzenia"
              list={deviceTypes}
              resetThenSet={setTicketDropdown}
            />
            <Dropdown
              stateValue={ticketData?.marka}
              defaultTitle="producent"
              list={brandTypes}
              resetThenSet={setTicketDropdown}
            />
            <Dropdown
              stateValue={ticketData?.model}
              defaultTitle="model"
              list={modelTypes}
              resetThenSet={setTicketDropdown}
            />
            <Dropdown
              stateValue={ticketData?.status}
              defaultTitle="status"
              list={statusTypes}
              resetThenSet={setTicketDropdown}
            />
            <FormInput
              stateValue={ticketData?.usterka}
              resetThenSet={setInputTicketData}
              valueKey="usterka"
              text="usterka"
              inputType="text"
            />
            <FormInput
              stateValue={ticketData?.kosztCzesci}
              resetThenSet={setInputTicketData}
              valueKey="kosztCzesci"
              text="koszt części"
              inputType="number"
              min="0"
              inputPattern="[0-9]{1,}"
            />
            <FormInput
              stateValue={ticketData?.kosztNaprawy}
              resetThenSet={setInputTicketData}
              valueKey="kosztNaprawy"
              text="koszt naprawy"
              inputType="number"
              min="0"
              inputPattern="[0-9]{1,}"
            />
            <FormInput
              stateValue={ticketData?.informacje?.trim()}
              resetThenSet={setInputTicketData}
              valueKey="informacje"
              text="dodatkowe informacje"
              inputType="text"
            />
          </fieldset>
          <fieldset className={styles.form__client_data}>
            <h2 className={styles.heading}>DANE KLIENTA</h2>

            <FormInput
              stateValue={ticketData?.imie?.trim()}
              resetThenSet={setInputTicketData}
              valueKey="imie"
              text="imię"
              inputType="text"
              inputPattern="[A-ZĄĆĘŁÓŃŚŹŻa-ząćęłóńśźż]{1,10}"
            />
            <FormInput
              stateValue={ticketData?.nazwisko?.trim()}
              resetThenSet={setInputTicketData}
              valueKey="nazwisko"
              text="nazwisko"
              inputType="text"
              inputPattern="[A-ZĄĆĘŁÓŃŚŹŻa-ząćęłóńśźż]{1,10}"
            />
            {/* <FormInput
              stateValue={ticketData.email}
              resetThenSet={setInputTicketData}
              valueKey="email"
              text="email"
              inputType="email"
            /> */}
            <FormInput
              stateValue={ticketData?.nrTel}
              resetThenSet={setInputTicketData}
              valueKey="nrTel"
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

export default withRouter(Ticket);
