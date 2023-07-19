import React from 'react';
import renderer from 'react-test-renderer';

import HoldingScreen from '../src/component/HoldingScreen';
import {HoldingSctocksProps, mockHoldingData} from './mock/HoldingStocksProps';
import {render} from '@testing-library/react-native';
import {HoldingScreenContanst} from '../src/constants/app_strings';

jest.useFakeTimers();
describe('Should render Holding Screen properly', () => {
  it('Should match snapshot', () => {
    const component = renderer
      .create(<HoldingScreen {...HoldingSctocksProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Should Render Flatlist', () => {
    const component = render(<HoldingScreen {...HoldingSctocksProps} />);
    const id = component.findByTestId('flatlist-holdings');
    expect(id).toBeTruthy();
  });
  it('Should Render Bottom Container', () => {
    const component = render(<HoldingScreen {...HoldingSctocksProps} />);
    const id = component.findByTestId('bottom-container');
    expect(id).toBeTruthy();
  });

  test('Should render the first item of FlatList correctly', async () => {
    const {findByText} = render(<HoldingScreen {...HoldingSctocksProps} />);
    const firstCompanyName = await findByText('IRFC');
    expect(firstCompanyName).toBeTruthy();
  });
  test('Should render the correct PNL for first item', async () => {
    const {findByText} = render(<HoldingScreen {...HoldingSctocksProps} />);
    const holding1Pnl: number =
      mockHoldingData[0].quantity *
      (mockHoldingData[0].ltp - mockHoldingData[0].avg_price);
    console.log('==holding1Pnl', holding1Pnl);
    console.log(
      'Expected text:',
      `${HoldingScreenContanst.P_L}${HoldingScreenContanst.INR_CUURENCY_SYMBOL}${holding1Pnl}`,
    );

    const holding1PnlElement = await findByText(
      `${HoldingScreenContanst.P_L} ${
        HoldingScreenContanst.INR_CUURENCY_SYMBOL
      }${holding1Pnl.toFixed(2)}`,
    );

    expect(holding1PnlElement).toBeTruthy();
  });
});
