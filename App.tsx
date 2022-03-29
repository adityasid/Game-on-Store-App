import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Gaming from './src/assets/gaming.svg';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontSize: 30,
            fontWeight: 'bold',
            color: '#20315F',
            marginTop: 30,
          }}>
          GAMEON
        </Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Gaming
          width={300}
          height={300}
          style={{transform: [{rotate: '-15deg'}]}}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          marginBottom: 50,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontFamily: 'Roboto-MediumItalic',
            // fontWeight: 'bold',
          }}>
          Let's begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
