import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from "../types";
import {Text} from "react-native";
import {Box, Button} from "native-base";

type Props = NativeStackScreenProps<RootStackParamList, 'Subtotal'>;

export default function SubtotalScreen({route, navigation}: Props) {
    return (<Button size="lg">
        Default Small
    </Button>);
};