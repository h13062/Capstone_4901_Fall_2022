import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Navbar from '../components/Navbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

export default function Chart({ isDarkGlobal, setNavItems, navItems }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(!isDarkGlobal);
  }, [isDarkGlobal]);

  const chartConfigLight = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: () => `rgba(0, 0, 0, 1)`,
    barPercentage: 0.8,
  };
  const chartConfigDark = {
    fillShadowGradientFrom: '#fff',
    fillShadowGradientFromOpacity: 0.87,
    fillShadowGradientTo: '#fff',
    fillShadowGradientToOpacity: 0.87,
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: () => `rgba(255, 255, 255, 0.87)`,
    barPercentage: 0.8,
  };

  const chartWrapper = isDarkGlobal
    ? styles.chartWrapper_light
    : styles.chartWrapper_dark;

  const chartConfig = isDarkGlobal ? chartConfigLight : chartConfigDark;

  const headerText = isDarkGlobal
    ? styles.headerText_light
    : styles.headerText_dark;
  return (
    <>
      <SafeAreaView style={styles.allChartWrapper}>
        <View style={chartWrapper}>
          <View>
            <Text style={headerText}>Chart</Text>
          </View>
          <View style={styles.chartViewWrapper}>
            <BarChart
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
            />
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
