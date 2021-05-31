import { useState } from 'react';

export const useTableCustomHook = (data) => {
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('rma');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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

const useFilter = (data, searchInput) => {
  const regex = new RegExp(`${searchInput}`, 'i');
  if (searchInput === '') return data;
  else
    return data.filter((ticket) =>
      Object.values(ticket).some((value) => `${value}`.match(regex))
    );
};
