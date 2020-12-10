import {createElement} from "../utils";

const createPriceTemplate = (pointsData) => {
  const price = pointsData.map((pointData) => pointData.price).reduce((sum, current) => sum + current, 0);

  return (
    `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
    </p>`
  );
};

export default class PriceComponent {
  constructor(cardsData) {
    this._cardsData = cardsData;
    this._element = null;
  }

  getTemplate() {
    return createPriceTemplate(this._cardsData);
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
