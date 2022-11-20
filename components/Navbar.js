import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
          <View>
            <Text>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonWrapper}
          onPress={() => navigation.navigate('Chart')}
        >
          <View>
            <Text>2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonWrapper}
          onPress={() => navigation.navigate('BabyProfiles')}
        >
          <View>
            <Text>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonWrapper}
          onPress={() => navigation.navigate('Setting')}
        >
          <View>
            <Text>4</Text>
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
