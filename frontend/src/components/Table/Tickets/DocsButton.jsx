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

function DocsButton({ classes }) {
  const [docsOpen, setDocsOpen] = useState(false);
  const anchorDocsRef = useRef(null);

  const handleWarrantyDocClick = (event) => {
    setDocsOpen(false);
  };
  const handleReceiptDocClick = (event) => {
    setDocsOpen(false);
  };

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
    </div>
  );
}

export default DocsButton;
