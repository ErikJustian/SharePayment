import * as React from 'react';

import {StatusBar} from 'expo-status-bar';
import {NativeBaseProvider} from 'native-base';
//
// import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from "./types";
import SubtotalScreen from "./screens/SubtotalScreen";
import {StyleSheet, Text, View} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddUserScreen from "./screens/AddUserScreen";

// export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();
//
//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <NativeBaseProvider>
//         <SafeAreaProvider>
//           <Navigation colorScheme={colorScheme} />
//           <StatusBar />
//         </SafeAreaProvider>
//       </NativeBaseProvider>
//
//     );
//   }
// }

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <SafeAreaProvider>
        <NativeBaseProvider>
            <View style={{flex: 1}}>
                <NavigationContainer>
                    <RootStack.Navigator initialRouteName="AddUser">
                        <RootStack.Screen name="Subtotal" component={SubtotalScreen}/>
                        <RootStack.Screen name="AddUser" component={AddUserScreen}/>
                    </RootStack.Navigator>
                </NavigationContainer>
                <StatusBar style="auto"/>
            </View>
        </NativeBaseProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
