import {createElement} from "../utils";

const createFilterTemplate = (name) =>
  `<div class="trip-filters__filter">
    <input id="filter-${name.toLowerCase()}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name.toLowerCase()}" checked>
    <label class="trip-filters__filter-label" for="filter-${name.toLowerCase()}">${name}</label>
  </div>`;


const createFiltersTemplate = (filterNamesData) => {
  const filterNamesTemplate = filterNamesData.map((it) => createFilterTemplate(it)).join(`\n`);

  return (
    `<form class="trip-filters" action="#" method="get">
      ${filterNamesTemplate}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class FiltersComponent {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
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
