import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './page/login';
import Register from './page/register';
import BabyInfo  from './page/babyinfo';
import Chart from './page/Chart';
import Activity from './page/Activity';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      {/* <Register /> */}
      <BabyInfo/>
    </View>
  );
}

// export default function App() {
//   return (
//     <>
//       <View style={{ width: '100%', height: '100%' }}>
//         <View style={{ flex: 10 }}>
//           {/* <Activity /> */}
//           <Chart />
//         </View>
//         <View style={{ flex: 1 }}>
//           <Navbar />
//         </View>
//       </View>
//     </>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
