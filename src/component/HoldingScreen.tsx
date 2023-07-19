import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import {IHolding} from '../types/holding';
import HoldingItem from './HoldingItem';
import {HomeScreenStyles as styles} from '../styles/HoldingScreen.styles';
import {HoldingScreenContanst} from '../constants/app_strings';
import BottomContainer from './BottomContainer';

const keyExtractor = (item: IHolding) => item.token_nse.toString();
interface IHoldingScreenProps {
  holdings: IHolding[];
  currentTotalValue: number;
  totalInvestment: number;
  totalPNL: number;
  todayPNL: number;
}

const HoldingScreen: React.FC<IHoldingScreenProps> = ({
  holdings,
  currentTotalValue,
  totalInvestment,
  totalPNL,
  todayPNL,
}) => {
  const renderItem = useCallback(
    ({item}: {item: IHolding}) => <HoldingItem holding={item} />,
    [],
  );

  return (
    <View testID={"holding-screen'"} style={styles.parentContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>
          {HoldingScreenContanst.HEADER_TITLE}
        </Text>
      </View>
      <FlatList
        testID="flatlist-holdings"
        data={holdings}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <BottomContainer
        currentTotalValue={currentTotalValue}
        totalInvestment={totalInvestment}
        totalPNL={totalPNL}
        todayPNL={todayPNL}
      />
    </View>
  );
};

export default HoldingScreen;
