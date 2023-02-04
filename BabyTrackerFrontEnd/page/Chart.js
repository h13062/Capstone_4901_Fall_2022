import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Navbar from '../components/Navbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryAxis,
} from 'victory-native';

export default function Chart({ isDarkGlobal, setNavItems, navItems }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(!isDarkGlobal);
  }, [isDarkGlobal]);

  // const chartConfigLight = {
  //   backgroundGradientFromOpacity: 0,
  //   backgroundGradientToOpacity: 0,
  //   color: () => `rgba(0, 0, 0, 1)`,
  //   barPercentage: 0.8,
  // };
  // const chartConfigDark = {
  //   fillShadowGradientFrom: '#fff',
  //   fillShadowGradientFromOpacity: 0.87,
  //   fillShadowGradientTo: '#fff',
  //   fillShadowGradientToOpacity: 0.87,
  //   backgroundGradientFromOpacity: 0,
  //   backgroundGradientToOpacity: 0,
  //   color: () => `rgba(255, 255, 255, 0.87)`,
  //   barPercentage: 0.8,
  // };

  const chartWrapper = isDarkGlobal
    ? styles.chartWrapper_light
    : styles.chartWrapper_dark;

  // const chartConfig = isDarkGlobal ? chartConfigLight : chartConfigDark;

  const headerText = isDarkGlobal
    ? styles.headerText_light
    : styles.headerText_dark;

  const data = {
    bar1: [
      { x: 'Jan', y: 20 },
      { x: 'Mar', y: 40 },
      { x: 'May', y: 120 },
      { x: 'Jul', y: 69 },
      { x: 'Sep', y: 10 },
    ],
    bar2: [
      { x: 'Jan', y: 50 },
      { x: 'Mar', y: 30 },
      { x: 'May', y: 70 },
      { x: 'Jul', y: 38 },
      { x: 'Sep', y: 105 },
    ],
  };

  const chartTheme_light = {
    axis: {
      style: {
        tickLabels: {
          // this changed the color of my numbers to white
          fill: '#121212',
        },
      },
    },
  };
  const chartTheme_dark = {
    axis: {
      style: {
        tickLabels: {
          // this changed the color of my numbers to white
          fill: 'rgba(255, 255, 255, 0.5)',
        },
      },
    },
  };

  const chartTheme = isDarkGlobal ? chartTheme_light : chartTheme_dark;
  return (
    <>
      <SafeAreaView style={styles.allChartWrapper}>
        <View style={chartWrapper}>
          <View>
            <Text style={headerText}>Chart</Text>
          </View>
          <View style={styles.chartViewWrapper}>
            <VictoryChart
              height={Dimensions.get('window').height * 0.6}
              width={Dimensions.get('window').width * 1}
              maxDomain={{ x: 4 }}
            >
              <VictoryAxis
                dependentAxis
                tickFormat={(y) => y}
                style={{
                  axis: { stroke: 'rgba(255, 255, 255, 0)' },
                  tickLabels: {
                    fill: isDarkGlobal
                      ? '#121212'
                      : 'rgba(255, 255, 255, 0.87)', //CHANGE COLOR OF Y-AXIS LABELS
                  },
                  grid: {
                    stroke: 'rgba(255, 255, 255, 0.3)', //CHANGE COLOR OF Y-AXIS GRID LINES
                    strokeDasharray: '0',
                  },
                }}
              />
              <VictoryAxis
                // dependentAxis
                tickFormat={(x) => x}
                style={{
                  axis: {
                    stroke: 'rgba(255, 255, 255, 0)',
                  },
                  tickLabels: {
                    fill: isDarkGlobal
                      ? '#121212'
                      : 'rgba(255, 255, 255, 0.87)', //CHANGE COLOR OF Y-AXIS LABELS
                  },
                  grid: {
                    // stroke: 'white', //CHANGE COLOR OF Y-AXIS GRID LINES
                    strokeDasharray: '0',
                  },
                }}
              />
              <VictoryGroup offset={20}>
                <VictoryBar
                  animate={{
                    duration: 500,
                    onLoad: { duration: 500 },
                  }}
                  style={{ data: { fill: '#6082B6' } }}
                  cornerRadius={{ top: 10, bottom: 10 }}
                  barWidth={20}
                  data={data.bar1}
                />
                <VictoryBar
                  animate={{
                    duration: 500,
                    onLoad: { duration: 500 },
                  }}
                  style={{ data: { fill: '#e0a370' } }}
                  cornerRadius={{ top: 10, bottom: 10 }}
                  barWidth={20}
                  data={data.bar2}
                />
              </VictoryGroup>
            </VictoryChart>
            {/* <BarChart
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                ],
                datasets: [
                  {
                    data: [20, 45, 28, 80, 100, 43],
                  },
                ],
              }}
              width={Dimensions.get('window').width * 0.9}
              height={Dimensions.get('window').height * 0.6}
              chartConfig={chartConfig}
              withInnerLines={false}
              fromZero={true}
              showBarTops={false}
            /> */}
          </View>
        </View>
        <Navbar
          isDarkGlobal={isDarkGlobal}
          setNavItems={setNavItems}
          navItems={navItems}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  allChartWrapper: {
    width: '100%',
    height: '100%',
  },
  chartWrapper_light: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    paddingTop: 25,
    paddingHorizontal: 25,
    flex: 10,
  },
  chartWrapper_dark: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    paddingTop: 25,
    paddingHorizontal: 25,
    flex: 10,
    backgroundColor: '#121212',
  },
  headerText_light: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  headerText_dark: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    opacity: 0.87,
  },
  chartViewWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
});
