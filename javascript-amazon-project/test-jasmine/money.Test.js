import formatCurrency from "../scripts/utils/money.js";

describe('test suite :formatCurrency', () => {
  it('convert cents to dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });
  it('work with 0', () => {
    expect(formatCurrencty(0)).toEqual('0.00');
  });
  it('round up to the nearest cents', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

});
