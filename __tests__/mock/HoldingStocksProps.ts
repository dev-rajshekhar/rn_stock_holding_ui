export const mockHoldingData = [
  {
    avg_price: 26.0,
    cnc_used_quantity: 0,
    collateral_qty: 0,
    collateral_type: 'WC',
    collateral_update_qty: 0,
    company_name: 'Indian Railway Finance Corpora3-41',
    haircut: 0.12,
    holdings_update_qty: 0,
    isin: 'INE053F01010',
    product: 'D',
    quantity: 575,
    symbol: 'IRFC',
    t1_holding_qty: 0,
    token_bse: '543257',
    token_nse: '2029',
    withheld_collateral_qty: 0,
    withheld_holding_qty: 0,
    ltp: 100.5,
    close: 90,
  },
  {
    avg_price: 450.05,
    cnc_used_quantity: 0,
    collateral_qty: 0,
    collateral_type: 'WC',
    collateral_update_qty: 0,
    company_name: 'Bandhan Bank Limited',
    haircut: 0.45,
    holdings_update_qty: 0,
    isin: 'INE545U01014',
    product: 'D',
    quantity: 3,
    symbol: 'BANDHANBNK',
    t1_holding_qty: 0,
    token_bse: '541153',
    token_nse: '2263',
    withheld_collateral_qty: 0,
    withheld_holding_qty: 0,
    ltp: 200.15,
    close: 180.5,
  },
];

export const HoldingSctocksProps = {
  holdings: mockHoldingData,
  currentTotalValue: 2444,
  totalInvestment: 30000,
  totalPNL: 400000,
  todayPNL: 50000,
};
