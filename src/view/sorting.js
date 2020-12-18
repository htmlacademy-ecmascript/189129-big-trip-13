import Abstract from "./abstract";

const createSortingItemTemplate = (type) =>
  `<div class="trip-sort__item  trip-sort__item--${type.toLowerCase()}">
    <input id="sort-${type.toLowerCase()}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type.toLowerCase()}" checked>
    <label class="trip-sort__btn" for="sort-${type.toLowerCase()}">${type}</label>
  </div>`;

const createSortingTemplate = (typesData) => {
  const sortItemsTemplate = typesData.map((type) => createSortingItemTemplate(type)).join(`\n`);

  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortItemsTemplate}
    </form>`
  );
};

export default class SortingComponent extends Abstract {
  constructor(sort) {
    super();
    this._sort = sort;
  }

  getTemplate() {
    return createSortingTemplate(this._sort);
  }
}
