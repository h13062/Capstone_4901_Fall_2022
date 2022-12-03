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

  const navButtonWrapper = isDarkGlobal
    ? styles.navButtonWrapper_light
    : styles.navButtonWrapper_dark;

  const color = isDarkGlobal ? '#000' : '`rgba(255, 255, 255, 0.87)`';
  return (
    <>
      {/* Nav bar */}
      <View style={styles.navWrapper}>
        <TouchableOpacity
          style={navButtonWrapper}
          onPress={() => navigation.navigate('Activity')}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="home" size={30} color={color} />

            <Text style={{ color: color, opacity: 0.87 }}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={navButtonWrapper}
          onPress={() => navigation.navigate('Chart')}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="podium" size={30} color={color} />
            <Text style={{ color: color, opacity: 0.87 }}>Chart</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={navButtonWrapper}
          onPress={() => navigation.navigate('BabyProfiles')}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="person-circle-outline" size={30} color={color} />
            <Text style={{ color: color, opacity: 0.87 }}>Babies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={navButtonWrapper}
          onPress={() => navigation.navigate('Setting')}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="settings-outline" size={30} color={color} />
            <Text style={{ color: color, opacity: 0.87 }}>Settings</Text>
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
    justifyContent: 'space-around',
    flex: 1,
  },
  navButtonWrapper_light: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  navButtonWrapper_dark: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#595959',
  },
});
