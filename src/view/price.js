export const createPriceTemplate = (pointsData) => {
  const price = pointsData.map((pointData) => pointData.price).reduce((sum, current) => sum + current, 0);

  return `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
    </p>`;
};
