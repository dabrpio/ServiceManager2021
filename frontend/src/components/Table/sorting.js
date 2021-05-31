export const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

export const getComparator = (order, orderBy) => {
  if (orderBy === 'dataPrzyjecia') {
    return order === 'desc'
      ? (a, b) => descendingDateComparator(a, b, orderBy)
      : (a, b) => -descendingDateComparator(a, b, orderBy);
  } else if (
    orderBy === 'rma' ||
    (orderBy === 'kosztNaprawy') | (orderBy === 'idKlienta')
  ) {
    return order === 'desc'
      ? (a, b) => descendingNumberComparator(a, b, orderBy)
      : (a, b) => -descendingNumberComparator(a, b, orderBy);
  } else {
    return order === 'desc'
      ? (a, b) => descendingStringComparator(a, b, orderBy)
      : (a, b) => -descendingStringComparator(a, b, orderBy);
  }
};

const descendingStringComparator = (a, b, orderBy) => {
  if (`${a[orderBy]}`.toUpperCase() > `${b[orderBy]}`.toUpperCase()) {
    return -1;
  }
  if (`${a[orderBy]}`.toUpperCase() < `${b[orderBy]}`.toUpperCase()) {
    return 1;
  }
  return 0;
};

const descendingNumberComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const descendingDateComparator = (a, b, orderBy) => {
  if (new Date(b[orderBy]) < new Date(a[orderBy])) {
    return -1;
  }
  if (new Date(b[orderBy]) > new Date(a[orderBy])) {
    return 1;
  }
  return 0;
};
