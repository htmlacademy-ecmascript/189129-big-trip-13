import {getRandomInteger} from "../utils";
import {getRandomElement} from "../utils";
import {getRandomElements} from "../utils";
import {getNewArray} from "../utils";

const POINT_COUNT = 20;

const transferTypeNames = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`
];

const activityTypeNames = [
  `Check-in`,
  `Sightseeing`,
  `Restaurant`
];

const routePointTypeNames = transferTypeNames.concat(activityTypeNames);

const generateRoutePointTypes = () => {
  return routePointTypeNames.map((it) => {
    const generatePretext = () => [`Check`, `Sightseeing`, `Restaurant `].includes(it) ? `in` : `to`;
    return {
      name: it,
      pretext: generatePretext()
    };
  });
};

const routePointCities = [
  `Amsterdam`,
  `Geneva`,
  `Chamonix`,
  `Saint Petersburg`
];

const routeAditionalOffers = [
  {
    type: `luggage`,
    name: `Add luggage`,
    price: `30`
  },
  {
    type: `comfort`,
    name: `Switch to comfort class`,
    price: `100`
  },
  {
    type: `meal`,
    name: `Add meal`,
    price: `15`
  },
  {
    type: `seats`,
    name: `Choose seats`,
    price: `5`
  },
  {
    type: `train`,
    name: `Travel by train`,
    price: `40`
  }
];

const routePointDestinationSentences = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const getRoutePhotos = () => {
  const routePhotos = [];
  for (let i = 0; i < getRandomInteger(1, 5); i++) {
    routePhotos.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return routePhotos;
};

const getRoutePointStartDate = () => {
  const startDate = new Date();
  return startDate;
};

const getRoutePointEndDate = () => {
  const endDate = new Date();
  const date = getRandomInteger(0, 7);
  const hours = getRandomInteger(0, 24);
  const minutes = getRandomInteger(0, 60);
  endDate.setDate(endDate.getDate() + date);
  endDate.setHours(endDate.getHours() + hours);
  endDate.setMinutes(endDate.getMinutes() + minutes);

  return endDate;
};

const generateRoutePointData = () => {
  return {
    type: getRandomElement(generateRoutePointTypes()),
    city: getRandomElement(routePointCities),
    offers: getRandomElements(routeAditionalOffers, 5),
    text: getRandomElements(routePointDestinationSentences, 5).join(` `),
    photos: getRoutePhotos(),
    price: getRandomInteger(10, 1000),
    startDate: getRoutePointStartDate(),
    endDate: getRoutePointEndDate()
  };
};

const routePoints = getNewArray(POINT_COUNT, generateRoutePointData).sort((a, b) => a.start - b.start);

export {
  transferTypeNames,
  activityTypeNames,
  routePointTypeNames,
  generateRoutePointData,
  routePoints
};
