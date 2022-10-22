import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function Chart() {
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 1,
    color: () => `rgba(31, 30, 51, 1)`,
    withInnerLines: false,
    withVerticalLabels: false,
  };
  return (
    <>
      <View style={styles.chartWrapper}>
        <View>
          <Text style={styles.headerText}>Chart</Text>
        </View>
        <View style={styles.chartViewWrapper}>
          <BarChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43],
                },
              ],
            }}
            width={Dimensions.get('window').width * 0.9}
            height={Dimensions.get('window').height * 0.6}
            chartConfig={chartConfig}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  chartWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    padding: 25,
    paddingTop: 45,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  chartViewWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
});
