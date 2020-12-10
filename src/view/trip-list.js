import {createElement} from "../utils";

const createTripListTemplate = () =>
  `<ul class="trip-events__list"></ul>`;

export default class TripListComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripListTemplate(this._tripList);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

