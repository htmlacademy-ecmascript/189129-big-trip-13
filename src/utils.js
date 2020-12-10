const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomElement = (elements) => {
  const randomElement = elements[getRandomInteger(0, elements.length - 1)];

  return randomElement;
};

const getRandomElements = (elements, maxLenght) => {
  const length = getRandomInteger(1, maxLenght);
  const randomElements = [];
  for (let i = 0; i < length; i++) {
    randomElements.push(elements[i]);
  }

  return randomElements;
};

const getNewArray = (count, action) => new Array(count).fill(``).map(action);

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

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
    default:
      throw new Error(`Unhandled case in render method: ${place}`);
  }
};

export {
  getRandomInteger,
  getRandomElement,
  getRandomElements,
  getNewArray,
  castTimeFormat,
  formatTime,
  formatDate,
  createElement,
  render,
  RenderPosition
};
