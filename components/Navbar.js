import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Navbar() {
  const navigation = useNavigation();
  return (
    <>
      {/* Nav bar */}
      <View style={styles.navWrapper}>
        <TouchableOpacity
          style={styles.navButtonWrapper}
          onPress={() => navigation.navigate('Activity')}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="home" size={30} />

            <Text>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonWrapper}
          onPress={() => navigation.navigate('Chart')}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="podium" size={30} />
            <Text>Chart</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonWrapper}
          onPress={() => navigation.navigate('BabyProfiles')}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="person-circle-outline" size={30} />
            <Text>Babies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonWrapper}
          onPress={() => navigation.navigate('Setting')}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="settings-outline" size={30} />
            <Text>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    justifyContent: 'space-around',
    flex: 1,
  },
  navButtonWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
