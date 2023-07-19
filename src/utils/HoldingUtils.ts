import {IHolding} from '../types/holding';

export const calculateCurrentTotalValue = (
  holdings: IHolding[] | null,
): number => {
  if (!holdings) {
    return 0;
  }
  return holdings.reduce(
    (total, holding) => total + holding.ltp * holding.quantity,
    0,
  );
};

export const calculateTotalInvestment = (
  holdings: IHolding[] | null,
): number => {
  if (!holdings) {
    return 0;
  }
  return holdings.reduce(
    (total, holding) => total + holding.avg_price * holding.quantity,
    0,
  );
};

export const calculateTotalPNL = (
  currentTotalValue: number,
  totalInvestment: number,
) => {
  return currentTotalValue - totalInvestment;
};

export const calculateTodayPNL = (holdings: IHolding[] | null): number => {
  if (!holdings) {
    return 0;
  }
  return holdings.reduce(
    (total, holding) =>
      total + (holding.close - holding.ltp) * holding.quantity,
    0,
  );
};
