import React from 'react';

import {HoldingScreenContanst} from '../constants/app_strings';
import {HomeScreenStyles as styles} from '../styles/HoldingScreen.styles';
import {View, Text} from 'react-native';

interface IBottomContainerProps {
  currentTotalValue: number;
  totalInvestment: number;
  totalPNL: number;
  todayPNL: number;
}
const BottomContainer: React.FC<IBottomContainerProps> = ({
  currentTotalValue,
  totalInvestment,
  totalPNL,
  todayPNL,
}) => {
  const renderInfo = (
    placeHolder: string,
    value: number,
    showStatus: boolean = false,
  ) => {
    const color = value && value > 0 ? 'green' : 'red';

    return (
      <View style={styles.bottomInfoChild}>
        <Text style={styles.placeHolder}>{placeHolder}</Text>
        <Text style={[styles.valueText, showStatus ? {color: color} : {}]}>
          {HoldingScreenContanst.INR_CUURENCY_SYMBOL} {value}
        </Text>
      </View>
    );
  };

  return (
    <View testID="bottom-container" style={styles.bottomContainer}>
      {renderInfo(HoldingScreenContanst.CURRENT_VALUE, currentTotalValue)}
      {renderInfo(HoldingScreenContanst.TOTAL_INVESTMENTS, totalInvestment)}
      {renderInfo(HoldingScreenContanst.TODAY_PROFIT_LOSS, todayPNL, true)}
      <View style={styles.divider} />
      {renderInfo(HoldingScreenContanst.PROFIT_LOSS, totalPNL, true)}
    </View>
  );
};
export default BottomContainer;
