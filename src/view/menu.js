import Abstract from "./abstract";

const createMenuTemplate = () =>
  `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`;

export default class MenuComponent extends Abstract {
  getTemplate() {
    return createMenuTemplate(this._menu);
  }
}
