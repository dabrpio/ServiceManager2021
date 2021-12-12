import { useEffect, useState } from 'react';

const escapeRegExp = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

const ticketStateFilter = {
  0: 'created',
  1: 'cost_approval',
  2: 'accepted',
  3: 'done',
  4: 'rejected',
};

export const useFilter = (view, data, searchInput, ticketState) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterTickets = (data, regex) =>
      data.filter((ticket) => {
        const {
          beginDate,
          endDate,
          idClient,
          partsCost,
          repairCost,
          idDevice,
          idCompany,
          ...dataToFilter
        } = ticket;
        return Object.values(dataToFilter).some((value) =>
          `${value}`.match(regex)
        );
      });
    const regex = new RegExp(`^${escapeRegExp(searchInput)}`, 'i');

    if (data.length === 0 || (searchInput === '' && view !== 'home'))
      setFilteredData(data);
    else if (view === 'home')
      setFilteredData(
        filterTickets(
          data.filter(
            (record) => record.status === ticketStateFilter[ticketState]
          ),
          regex
        )
      );
    else if (view === 'tickets') setFilteredData(filterTickets(data, regex));
    else
      setFilteredData(
        data.filter((element) =>
          Object.values(element).some((value) => `${value}`.match(regex))
        )
      );
  }, [view, data, searchInput, ticketState]);

  return filteredData;
};
