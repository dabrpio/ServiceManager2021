import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useState, useRef } from 'react';

const statusOptions = ['Zrobione', 'W naprawie'];

function DialogTitleButtons({ classes, ticket, setTicket }) {
  const [docsOpen, setDocsOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [selectedStatusIndex, setSelectedStatusIndex] = useState(
    ticket.status === 'zrobione' ? 0 : 1
  );
  const anchorStatusRef = useRef(null);
  const anchorDocsRef = useRef(null);

  const handleWarrantyDocClick = (event) => {
    setDocsOpen(false);
  };
  const handleReceiptDocClick = (event) => {
    setDocsOpen(false);
  };

  const handleStatusClick = (event, index) => {
    setSelectedStatusIndex(index);
    setTicket({ ...ticket, status: index === 0 ? 'zrobione' : 'oczekiwanie' });
    setStatusOpen(false);
  };
  const handleStatusClose = (event) => {
    if (
      anchorStatusRef.current &&
      anchorStatusRef.current.contains(event.target)
    ) {
      return;
    }

    setStatusOpen(false);
  };
  const handleDocsClose = (event) => {
    if (anchorDocsRef.current && anchorDocsRef.current.contains(event.target)) {
      return;
    }

    setDocsOpen(false);
  };

  return (
    <div className={classes.titleButtons}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Button
            onClick={() => setDocsOpen((prevState) => !prevState)}
            ref={anchorDocsRef}
            variant="outlined"
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
                      <MenuItem
                        onClick={(event) => handleReceiptDocClick(event)}
                      >
                        Dokument przyjęcia
                      </MenuItem>
                      <MenuItem
                        onClick={(event) => handleWarrantyDocClick(event)}
                      >
                        Dokument gwarancji
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
      </Grid>

      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <ButtonGroup variant="outlined" color="primary" ref={anchorStatusRef}>
            <Button>{statusOptions[selectedStatusIndex]}</Button>
            <Button
              color="primary"
              size="small"
              onClick={() => setStatusOpen((prevState) => !prevState)}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            open={statusOpen}
            anchorEl={anchorStatusRef.current}
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
                  <ClickAwayListener onClickAway={handleStatusClose}>
                    <MenuList id="split-button-menu">
                      {statusOptions.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedStatusIndex}
                          onClick={(event) => handleStatusClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
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

export default DialogTitleButtons;
