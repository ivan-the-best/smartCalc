import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { matrixScreen } from './screens/matrixScreen';



function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>What should we do?</Text>
            <Button
                title="Matrix"
                onPress={() => navigation.navigate('Matrix')}
            />
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Matrix" component={matrixScreen} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

<Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{ title: 'Overview' }}
/>


