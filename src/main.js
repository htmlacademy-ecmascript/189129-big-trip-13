/*eslint-disable */
// import CreationFormComponent from "./view/creation-form";
/*eslint-disable */
import EditFormComponent from "./view/edit-form";
import FiltersComponent from "./view/filters";
import MenuComponent from "./view/menu";
import PriceComponent from "./view/price";
import SortingComponent from "./view/sorting";
import TripInfoComponent from "./view/trip-info";
import TripListComponent from "./view/trip-list";
import TripPointComponent from "./view/trip-point";

import {routePoints} from "./mock/trip-point";
import {filterNames} from "./mock/filters";
import {sortingTypes} from "./mock/sorting";

import {render} from "./utils";
import {RenderPosition} from "./utils";

const renderTripPoint = (datePoint, currentTripList) => {
  const editFormComponent = new EditFormComponent(datePoint);
  const editForm = editFormComponent.getElement();

  const replacePointToEdit = () => {
    currentTripList.replaceChild(editFormComponent.getElement(), tripEventComponent.getElement());
    editForm.addEventListener(`submit`, replaceEditToPoint);
  };

  const replaceEditToPoint = () => {
    currentTripList.replaceChild(tripEventComponent.getElement(), editFormComponent.getElement());
    editForm.removeEventListener(`submit`, replaceEditToPoint);
  };

  const tripEventComponent = new TripPointComponent(datePoint);
  const editButton = tripEventComponent.getElement().querySelector(`.event__rollup-btn`);
  editButton.addEventListener(`click`, replacePointToEdit);

  render(currentTripList, tripEventComponent.getElement(), RenderPosition.BEFOREEND);
};

const tripPointsCities = [
  ...new Set(routePoints.map((it) => it.city))
];

const tripPointsDates = [
  ...new Set(routePoints.map((it) => new Date(it.startDate).toDateString()))
];

const siteTripMainElement = document.querySelector(`.trip-main`);
render(siteTripMainElement, new TripInfoComponent(tripPointsCities, tripPointsDates).getElement(), RenderPosition.AFTERBEGIN);

const siteTripInfoElement = siteTripMainElement.querySelector(`.trip-info`)
render(siteTripInfoElement, new PriceComponent(routePoints).getElement(), RenderPosition.BEFOREEND);

const siteTripTitleElement = document.querySelector(`.trip-controls__title--js`);
render(siteTripTitleElement, new MenuComponent().getElement(), RenderPosition.AFTEREND);

const siteTripControlsElement = document.querySelector(`.trip-controls`);
render(siteTripControlsElement, new FiltersComponent(filterNames).getElement(), RenderPosition.BEFOREEND);

const siteTripEventsElement = document.querySelector(`.trip-events`);
render(siteTripEventsElement, new SortingComponent(sortingTypes).getElement(), RenderPosition.BEFOREEND);
render(siteTripEventsElement, new TripListComponent().getElement(), RenderPosition.BEFOREEND);

const siteTripEventsListElement = siteTripEventsElement.querySelector(`.trip-events__list`);
/*eslint-disable */
// render(siteTripEventsListElement, new CreationFormComponent().getElement(), RenderPosition.BEFOREEND);
/*eslint-disable */
routePoints.map((routePoint) => renderTripPoint(routePoint, siteTripEventsListElement));
