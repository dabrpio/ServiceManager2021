import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: '36 56',
  },
  section: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyInfo: {
    height: 110,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: '140px',
  },
  text: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  clientData: {
    display: 'flex',
    flexDirection: 'row',
    heigth: 100,
    marginTop: 20,
  },
  leftDataFields: {
    display: 'flex',
    alignItems: 'stretch',
    width: '20%',
    height: '100%',
  },
  rightDataValues: {
    display: 'flex',
    alignItems: 'stretch',
    width: '80%',
    height: '100%',
  },
  horizontalLine: {
    height: '1.5px',
    width: '100%',
    backgroundColor: '#000000',
  },
  verticalLine: {
    height: '100%',
    width: '2px',
    backgroundColor: '#000000',
  },
  invisible: {
    opacity: 0,
  },
  textBox: {
    padding: 4,
    border: '1px solid #000000',
  },
  listText: {
    width: '100%',
    margin: '5 0',
  },
  signatures: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sign: {
    padding: 4,
    textAlign: 'center',
    borderTop: '1.5px solid #000000',
  },
  fontSm: { fontSize: '8.5px' },
  fontMd: { fontSize: '11.5px' },
  fontLg: { fontSize: '16px' },
  fontXl: { fontSize: '19.5px' },
  textBold: { fontWeight: 800 },
});
