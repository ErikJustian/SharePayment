import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, FlatList, HStack, Icon, IconButton, Input, Text, View } from "native-base";
import { RootStackParamList } from "../types";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, 'AddUser'>;

interface Friend {
    id: number;
    name: string;
    phoneNumber: string;
}

interface FriendListViewProps {
    friendList: Friend[],
}

const friendsList: Friend[] = [
    {
        id: 1,
        name: "Wilson Nicholas",
        phoneNumber: "0895626568587",
    },
    {
        id: 2,
        name: "Erik Justian",
        phoneNumber: "081362221023",
    },
];

export default function AddUserScreen({ route, navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.appName}>Pilih Teman</Text>
            <HStack mt="4">
                <Input placeholder="Masukkan nama teman...." flex={5} marginRight={4} />
                <IconButton icon={<Icon as={FontAwesome5} name="address-book" />} />
            </HStack>

            <FriendsListView friendList={friendsList} />
            {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>*/}
        </View>
    );
}

function FriendsListView({ friendList }: FriendListViewProps): JSX.Element {
    return (
        <FlatList data={friendList}
            renderItem={
                ({ item, index }) => <FriendListItem item={item} />
            }
        />
    );
}

function FriendListItem(props: { item: Friend; }): JSX.Element {
    console.log('Friend List Item');
    return (<Text>{props.item.name}</Text>);
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
