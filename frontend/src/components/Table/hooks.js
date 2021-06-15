import { useState } from 'react';

export const useTableCustomHook = (data) => {
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('undefined');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [searchInput, setSearchInput] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const filteredData = useFilter(data, searchInput);

  return {
    order,
    setOrder,
    orderBy,
    setOrderBy,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    searchInput,
    setSearchInput,
    selectedRowData,
    setSelectedRowData,
    filteredData,
  };
};

const escapeRegExp = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

const useFilter = (data, searchInput) => {
  if (searchInput === '') return data;

  searchInput = escapeRegExp(searchInput);
  const regex = new RegExp(`${searchInput}`, 'i');
  if (Object.keys(data[0]).includes('rma')) return filterTickets(data, regex);
  else
    return data.filter((element) => {
      return Object.values(element).some((value) => `${value}`.match(regex));
    });
};

const filterTickets = (data, regex) => {
  return data.filter((ticket) => {
    const {
      dataPrzyjecia,
      dataWydania,
      idKlienta,
      informacje,
      kosztCzesci,
      kosztNaprawy,
      ...dataToFilter
    } = ticket;
    return Object.values(dataToFilter).some((value) => `${value}`.match(regex));
  });
};
