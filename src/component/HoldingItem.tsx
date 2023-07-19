import React from 'react';
import {Text, View} from 'react-native';
import {IHolding} from '../types/holding';
import {HomeScreenStyles as styles} from '../styles/HoldingScreen.styles';
import {HoldingScreenContanst} from '../constants/app_strings';

interface IHoldingProps {
  holding: IHolding;
}

const HoldingItem = ({holding}: IHoldingProps) => {
  const {quantity, symbol, ltp, avg_price} = holding;
  const pnl: number = quantity * (ltp - avg_price);
  const pnlColor = pnl >= 0 ? 'green' : 'red';
  const currencyUnit = HoldingScreenContanst.INR_CUURENCY_SYMBOL;

  return (
    <View style={styles.cardItemParent}>
      <View style={styles.cardRow}>
        <Text style={styles.stockName}>{symbol}</Text>
        <Text style={styles.valueText}>
          {HoldingScreenContanst.LTP} {currencyUnit}
          {ltp}
        </Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.valueText}>{quantity}</Text>
        <Text style={[styles.valueText, {color: pnlColor}]}>
          {HoldingScreenContanst.P_L} {currencyUnit}
          {pnl.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
export default HoldingItem;
