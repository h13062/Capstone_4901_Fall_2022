import { StyleSheet, Text, View, StatusBar } from 'react-native';
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
  VictoryZoomContainer,
} from 'victory-native';
import axios from 'axios';

export default function Chart({ isDarkGlobal, setNavItems, navItems }) {
  const [isDark, setIsDark] = useState(false);
  const [eatData, setEatData] = useState([]);
  const [sleepData, setSleepData] = useState([]);
  const [playData, setPlayData] = useState([]);

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

  const url = 'https://capstone54.azurewebsites.net/';

  useEffect(() => {
    axios
      .get(url + '/api/EatActivity', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('response:', response.status);
        const totals = {};

        for (const { eatStart, eatEnd } of response.data) {
          const [startDate, startTime] = eatStart.split('T');
          const [endDate, endTime] = eatEnd.split('T');
          // const [startHour, startMinute] = startTime.split(':');
          // const [endHour, endMinute] = endTime.split(':');
          const startTimeUTC = Date.parse(`${startDate}T${startTime}Z`);
          const endTimeUTC = Date.parse(`${endDate}T${endTime}Z`);
          const elapsed = (endTimeUTC - startTimeUTC) / 1000 / 3600; // elapsed time in hours
          const month = Number(startDate.split('-')[1]); // get month number
          totals[month] = (totals[month] || 0) + elapsed; // add elapsed time to total for month
        }

        const result = Object.entries(totals).map(([month, total]) => ({
          x: Number(month),
          y: total,
        }));
        setEatData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(url + '/api/SleepActivity', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('response:', response.status);
        const totals = {};

        for (const { sleepStart, sleepEnd } of response.data) {
          const [startDate, startTime] = sleepStart.split('T');
          const [endDate, endTime] = sleepEnd.split('T');
          const startTimeUTC = Date.parse(`${startDate}T${startTime}Z`);
          const endTimeUTC = Date.parse(`${endDate}T${endTime}Z`);
          const elapsed = (endTimeUTC - startTimeUTC) / 1000 / 3600; // elapsed time in hours
          const month = Number(startDate.split('-')[1]); // get month number
          totals[month] = (totals[month] || 0) + elapsed; // add elapsed time to total for month
        }

        const result = Object.entries(totals).map(([month, total]) => ({
          x: Number(month),
          y: total,
        }));
        setSleepData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(url + '/api/PlayActivityControllercs', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('response:', response.status);
        const totals = {};

        for (const { playStart, playEnd } of response.data) {
          const [startDate, startTime] = playStart.split('T');
          const [endDate, endTime] = playEnd.split('T');
          const startTimeUTC = Date.parse(`${startDate}T${startTime}Z`);
          const endTimeUTC = Date.parse(`${endDate}T${endTime}Z`);
          const elapsed = (endTimeUTC - startTimeUTC) / 1000 / 3600; // elapsed time in hours
          const month = Number(startDate.split('-')[1]); // get month number
          totals[month] = (totals[month] || 0) + elapsed; // add elapsed time to total for month
        }

        const result = Object.entries(totals).map(([month, total]) => ({
          x: Number(month),
          y: total,
        }));
        setPlayData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log('EatData: ', eatData);
  console.log('SleepData: ', sleepData);
  console.log('PlayData: ', playData);

  const data = {
    bar1: eatData,
    bar2: sleepData,
    bar3: playData,
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

  // const chartTheme = isDarkGlobal ? chartTheme_light : chartTheme_dark;
  return (
    <>
      <SafeAreaView
        style={[
          styles.allChartWrapper,
          {
            backgroundColor: isDarkGlobal
              ? 'rgba(255, 255, 255, 0.87)'
              : '#121212',
          },
        ]}
      >
        <StatusBar barStyle={isDarkGlobal ? 'dark-content' : 'light-content'} />
        <View style={chartWrapper}>
          <View>
            <Text style={headerText}>Chart</Text>
          </View>
          <View style={styles.chartViewWrapper}>
            <VictoryChart
              height={Dimensions.get('window').height * 0.6}
              width={Dimensions.get('window').width * 1}
              containerComponent={
                <VictoryZoomContainer
                  responsive={false}
                  allowZoom={false}
                  zoomDimension="x"
                  allowPan
                  zoomDomain={{ x: [0, 5] }}
                />
              }
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
                    stroke: isDarkGlobal
                      ? 'rgba(0, 0, 0, 0.12)'
                      : 'rgba(255, 255, 255, 0.3)', //CHANGE COLOR OF Y-AXIS GRID LINES
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
              <VictoryGroup offset={10}>
                <VictoryBar
                  style={{ data: { fill: '#6082B6' } }}
                  cornerRadius={{ top: 5, bottom: 5 }}
                  barWidth={10}
                  data={data.bar1}
                />
                <VictoryBar
                  style={{ data: { fill: '#e0a370' } }}
                  cornerRadius={{ top: 5, bottom: 5 }}
                  barWidth={10}
                  data={data.bar2}
                />
                <VictoryBar
                  style={{ data: { fill: '#60c689' } }}
                  cornerRadius={{ top: 5, bottom: 5 }}
                  barWidth={10}
                  data={data.bar3}
                />
              </VictoryGroup>
            </VictoryChart>
            {/* <BarChart
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "Test",
                ],
                datasets: [
                  {
                    data: [20, 45, 28, 80, 100, 43, 0],
                  },
                ],
              }}
              width={Dimensions.get("window").width * 0.9}
              height={Dimensions.get("window").height * 0.6}
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
    // paddingHorizontal: 25,
    overflow: 'visible',
  },
});
