import {createCreationFormTemplate} from "./view/creation-form";
import {createEditFormTemplate} from "./view/edit-form";
import {createFiltersTemplate} from "./view/filters";
import {createMenuTemplate} from "./view/menu";
import {createPriceTemplate} from "./view/price";
import {createSortingTemplate} from "./view/sorting";
import {createTripInfoTemplate} from "./view/trip-info";
import {createTripListTemplate} from "./view/trip-list";
import {createTripPointTemplate} from "./view/trip-point";

import {routePoints} from "./mock/trip-point";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripPointsCities = [
  ...new Set(routePoints.map((it) => it.city))
];

const tripPointsDates = [
  ...new Set(routePoints.map((it) => new Date(it.startDate).toDateString()))
];

const siteTripInfoElement = document.querySelector(`.trip-main`);
render(siteTripInfoElement, createTripInfoTemplate(tripPointsCities, tripPointsDates), `afterbegin`);
render(siteTripInfoElement, createPriceTemplate(routePoints), `beforeend`);

const siteTripTitleElement = document.querySelector(`.trip-controls__title--js`);
render(siteTripTitleElement, createMenuTemplate(), `afterend`);

const siteTripControlsElement = document.querySelector(`.trip-controls`);
render(siteTripControlsElement, createFiltersTemplate(), `beforeend`);

const siteTripEventsElement = document.querySelector(`.trip-events`);
render(siteTripEventsElement, createSortingTemplate(), `beforeend`);
render(siteTripEventsElement, createTripListTemplate(), `beforeend`);

const siteTripEventsListElement = siteTripEventsElement.querySelector(`.trip-events__list`);
render(siteTripEventsListElement, createCreationFormTemplate(), `beforeend`);
render(siteTripEventsListElement, createEditFormTemplate(routePoints[0]), `beforeend`);
// new Array((routePoints.length - 1)).fill(``).forEach(() => render(siteTripEventsListElement, createTripPointTemplate(routePoints.splice(0, 1)), `beforeend`));
routePoints.slice(1).map((routePoint) => render(siteTripEventsListElement, createTripPointTemplate(routePoint), `beforeend`));
