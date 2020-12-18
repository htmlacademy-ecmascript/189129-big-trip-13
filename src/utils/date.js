const castTimeFormat = (value) => value < 10 ? `0${value}` : String(value);

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 24);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

const formatDate = (date) => {
  const day = castTimeFormat(date.getDate());
  const month = castTimeFormat(date.getMonth() + 1);
  const year = String(date.getFullYear()).slice(-2);

  return `${day}/${month}/${year}`;
};

export {
  castTimeFormat,
  formatTime,
  formatDate
};
