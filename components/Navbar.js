import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Navbar({ isDarkGlobal, setNavItems, navItems }) {
  const navigation = useNavigation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(!isDarkGlobal);
  }, [isDarkGlobal, navItems]);

  const navButtonWrapper = isDarkGlobal
    ? styles.navButtonWrapper_light
    : styles.navButtonWrapper_dark;

  const color = isDarkGlobal ? '#000' : '`rgba(255, 255, 255, 0.87)`';

  const navItem_hl = isDarkGlobal
    ? styles.navItem_hl_light
    : styles.navItem_hl_dark;
  return (
    <>
      {/* Nav bar */}
      <View style={styles.navWrapper}>
        <TouchableOpacity
          style={navButtonWrapper}
          onPress={() => {
            setNavItems([true, false, false, false]);
            navigation.navigate('Activity');
          }}
        >
          <View style={navItems[0] == true ? navItem_hl : styles.navItem}>
            <Ionicons name="home" size={25} color={color} />

            <Text style={{ color: color, opacity: 0.87 }}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={navButtonWrapper}
          onPress={() => {
            setNavItems([false, true, false, false]);
            navigation.navigate('Chart');
          }}
        >
          <View style={navItems[1] == true ? navItem_hl : styles.navItem}>
            <Ionicons name="podium" size={25} color={color} />
            <Text style={{ color: color, opacity: 0.87 }}>Chart</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={navButtonWrapper}
          onPress={() => {
            setNavItems([false, false, true, false]);
            navigation.navigate('BabyProfiles');
          }}
        >
          <View style={navItems[2] == true ? navItem_hl : styles.navItem}>
            <Ionicons name="person-circle-outline" size={25} color={color} />
            <Text style={{ color: color, opacity: 0.87 }}>Babies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={navButtonWrapper}
          onPress={() => {
            setNavItems([false, false, false, true]);
            navigation.navigate('Setting');
          }}
        >
          <View style={navItems[3] == true ? navItem_hl : styles.navItem}>
            <Ionicons name="settings-outline" size={25} color={color} />
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
  navItem: {
    alignItems: 'center',
  },
  navItem_hl_light: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b5b5b5',
    width: '80%',
    height: '85%',
    borderRadius: 10,
  },
  navItem_hl_dark: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8a8a8a',
    width: '80%',
    height: '85%',
    borderRadius: 10,
  },
});
