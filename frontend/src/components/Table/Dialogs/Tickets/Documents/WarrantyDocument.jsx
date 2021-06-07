import { Image, Page, Text, View, Document } from '@react-pdf/renderer';
import logo from './logo.png';
import { styles } from './styles';

const WarrantyDocument = ({ ticket }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.companyInfo}>
          <View style={[styles.section, { marginRight: 25 }]}>
            <Image src={logo} style={styles.logo} />
          </View>
          <View style={[styles.section, { marginLeft: 25 }]}>
            <Text style={styles.fontMd}>Napraw Mnie</Text>
            <Text style={styles.fontMd}>Grunwaldzka 165b/4a</Text>
            <Text style={styles.fontMd}>60-322 Poznań</Text>
            <Text style={styles.fontMd}>726-196-725</Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={[styles.text, { padding: 2 }]}>
          <Text style={[styles.fontLg, styles.textBold]}>
            RMA - {ticket.rma}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={[styles.text, { padding: 4 }]}>
          <Text style={[styles.fontXl, styles.textBold]}>
            Karta gwarancyjna
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.dates}>
          <View style={styles.dateRow}>
            <View style={[styles.text, { padding: 3 }]}>
              <Text style={[styles.fontMd, styles.textBold]}>
                Data przyjęcia urządzenia:
              </Text>
            </View>
            <View style={styles.verticalLine} />
            <View style={[styles.text, { padding: 3 }]}>
              <Text style={[styles.fontMd, styles.textBold]}>
                {new Date(ticket.dataPrzyjecia).toLocaleDateString('pl')}
              </Text>
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.dateRow}>
            <View style={[styles.text, { padding: 3 }]}>
              <Text style={[styles.fontMd, styles.textBold]}>
                Data wydania urządzenia:
              </Text>
            </View>
            <View style={styles.verticalLine} />
            <View style={[styles.text, { padding: 3 }]}>
              <Text style={[styles.fontMd, styles.textBold]}>
                {new Date(ticket.dataWydania).toLocaleDateString('pl')}
              </Text>
            </View>
          </View>
          <View style={styles.horizontalLine} />
        </View>
        <View style={styles.clientData}>
          <View style={styles.leftDataFields}>
            <Text style={[styles.fontSm, styles.textBold, { padding: 3 }]}>
              Dane klienta:
            </Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>
              Imię i nazwisko:
            </Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>Telefon:</Text>
          </View>
          <View style={styles.rightDataValues}>
            <Text style={[styles.fontSm, styles.invisible, { padding: 3 }]}>
              .
            </Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>
              {ticket.imie} {ticket.nazwisko}
            </Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>{ticket.nrTel}</Text>
          </View>
        </View>
        <View style={styles.clientData}>
          <View style={styles.leftDataFields}>
            <Text style={[styles.fontSm, styles.textBold, { padding: 3 }]}>
              Dane urządzenia:
            </Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>Rodzaj:</Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>Producent:</Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>Model:</Text>
          </View>
          <View style={styles.rightDataValues}>
            <Text style={[styles.fontSm, styles.invisible, { padding: 3 }]}>
              .
            </Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>{ticket.rodzaj}</Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>{ticket.marka}</Text>
            <Text style={[styles.fontSm, { padding: 3 }]}>{ticket.model}</Text>
          </View>
        </View>
        <View style={styles.clientData}>
          <View style={styles.leftDataFields}>
            <Text
              style={[
                styles.fontSm,
                styles.textBold,
                styles.descriptionText,
                { padding: 3 },
              ]}
            >
              Opis usterki:
            </Text>
          </View>
          <View
            style={[styles.rightDataValues, styles.textBox, { height: 45 }]}
          >
            <Text style={[styles.fontMd]}>{ticket.usterka}</Text>
          </View>
        </View>
        <View style={[styles.clientData, { marginTop: 10 }]}>
          <View style={styles.leftDataFields}>
            <Text
              style={[
                styles.fontSm,
                styles.textBold,
                styles.descriptionText,
                { padding: 3 },
              ]}
            >
              Dodatkowe uwagi:
            </Text>
          </View>
          <View
            style={[styles.rightDataValues, styles.textBox, { height: 45 }]}
          >
            <Text style={[styles.fontMd]}>{ticket.informacje}</Text>
          </View>
        </View>
        <View
          style={[styles.text, { marginTop: 15, textDecoration: 'underline' }]}
        >
          <Text style={[styles.fontLg, styles.textBold]}>
            Zapłacona kwota: {ticket.kosztNaprawy} zł
          </Text>
        </View>
        <View style={[styles.text, { marginTop: 5 }]}>
          <Text style={[styles.fontLg, styles.textBold, { fontWeight: 800 }]}>
            Okres gwarancyjny: 3 miesiące
          </Text>
        </View>
        <View style={styles.listText}>
          <Text style={[styles.fontSm, { marginTop: 10 }]}>
            1. Oświadczam, że zapoznałem/am się ze stanem urządzenia po naprawie
            i stwierdzam, że usterki zadeklarowane do naprawy
            {'\n'} zostały usunięte.
          </Text>
        </View>
        <View style={styles.listText}>
          <Text style={styles.fontSm}>
            2. Gwarancja dotyczy jedynie podzespołów oraz napraw wykonanych w
            ramach zgłoszonej przez klienta usterki.
          </Text>
        </View>
        <View style={styles.listText}>
          <Text style={styles.fontSm}>
            3. Gwarancja nie uwzględnia uszkodzeń mechanicznych powstałych po
            wydaniu naprawionego przez serwis urządzenia.
          </Text>
        </View>

        <View style={styles.listText}>
          <Text style={styles.fontSm}>
            4. Gwarancja nie uwzględnia uszkodzeń powstałych w wyniku obecności
            wad ukrytych lub wad niezgłoszonych przez klienta do
            {'\n'} naprawy.
          </Text>
        </View>
        <View style={styles.listText}>
          <Text style={styles.fontSm}>
            5. W czsie trwania okresu gwarancyjnego, w przypdaku uznania
            gwarancji, klient ma prawo do nieodpłatnego usunięcia usterki
            {'\n'} objętej gwarancją.
          </Text>
        </View>
        <View style={styles.listText}>
          <Text style={styles.fontSm}>
            6. Gwarancja może zostać uznana jedynie na podstawie okazania
            niniejszej karty gwarancyjnej z pieczątką serwisu oraz wyraźnymi{' '}
            {'\n'} podpisami serwisanta oraz klienta.
          </Text>
        </View>
        <View style={[styles.signatures, { marginTop: 30 }]}>
          <Text style={[styles.sign, styles.fontSm, { width: '30%' }]}>
            Podpis klienta
          </Text>
          <Text style={[styles.sign, styles.fontSm, { width: '20%' }]}>
            Pieczątka serwisu
          </Text>
          <Text style={[styles.sign, styles.fontSm, { width: '30%' }]}>
            Podpis serwisanta
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default WarrantyDocument;
