const getDate = (date) => new Date(date)
  .toLocaleString("ru-RU")
  .split(",")[0];

export default getDate;
