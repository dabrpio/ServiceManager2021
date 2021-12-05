export const useFilter = (data, searchInput) => {
  if (data.length === 0) return data;
  if (searchInput === '') return data;
  searchInput = escapeRegExp(searchInput);
  const regex = new RegExp(`${searchInput}`, 'i');
  if (Object.keys(data[0]).includes('rma')) return filterTickets(data, regex);
  else
    return data.filter((element) => {
      return Object.values(element).some((value) => value.match(regex));
    });
};

const escapeRegExp = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

const filterTickets = (data, regex) => {
  return data.filter((ticket) => {
    const {
      beginDate,
      endDate,
      idClient,
      information,
      partsCost,
      repairCost,
      ...dataToFilter
    } = ticket;
    return Object.values(dataToFilter).some((value) => value.match(regex));
  });
};
