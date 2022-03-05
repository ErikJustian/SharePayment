import {RootTabScreenProps} from "../types";
import {Text, View} from "../components/Themed";
import {StyleSheet, TextInput} from "react-native";
import {Box, HStack, Input} from "native-base";

export default function AddUserScreen({navigation}: RootTabScreenProps<'TabFour'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.appName}>Pilih Teman</Text>
            <HStack>
                <Input placeholder="Masukkan nama teman...." flex={1}/>s
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