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
import NoPoints from "./view/no-points";

import {routePoints} from "./mock/trip-point";
import {filterNames} from "./mock/filters";
import {sortingTypes} from "./mock/sorting";

import {render} from "./utils/render";
import {replace} from "./utils/render";
import {RenderPosition} from "./utils/render";

const renderTripPoint = (datePoint, currentTripList) => {
  const editFormComponent = new EditFormComponent(datePoint);
  const tripEventComponent = new TripPointComponent(datePoint);

  const replacePointToEdit = () => {
    replace(editFormComponent, tripEventComponent);
    editFormComponent.setFormSubmitHandler(replaceEditToPoint);
    editFormComponent.setCloseClickHandler(replaceEditToPoint);
    document.addEventListener(`keydown`, onEscKeyDown);
  };

  const replaceEditToPoint = () => {
    replace(tripEventComponent, editFormComponent);
  };

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;
    if (isEscKey) {
      replaceEditToPoint();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  tripEventComponent.setEditClickHandler(replacePointToEdit);

  render(currentTripList, tripEventComponent, RenderPosition.BEFOREEND);
};

const siteTripTitleElement = document.querySelector(`.trip-controls__title--js`);
render(siteTripTitleElement, new MenuComponent(), RenderPosition.AFTEREND);

const siteTripControlsElement = document.querySelector(`.trip-controls`);
render(siteTripControlsElement, new FiltersComponent(filterNames), RenderPosition.BEFOREEND);

const siteTripEventsElement = document.querySelector(`.trip-events`);
render(siteTripEventsElement, new SortingComponent(sortingTypes), RenderPosition.BEFOREEND);
render(siteTripEventsElement, new TripListComponent(), RenderPosition.BEFOREEND);

const siteTripEventsListElement = siteTripEventsElement.querySelector(`.trip-events__list`);
/*eslint-disable */
// render(siteTripEventsListElement, new CreationFormComponent(), RenderPosition.BEFOREEND);
/*eslint-disable */
const renderTrip = () => {
  if (routePoints.length === 0) {
    render(siteTripEventsElement, new NoPoints(), RenderPosition.BEFOREEND);
    return;
  }

  const tripPointsCities = [
    ...new Set(routePoints.map((it) => it.city))
  ];

  const tripPointsDates = [
    ...new Set(routePoints.map((it) => new Date(it.startDate).toDateString()))
  ];

  const siteTripMainElement = document.querySelector(`.trip-main`);
  render(siteTripMainElement, new TripInfoComponent(tripPointsCities, tripPointsDates), RenderPosition.AFTERBEGIN);

  const siteTripInfoElement = siteTripMainElement.querySelector(`.trip-info`)
  render(siteTripInfoElement, new PriceComponent(routePoints), RenderPosition.BEFOREEND);

  routePoints.map((routePoint) => renderTripPoint(routePoint, siteTripEventsListElement));
}

renderTrip();
