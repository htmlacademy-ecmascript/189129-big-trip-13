import Abstract from "./abstract";

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

export default class FiltersComponent extends Abstract {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }
}
