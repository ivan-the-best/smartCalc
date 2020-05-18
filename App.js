import React, { useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { Container, Header, Content, Item } from 'native-base';

function updateMatrix(_m, _n) {
    if (_n == null && _m !== null)
        this.setState({ m: _m });
    if (_m == null && _n !== null)
        this.setState({ n: _n });
}




class Matrix extends React.Component {
    constructor(props) {
        super(props);
        this.state = { m: props.m, n: props.n };
        updateMatrix = updateMatrix.bind(this)
    }

    componentDidMount() {
        //this.setState({m: 4, n:5});
    }

    componentWillUnmount() {

    }

    render() {
        const matrix = [];
        for (let i = 0; i < this.state.m; i++) {
            const el = [];
            for (let j = 0; j < this.state.n; j++) {
                el.push(
                    <MatrixCell
                        key={[i, j]}
                        id={[i, j]}
                    />
                )
            }
            matrix.push(
                <View
                    style={{ width: "10%", flexDirection: "column" }}
                    key={i}
                >
                    {el}
                </View>
            )
        }
        //console.log(matrix);
        return (
            <View style={{ flexDirection: "row" }}>
                {matrix}
            </View>
        )
    }
}

class MatrixCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        console.log(this.props.id);
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <TextInput style={{}}
                onChangeText={value => this.setState({ value: value })}
                value={this.state.value.toString()}
            />
        )
    }
}

class MatrixInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueM: props.defaultValueM,
            valueN: props.defaultValueN
        };
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    handleChangeM(_value) {
        this.setState({ valueM: _value });
        updateMatrix(_value, null);
    }
    handleChangeN(_value) {
        this.setState({ valueN: _value });
        updateMatrix(null, _value);
    }

    render() {
        return (
            <View style={{ flexDirection: "row", width: "10%" }} >
                <View style={{ /*backgroundColor: "blue",*/ flex: 0.5 }}>
                    <TextInput
                        style={{ width: '100%', margin: '5%', backgroundColor: '#FB8617' }}
                        placeholder={this.props.placeholderM}
                        onChangeText={value => this.handleChangeM(value)}
                        value={this.state.valueM}
                    />
                </View>
                <View style={{ /*backgroundColor: "red",*/ flex: 0.5 }}>
                    <TextInput
                        style={{ width: '100%', margin: '5%', backgroundColor: '#E54493' }}
                        placeholder={this.props.placeholderN}
                        onChangeText={value => this.handleChangeN(value)}
                        value={this.state.valueN}
                    />
                </View>
            </View>

        )
    }
}

class MatrixButtons extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: "row", width: "40%" }}>
                <View style={{ flex: 0.2, margin: "0.5%" }}><Button title="+" color='#014A11' /></View>
                <View style={{ flex: 0.2, margin: "0.5%" }}><Button title="-" color='#385A01'/></View>  
                <View style={{ flex: 0.2, margin: "0.5%" }}><Button title="*" color='#97E815' /></View> 
                <View style={{ flex: 0.2, margin: "0.5%" }}><Button title="/" color='#ACED43' /></View>
            </View>
        )
    }
}


export default function App() {
    return (
        <Container style={{ backgroundColor:"#11BE37" }} >
            <Content>
                <Item style={{ backgroundColor: '#884404', height: '20%' }}>
                    <Text />
                </Item>
                <Item>
                    <MatrixInput defaultValueN="3" defaultValueM="3" />
                </Item>
                <Item>
                    <Matrix m={3} n={3} />
                </Item>
                <Item>
                    <Text>Choose action:</Text>
                </Item>
                <Item>
                    <MatrixButtons />
                </Item>
                <Item> 
                    <Text> В телефоне без этого не помещается </Text>  
                </Item>
            </Content>
        </Container>
    )
}
