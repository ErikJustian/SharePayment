import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, Box, HStack, VStack, Pressable, Image, Button, Center, Modal, FormControl, Input, Icon, FlatList, Heading, Avatar, Spacer, NumberInput } from 'native-base';
import { RootTabScreenProps } from '../types';
import React, { useState } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

const blankItem = {
  name: '',
  price: 0,
  qty: 0,
  id: '',
};

const initialList:Array<any> = []

let handleChange = (type: string, text: string, index: number, formValues: any, setFormValues: any) => {
  const newFormvalues = [...formValues];
  var newValue:number|string = type === 'name' ? text : parseInt(text);
  if(type !== 'name') {
    if(isNaN(newValue)) {
      newValue = 0
    }    
  }
  newFormvalues[index][type] = newValue;
  setFormValues(newFormvalues);
}

let removeFormFields = (i:any, formValues: any, setFormValues: any) => {
  let newFormValues = [...formValues];
  newFormValues.splice(i, 1);
  setFormValues(newFormValues)
}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [formValues, setFormValues] = useState(initialList);
  const [total, setTotal] = useState(0);
  console.log(formValues);
  return (
    <VStack>
      <Box>
        <FlatList data={formValues} renderItem={({
          item, index
        }) =>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "gray.600"
          }} borderColor="coolGray.200" pl="4" pr="5" py="2">
            <HStack space={3} justifyContent="space-between">
              <VStack space={1} justifyContent="space-between">
                <Input value={item.name} onChangeText={(text) => handleChange('name', text, index, formValues, setFormValues)}></Input>
                <HStack space={3} justifyContent="space-between">
                  <Input value={item.qty.toString()} onChangeText={(text) => handleChange('qty', text, index, formValues, setFormValues)}></Input>
                  <Spacer /><Text> X </Text>
                  <Input value={item.price.toString()} onChangeText={(text) => handleChange('price', text, index, formValues, setFormValues)}></Input>

                  <Spacer />
                </HStack>
                <Spacer />
                <Text _dark={{
                color: "warmGray.50"
              }} color="coolGray.800" alignSelf="flex-start" bold>
                Subtotal: {item.qty*item.price}
              </Text>
              </VStack>
              <Icon as={FontAwesome} onPress={() => {
                removeFormFields(index, formValues, setFormValues);
              }} name="close" />
            </HStack>
          </Box>} keyExtractor={item => item.id} />
      </Box>
      <HStack justifyContent="center">
        <Button leftIcon={<Icon as={Ionicons} name="add-circle" />} onPress={() => {
          var addedItem:any = {
            name: '',
            price: 0,
            qty: 0,
            id: uuid.v4(),
          };
          var newFormValues:any = [...formValues, addedItem];
          setFormValues(newFormValues);
          }}> Add Menu</Button>
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
