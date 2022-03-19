import * as React from "react";
import {Text, View} from "../components/Themed";
import {StyleSheet, TextInput} from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, HStack, Input} from "native-base";
import {RootStackParamList} from "../types";

type Props = NativeStackScreenProps<RootStackParamList, 'AddUser'>;

export default function AddUserScreen({route, navigation}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.appName}>Pilih Teman</Text>
            <HStack mt="4">
                <Input placeholder="Masukkan nama teman...." flex={5}/>
                <Input placeholder="Masukkan nama teman...." flex={1}/>
            </HStack>
            {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    appName: {
        fontSize: 20,
    },
    // title: {
    //     fontSize: 20,
    //     fontWeight: 'bold',
    // },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    input: {
        borderBottomWidth: 1,
        padding: 10,
    }
});