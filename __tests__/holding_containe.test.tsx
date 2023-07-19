import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import Container from '../src/container/HoldingScreen';

export const fetchHoldings = jest.fn();

test('renders loading indicator when fetching data', async () => {
  fetchHoldings.mockResolvedValue([]);
  const {findByTestId, queryByTestId} = render(<Container />);
  const loadingIndicator = await findByTestId('loading-indicator');
  expect(loadingIndicator).toBeTruthy();
  await waitFor(() => expect(queryByTestId('loading-indicator')).toBeNull());
});
test('renders "No Records Found" message when holdingData is empty', async () => {
  fetchHoldings.mockResolvedValue([]);
  const {findByTestId, queryByTestId} = render(<Container />);
  const loadingIndicator = await findByTestId('loading-indicator');
  expect(loadingIndicator).toBeTruthy();
  await waitFor(() => expect(queryByTestId('loading-indicator')).toBeNull());
  const noRecordsMessage = findByTestId('no-records-message');
  expect(noRecordsMessage).toBeTruthy();
});
