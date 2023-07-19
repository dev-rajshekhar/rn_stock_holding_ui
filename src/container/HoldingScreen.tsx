import React, {useEffect, useMemo, useState} from 'react';
import HoldingScreen from '../component/HoldingScreen';
import * as HoldingUtils from '../utils/HoldingUtils';
import NoRecords, {DataStatus} from '../component/NoRecords';
import {fetchHoldings} from '../services/api_service';
import {IHolding} from '../types/holding';
import {HoldingScreenContanst} from '../constants/app_strings';

const Container: React.FC = () => {
  const [holdingData, setHoldinData] = useState<IHolding[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHoldings();
        setHoldinData(response);
        setLoading(false);
      } catch (e: unknown) {
        setError(e as Error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const currentTotalValue = useMemo(
    () => HoldingUtils.calculateCurrentTotalValue(holdingData),
    [holdingData],
  );
  const totalInvestment = useMemo(
    () => HoldingUtils.calculateTotalInvestment(holdingData),
    [holdingData],
  );
  const totalPNL = useMemo(
    () => HoldingUtils.calculateTotalPNL(currentTotalValue, totalInvestment),
    [currentTotalValue, totalInvestment],
  );
  const todayPNL = useMemo(
    () => HoldingUtils.calculateTodayPNL(holdingData),
    [holdingData],
  );

  if (loading) {
    return <NoRecords testID="loading-indicator" status={DataStatus.Loading} />;
  }

  if (holdingData.length === 0) {
    return (
      <NoRecords
        testID="no-records-message"
        status={DataStatus.NoData}
        noDataMessage={HoldingScreenContanst.NO_RECORD_FOUND}
      />
    );
  }

  if (error) {
    return (
      <NoRecords
        testID="error-message"
        status={DataStatus.Error}
        errorMessage={error.message}
      />
    );
  }

  return (
    <HoldingScreen
      holdings={holdingData}
      currentTotalValue={currentTotalValue}
      totalInvestment={totalInvestment}
      totalPNL={totalPNL}
      todayPNL={todayPNL}
    />
  );
};

export default Container;
