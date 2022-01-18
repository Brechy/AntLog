import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import AntLog from '../AntLog';
import HomeScreen from './HomeScreen';

const AntRace = (app, { ants, raceRunning }) => {
    const hasRaceStartedOrFinished = () => {
        // if the race is running, return true
        if (raceRunning) return true;
        // if there are any ants with a calculated likelihood of winning, return true
        for (let i = 0; i < ants.length; i++) {
            if (ants[i].likelihoodOfAntWinning >= 0) {
                return true;
            }
        }
        // otherwise, return false
        return false;
    }

    const generateRaceStatusIndicator = () => {
        if (raceRunning) {
            // if the race is running, indicate race in progress
            return <View style={styles.progress_container}><Text style={styles.progress_text}>Race in progress...</Text></View>
        } else {
            if (hasRaceStartedOrFinished()) {
                // otherwise, if the race has started and isn't running
                // anymore, indicate that it's finished
                return <Text style={styles.progress_text}>Race complete!</Text>
            } else {
                // and if neither are true, the race hasn't run at all.
                return <Text style={styles.progress_text}>Race not yet run.</Text>
            }
        }
    }

    const generateRaceStartButton = () => {
        return (
            <TouchableOpacity
                style={[styles.button, { flex: 2 }]}
                onPress={() => app.runRace()}
                disabled={raceRunning}
            >
                <Text style={styles.button_text}>Race Start</Text>
            </TouchableOpacity>
        );
    }

    if (ants.length > 0) {
        return (
            <View style={styles.container}>
                <View style={[styles.container, { backgroundColor: 'white', flex: 3 }]} />
                <View style={[styles.container, { backgroundColor: 'white', flex: 1 }]}>
                    {generateRaceStatusIndicator()}
                </View>
                <TouchableOpacity style={[styles.button, { flex: 2 }]}>
                    {generateRaceStartButton()}
                </TouchableOpacity>
                <View style={[styles.container, { backgroundColor: 'white', flex: 20 }]}>
                    <AntLog app={app} ants={ants} raceRunning={raceRunning}></AntLog>
                </View>
                <View style={[styles.container, { backgroundColor: 'white', flex: 1 }]} />
            </View>
        )
    }
    return (
        <View style={styles.splash}>
            <Text style={[styles.text, { margin: 10 }]}>Loading Ants...</Text>
            <TouchableOpacity style={styles.button} onPress={() => { app.goto(HomeScreen) }}><Text style={styles.button_text}>Cancel</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        fontSize: 24

    },
    button: {
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderRadius: 9,
        backgroundColor: "orange",
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: "1%",
        marginBottom: 4,
        minWidth: "48%",
        textAlign: "center",
        fontSize: 24,
    },
    button_text: {
        fontSize: 20,
        fontFamily: 'Cochin'
    },
    text: {
        color: "black",
        fontSize: 20,
        fontFamily: "Cochin"
    },
    progress_container: {
        marginBottom: 5
    },
    progress_text: {
        color: "black",
        fontSize: 24,
        fontFamily: "Cochin",
    },
});

export default AntRace;