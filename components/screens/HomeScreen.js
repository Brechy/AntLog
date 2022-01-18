import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import AntRace from './AntRace';

const HomeScreen = (app, { }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome to the Ant Farm. Find out who is racing today by clicking the button below.
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    app.populateAnts();
                    app.goto(AntRace);
                }}>
                <Text style={styles.text}>Get Ants</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Cochin',
        padding: 10,
        margin: 5,
    },
    button: {
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderRadius: 4,
        backgroundColor: "orange",
        alignItems: 'center',
        marginHorizontal: "2%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center"
    },
    button_text: {
        fontSize: 20,
        fontFamily: 'Cochin'
    }
});

export default HomeScreen;