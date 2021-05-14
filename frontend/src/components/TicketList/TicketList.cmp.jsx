import { useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { FaTools, FaCheck } from 'react-icons/fa';
import { DataGrid } from '@material-ui/data-grid';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

function TicketList({ tickets }) {
  const { url } = useRouteMatch();
  const history = useHistory();
  const classes = useStyles();

  const handleClick = (id) => {
    history.push({
      pathname: `${url}/${id}`,
      state: {
        ...history.state,
        ticket: tickets.find((t) => t.rma === id),
      },
    });
  };

  const columns = [
    { field: 'id', headerName: 'RMA', width: 110 },
    {
      field: 'dataPrzyjecia',
      headerName: 'data',
      width: 110,
    },
    { field: 'marka', headerName: 'marka', width: 100 },
    {
      field: 'model',
      headerName: 'model',
      width: 120,
    },
    {
      field: 'status',
      headerName: 'status',
      width: 110,
    },
  ];

  useEffect(() => {}, [tickets]);

  return (
    <div className={classes.root}>
      <Box className={classes.tickets_wrapper}>
        <div style={{ height: '80vh', width: '100%' }}>
          <DataGrid
            rows={tickets.map(
              ({ marka, dataPrzyjecia, model, status, rma }) => ({
                id: rma,
                dataPrzyjecia: new Date(dataPrzyjecia).toLocaleDateString('pl'),
                marka,
                model,
                status,
              })
            )}
            columns={columns}
            pageSize={7}
            checkboxSelection
            // autoHeight
          />
        </div>
      </Box>
    </div>
  );
}

export default TicketList;
