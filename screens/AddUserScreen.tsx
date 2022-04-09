import * as React from "react";
import {GestureResponderEvent, StyleSheet, TextInput} from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
    AspectRatio,
    Box,
    Button, Center,
    Container,
    FlatList,
    Heading,
    HStack,
    Icon,
    IconButton,
    Input, Stack,
    Text,
    View
} from "native-base";
import {RootStackParamList} from "../types";
import {Entypo, FontAwesome5} from "@expo/vector-icons";
import {useCallback, useState} from "react";

type Props = NativeStackScreenProps<RootStackParamList, 'AddUser'>;

interface Friend {
    id: string;
    name: string;
    phoneNumber: string;
}

interface FriendListViewProps {
    friendList: Friend[],
}

// const friendsList: Friend[] = [
//     {
//         id: 1,
//         name: "Wilson Nicholas",
//         phoneNumber: "0895626568587",
//     },
//     {
//         id: 2,
//         name: "Erik Justian",
//         phoneNumber: "081362221023",
//     },
// ];

export default function AddUserScreen({route, navigation}: Props) {
    let initialFriendList: Friend[] = [];

    const [friendList, setFriendList] = useState(initialFriendList);
    const [text, setText] = useState('');

    const handleAddClick = (e: GestureResponderEvent) => {
        const tempList: Friend[] = [...friendList];
        tempList.push({
            id: generateString(26),
            name: text,
            phoneNumber: '-',
        });

        setFriendList(tempList);
    }

    const handleRemoveItem = (e: GestureResponderEvent, item: Friend) => {
        const tempList: Friend[] = [...friendList];

        const index = tempList.findIndex(function (o) {
            return o.id === item.id;
        });

        if (index !== -1) tempList.splice(index, 1);

        setFriendList(tempList);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>Pilih Teman</Text>
            <HStack mt="4">
                <Input placeholder="Masukkan nama teman...." flex={5} marginRight={4}
                       onChangeText={newText => setText(newText)}/>
                <Button onPress={(e) => handleAddClick(e)}>Add</Button>
                <IconButton icon={<Icon as={FontAwesome5} name="address-book"/>}/>
            </HStack>

            <FriendsListView friendList={friendList} handleRemoveItem={handleRemoveItem}/>
            {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>*/}
        </View>
    );
}

function FriendsListView(props: {friendList: Friend[], handleRemoveItem : Function}): JSX.Element {
    return (
        <FlatList
            data={props.friendList}
            renderItem={
                ({item, index}) => <FriendListItem item={item} handleRemove={props.handleRemoveItem}/>
            }
            pt={2} pb={2}
        />
    );
}

function FriendListItem(props: { item: Friend, handleRemove: Function }): JSX.Element {
    return (
        <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }} mt={1}>
            <Heading size="md" mt={4} mb={2} ml={4} mr={4}>
                {props.item.name}
            </Heading>
            <HStack mt={2} mb={4} ml={4} mr={4}>
                <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }} fontWeight="400">
                    Phone Number :
                </Text>
                <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }} fontWeight="400" ml={2}>
                    {props.item.phoneNumber}
                </Text>
            </HStack>
            <Button colorScheme="secondary"
                    onPress={(e) => props.handleRemove(e, props.item)}>
                Remove
            </Button>
        </Box>
    );
}

// declare all characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length: number): string {
    let result = ' ';
    const charactersLength: number = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
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
