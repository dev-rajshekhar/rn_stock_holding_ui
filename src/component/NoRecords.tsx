import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {HomeScreenStyles as styles} from '../styles/HoldingScreen.styles';
import Colors from '../constants/color';
import {HoldingScreenContanst} from '../constants/app_strings';

export enum DataStatus {
  Loading,
  Error,
  NoData,
}

interface INoRecordOrErrorProps {
  status: DataStatus;
  errorMessage?: string;
  noDataMessage?: string;
  testID: string;
}

export const NoRecords: React.FC<INoRecordOrErrorProps> = ({
  status,
  errorMessage,
  noDataMessage,
  testID,
}) => {
  switch (status) {
    case DataStatus.Loading:
      return (
        <View testID={testID} style={styles.noRecordComponent}>
          <ActivityIndicator
            testID={'loading-indicator-view'}
            size="large"
            color={Colors.secondary}
          />
        </View>
      );

    case DataStatus.Error:
      return (
        <View testID={testID} style={styles.noRecordComponent}>
          <Text style={styles.valueText}>
            {errorMessage || HoldingScreenContanst.AN_ERROR_OCCURED}
          </Text>
        </View>
      );

    case DataStatus.NoData:
      return noDataMessage && noDataMessage.length > 0 ? (
        <View testID={testID} style={styles.noRecordComponent}>
          <Text>{noDataMessage}</Text>
        </View>
      ) : null;

    default:
      return null;
  }
};

export default NoRecords;
