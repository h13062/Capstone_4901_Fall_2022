import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Navbar from '../components/Navbar';

export default function Chart() {
  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: () => `rgba(31, 30, 51, 1)`,
    barPercentage: 0.8,
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
            withInnerLines={false}
            fromZero={true}
            showBarTops={false}
          />
        </View>
      </View>
      <Navbar />
    </>
  );
}

const styles = StyleSheet.create({
  chartWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    padding: 25,
    paddingTop: 55,
    flex: 10,
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
