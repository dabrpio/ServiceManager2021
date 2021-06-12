import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useState, useRef } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReceiptDocument from './Documents/ReceiptDocument';
import WarrantyDocument from './Documents/WarrantyDocument';

function DocsButton({ classes, ticket }) {
  const [docsOpen, setDocsOpen] = useState(false);
  const anchorDocsRef = useRef(null);

  const handleDocsClose = (event) => {
    if (anchorDocsRef.current && anchorDocsRef.current.contains(event.target)) {
      return;
    }

    setDocsOpen(false);
  };

  return (
    <div className={classes.titleActions}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Button
            onClick={() => setDocsOpen((prevState) => !prevState)}
            ref={anchorDocsRef}
            color="primary"
            endIcon={docsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          >
            Dokument
          </Button>
          <Popper
            open={docsOpen}
            anchorEl={anchorDocsRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleDocsClose}>
                    <MenuList>
                      <MenuItem>
                        <PDFDownloadLink
                          document={<ReceiptDocument ticket={ticket} />}
                          fileName={`dokument_przyjęcia_${ticket.rma}`}
                          className={classes.downloadLink}
                        >
                          {({ loading }) =>
                            loading
                              ? 'Ładownie dokumentu...'
                              : 'Dokument przyjęcia'
                          }
                        </PDFDownloadLink>
                      </MenuItem>
                      {ticket.dataWydania && (
                        <MenuItem>
                          <PDFDownloadLink
                            document={<WarrantyDocument ticket={ticket} />}
                            fileName={`dokument_gwarancji_${ticket.rma}`}
                            className={classes.downloadLink}
                          >
                            {({ loading }) =>
                              loading
                                ? 'Ładownie dokumentu...'
                                : 'Dokument gwarancji'
                            }
                          </PDFDownloadLink>
                        </MenuItem>
                      )}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
      </Grid>
    </div>
  );
}

export default DocsButton;
