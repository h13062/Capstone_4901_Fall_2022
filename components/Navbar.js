import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Navbar({ isDarkGlobal }) {
  const navigation = useNavigation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(!isDarkGlobal);
  }, [isDarkGlobal]);

  const navWrapper = isDarkGlobal
    ? styles.navWrapper_light
    : styles.navWrapper_dark;

  const navButtonWrapper = isDarkGlobal
    ? styles.navButtonWrapper_light
    : styles.navButtonWrapper_dark;

  const color = isDarkGlobal ? '#000' : '#fff';
  return (
    <>
      {/* Nav bar */}
      <View style={navWrapper}>
        <TouchableOpacity
          style={navButtonWrapper}
          onPress={() => navigation.navigate('Activity')}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="home" size={30} color={color} />

            <Text style={{ color: color }}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={navButtonWrapper}
          onPress={() => navigation.navigate('Chart')}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="podium" size={30} color={color} />
            <Text style={{ color: color }}>Chart</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={navButtonWrapper}
          onPress={() => navigation.navigate('BabyProfiles')}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="person-circle-outline" size={30} color={color} />
            <Text style={{ color: color }}>Babies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={navButtonWrapper}
          onPress={() => navigation.navigate('Setting')}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="settings-outline" size={30} color={color} />
            <Text style={{ color: color }}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navWrapper_light: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    justifyContent: 'space-around',
    flex: 1,
  },
  navWrapper_dark: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#595959',
    justifyContent: 'space-around',
    flex: 1,
  },
  navButtonWrapper_light: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 1,
  },
  navButtonWrapper_dark: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 1,
  },
});
