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
            for (let j = 0; j < this.state.n; j++) {
                matrix.push(
                    <TextInput
                        style={{ width: '15%', marginLeft: '15%', paddingLeft: '5%', borderWidth: 1 }}
                        placeholder={i.toString()}
                        defaultValue=''
                        key={{ i }.toString(), { j }.toString()}
                    />
                )
            }
            //matrix.push(
            //    <View />
            //)
        }
        return (
            <View>
                {matrix}  
            </View>
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
            <View >
                <TextInput
                    style={{ width: '50%',margin:'7%', backgroundColor: '#D8D8D8' }}
                    placeholder={this.props.placeholderM}
                    onChangeText={value => this.handleChangeM(value)}
                    //defaultValue={this.props.defaultValueM}
                    value={this.state.valueM}
                />
                <TextInput
                    style={{ width: '50%', margin: '7%', backgroundColor: '#D8D8D8' }}
                    placeholder={this.props.placeholderN}
                    onChangeText={value => this.handleChangeN(value)}
                    //defaultValue={this.props.defaultValueN}
                    value={this.state.valueN}
                />
                
            </View>
        )
    }
}

export default function App() {
    return (
        <Container >
            <Content>
                <Item style={{ backgroundColor: '#1a1aff', height: '10%'}}>
                    <Text />
                </Item>

                

                <Item>
                    <MatrixInput defaultValueN="3" defaultValueM="3" />
                </Item>
                <Item>
                    <Matrix m={3} n={3} />
                </Item>
            </Content>
        </Container>
    )
}

