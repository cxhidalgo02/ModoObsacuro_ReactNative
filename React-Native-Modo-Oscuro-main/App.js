import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { StyleSheet, Switch, Text, View, TouchableOpacity, SafeAreaView,  } from 'react-native';
import { myColors } from './styles/colors';
import { Fontisto } from '@expo/vector-icons';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();

  return (
    <SafeAreaView style={styles.containers} className="flex-1 dark:bg-neutral-900 ">
      <StatusBar animated={true} style={colorScheme=='dark'? 'light': 'dark'} />

      <View style={styles.container}>
        <View style={styles.top} >
          <Text style={styles.textTitle} className="dark:text-white">
            SECCTION TOP
          </Text>
          <Text style={styles.textContent}  className="dark:text-white">
            Activalo con un toque y disfruta de una experiencia visual más comoda en entornos de poca luz
          </Text>
          
        </View>
          
        <View style={styles.middle} >
          <View style={{ flexDirection: 'row', padding: 0,}}>
            <View style={{ flex: 1.8}} className="flex-row items-center ">
              <Text className="dark:text-white">Modo Oscuro</Text>
            </View>
            <View style={{ flex: 0.4}} className="flex-row items-center ">
              <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} />
            </View>
          </View>

          <View>
            <Text style={styles.textTitle} className="dark:text-white">
              SECCTION MIDDLE 
            </Text>
            <Text style={styles.textContent} className="dark:text-white">
              TEXT SECCTION MIDDLE
            </Text>
            <TouchableOpacity style={styles.button} >
            <Text className="dark:text-white">Button Middle</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottom} > 
          
          <Fontisto name="react" size={20} color="black" style={{textAlign: 'center'}}/>
          <Text  className="dark:text-white" style={{textAlign: 'center'}}>
            SECCTION BOTTOM
          </Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  top: {
    flex: 0.2,
    backgroundColor: 'grey',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  middle: {
    flex: 0.7,
  },
  bottom: {
    flex: 0.06,
    backgroundColor: 'grey',
  },
  containers: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 16,
  },
  textTitle: {
    marginTop: 30,
    fontSize: 20, 
    textAlign: 'center', 
    fontWeight: 'bold',
    color: myColors.mustard,
    padding: 10,
  },
  textContent: {
    fontSize: 16, 
    textAlign: 'center', 
    //color: myColors.black,
    //padding: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: myColors.mustard,
    padding: 10,
    marginTop: 10,
    borderRadius:10,
    elevation: 5,
  },
});
