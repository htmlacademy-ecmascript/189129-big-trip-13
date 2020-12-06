const COUNT = 3;

const getTripRoute = (cities) => {
  if (cities.length <= COUNT) {
    return cities.map((city) => city).join(` &mdash; `);
  } else {
    return (cities[0] + ` &mdash;` + ` &hellip; ` + `&mdash; ` + cities[cities.length - 1]).toString();
  }
};

const getTripDates = (dates) => {
  return (dates[0].slice(4, 10) + `&nbsp;&mdash;&nbsp;` + dates[dates.length - 1].slice(8, 10)).toString();
};

export const createTripInfoTemplate = (cities, dates) => {
  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${getTripRoute(cities)}</h1>
      <p class="trip-info__dates">${getTripDates(dates)}</p>
    </div>
  </section>`;
};
