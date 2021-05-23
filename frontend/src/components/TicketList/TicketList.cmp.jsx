import { useEffect } from 'react';
import EnhancedTable from './Table/EnhancedTable';

export default function TicketList({ tickets }) {
  useEffect(() => {
    console.log(tickets);
  }, [tickets]);
  return (
    <EnhancedTable />
    // <div className={classes.root}>
    //    <Paper className={classes.table_wrapper}>

    //    <VirtualizedTable
    //       rowCount={tickets.length}
    //       rowGetter={({ index }) =>
    //         tickets.map(
    //           ({
    //             marka,
    //             dataPrzyjecia,
    //             rodzaj,
    //             model,
    //             status,
    //             kosztNaprawy,
    //             nazwisko,
    //             rma,
    //           }) => ({
    //             rma,
    //             dataPrzyjecia: new Date(dataPrzyjecia).toLocaleDateString('pl'),
    //             rodzaj,
    //             marka,
    //             model,
    //             kosztNaprawy,
    //             nazwisko,
    //             status,
    //           })
    //         )[index]
    //       }
    //       columns={[
    //         { dataKey: 'rma', label: 'RMA', width: 110 },
    //         {
    //           dataKey: 'dataPrzyjecia',
    //           label: 'data',
    //           width: 110,
    //         },
    //         {
    //           dataKey: 'rodzaj',
    //           label: 'typ',
    //           width: 110,
    //         },
    //         { dataKey: 'marka', label: 'marka', width: 120 },
    //         {
    //           dataKey: 'model',
    //           label: 'model',
    //           width: 130,
    //         },
    //         {
    //           dataKey: 'kosztNaprawy',
    //           label: 'koszt',
    //           width: 120,
    //         },
    //         {
    //           dataKey: 'nazwisko',
    //           label: 'nazwisko',
    //           width: 120,
    //         },
    //         {
    //           dataKey: 'status',
    //           label: 'status',
    //           width: 110,
    //         },
    //       ]}
    //     />
    //    </Paper>
    // </div>
  );
}
