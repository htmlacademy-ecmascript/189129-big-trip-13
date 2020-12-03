import {createCreationFormTemplate} from "./view/creation-form";
import {createEditFormTemplate} from "./view/edit-form.js";
import {createFiltersTemplate} from "./view/filters.js";
import {createMenuTemplate} from "./view/menu.js";
import {createPriceTemplate} from "./view/price";
import {createSortingTemplate} from "./view/sorting.js";
import {createTripInfoTemplate} from "./view/trip-info";
import {createTripListTemplate} from "./view/trip-list";
import {createTripPointTemplate} from "./view/trip-point";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteTripInfoElement = document.querySelector(`.trip-main`);
render(siteTripInfoElement, createTripInfoTemplate(), `afterbegin`);
render(siteTripInfoElement, createPriceTemplate(), `beforeend`);

const siteTripTitleElement = document.querySelector(`.trip-controls__title--js`);
render(siteTripTitleElement, createMenuTemplate(), `afterend`);

const siteTripControlsElement = document.querySelector(`.trip-controls`);
render(siteTripControlsElement, createFiltersTemplate(), `beforeend`);

const siteTripEventsElement = document.querySelector(`.trip-events`);
render(siteTripEventsElement, createSortingTemplate(), `beforeend`);
render(siteTripEventsElement, createCreationFormTemplate(), `beforeend`);
render(siteTripEventsElement, createTripListTemplate(), `beforeend`);

const siteTripEventsListElement = siteTripEventsElement.querySelector(`.trip-events__list`);
render(siteTripEventsListElement, createEditFormTemplate(), `beforeend`);
new Array(TASK_COUNT).fill(``).forEach(() => render(siteTripEventsListElement, createTripPointTemplate(), `beforeend`));
