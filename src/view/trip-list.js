import Abstract from "./abstract";

const createTripListTemplate = () =>
  `<ul class="trip-events__list"></ul>`;

export default class TripListComponent extends Abstract {
  getTemplate() {
    return createTripListTemplate(this._tripList);
  }
}

