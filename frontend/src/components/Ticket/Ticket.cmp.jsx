import { useEffect, useState, useReducer } from 'react';
import { Box, Typography } from '@material-ui/core';
import {
  useHistory,
  useLocation,
  useParams,
  withRouter,
} from 'react-router-dom';
import {
  deviceTypes,
  brandTypes,
  modelTypes,
  statusTypes,
} from '../../common/dropdownOptions';
import Dropdown from '../Dropdown';
import FormButton from '../FormButton';
import FormInput from '../FormInput';
import { useStyles } from './styles';

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
  const classes = useStyles();
  const { ticketId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [ticketData, setTicketData] = useState(initialTicketState);

  useEffect(() => {
    if (location.state?.ticket) {
      setTicketData(location.state.ticket);
      forceUpdate();
    }
    return () => setTicketData(initialTicketState);
  }, [location]);

  const setInputTicketData = (key, value) => {
    setTicketData({
      ...ticketData,
      [key]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ticketId === 'new') {
      if (!Object.values(ticketData).every((e) => e === null || e === '')) {
        addTicket(ticketData);
        history.push('/tickets');
      } else {
        console.log('ticket is not fully filled');
      }
    } else {
      console.log('future update');
    }
  };

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Typography component="h3" className={classes.heading}>
          {ticketId === 'new' ? `Nowe zlecenie` : `Zlecenie ${ticketId}`}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.form__info}>
            <Typography variant="h5" className={classes.form__heading}>
              INFORMACJE
            </Typography>
            <Dropdown
              stateValue={ticketData?.rodzaj}
              defaultTitle="typ urządzenia"
              list={deviceTypes}
              setSelected={(selected) =>
                setTicketData({ ...ticketData, rodzaj: selected })
              }
            />
            <Dropdown
              stateValue={ticketData?.marka}
              defaultTitle="producent"
              list={brandTypes}
              setSelected={(selected) =>
                setTicketData({ ...ticketData, marka: selected })
              }
            />
            <Dropdown
              stateValue={ticketData?.model}
              defaultTitle="model"
              list={modelTypes}
              setSelected={(selected) =>
                setTicketData({ ...ticketData, model: selected })
              }
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
            />
            <FormInput
              stateValue={ticketData?.kosztNaprawy}
              resetThenSet={setInputTicketData}
              valueKey="kosztNaprawy"
              text="koszt naprawy"
              inputType="number"
            />
            <FormInput
              stateValue={ticketData?.informacje}
              resetThenSet={setInputTicketData}
              valueKey="informacje"
              text="dodatkowe informacje"
              inputType="text"
            />
          </div>
          <div className={classes.form__client}>
            <Typography variant="h5" className={classes.form__heading}>
              DANE KLIENTA
            </Typography>

            <FormInput
              stateValue={ticketData?.imie}
              resetThenSet={setInputTicketData}
              valueKey="imie"
              text="imię"
              inputType="text"
            />
            <FormInput
              stateValue={ticketData?.nazwisko}
              resetThenSet={setInputTicketData}
              valueKey="nazwisko"
              text="nazwisko"
              inputType="text"
            />
            <FormInput
              stateValue={ticketData?.nrTel}
              resetThenSet={setInputTicketData}
              valueKey="nrTel"
              text="nr tel."
              inputType="number"
            />
          </div>
          <div className={classes.button_section}>
            <FormButton text="ZAPISZ" color_dark={true} inputType="submit" />

            <FormButton
              text="DOKUMENT"
              color_bright={true}
              inputType="button"
            />
            <FormButton
              text="GWARANCJA"
              color_bright={true}
              inputType="button"
            />
          </div>
        </form>
      </Box>
    </div>
  );
}

export default withRouter(Ticket);
