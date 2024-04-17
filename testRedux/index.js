//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Values from '../src/Components/test/value';
import Button from '../src/Components/test/buttons';

// create a component
const Index = () => {

    const [value, setValue] = useState(0)
    return (
        <View style={styles.container}>
            <Values valueToShow={value} />
            <Button setEditValue={setValue} v={value} />
        </View>
    );
};

// define your styles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Index;
