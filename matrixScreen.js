//import * as React from 'react';
import React, { Component, useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Container, Header, Content, Input, Item } from 'native-base';


/*export function matrixScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="+,-,*,/"
                //onPress={}
            />
        </View>
    );
}*/

let arr1W = '20';
let arr1H = '';
let arr2W = '';
let arr2H = '';
let arr1 = [];
let arr2 = [];


export class matrixScreen extends Component {

    render() {
        
        return (
            <Container>
                <Content>
                    <Text>Matrix size(1)(a x b)</Text>
                    <Item style={{ width: '20%', backgroundColor: 'orange' }}>
                        <TextInput keyboardType='numeric' placeholder='a' onChangeText={text => {arr1W}} />
                    </Item>
                    <Item style={{ width: '20%', backgroundColor: 'grey' }}>
                        <TextInput placeholder={arr1W} />
                    </Item>

                    <Item style={{ width: '20%', backgroundColor: 'orange' }}>
                        <TextInput keyboardType='numeric' placeholder='b' />
                    </Item>

                    <Text>Matrix size(2)(a x b)</Text>
                    <Item style={{ width: '20%', backgroundColor: 'orange' }}>
                        <TextInput keyboardType='numeric' placeholder='a' />
                    </Item>
                    <Item style={{ width: '20%', backgroundColor: 'orange' }}>
                        <TextInput keyboardType='numeric' placeholder='b' />
                    </Item>

                    

                    <Button title="+,-,*,/"></Button>
                    
                </Content>
            </Container>
        );
    }
}
