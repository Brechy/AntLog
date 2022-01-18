import { Text, View, StyleSheet } from 'react-native';

const Ant = ({ app, name, length, color, weight, likelihoodOfAntWinning, raceRunning }) => {
    const antWinFormattedPercentage = () => {
        return `${Math.round(likelihoodOfAntWinning * 1000) / 10}%`;
    }
    const antStatus = () => {
        if (likelihoodOfAntWinning < 0) {
            if (raceRunning) {
                return <Text style={styles.antInfo}>Running race...</Text>
            } else {
                return <Text style={styles.antInfo}>Not yet run</Text>
            }
        } else {
            return <Text style={styles.antInfo}>Chance of Winning: {antWinFormattedPercentage()}</Text>
        }
    }
    return (
        <View style={styles.antContainer}>
            <Text style={styles.antName}>{name}</Text>
            <Text style={styles.antInfo}>Length: {length}</Text>
            <Text style={styles.antInfo}>Color: {color}</Text>
            <Text style={styles.antInfo}>Weight: {weight}</Text>
            {antStatus()}
        </View>

    )
}

const styles = StyleSheet.create({
    antContainer: {
        backgroundColor: '#8C34FF',
        width: 300,
        padding: 8,
        margin: 4,
        marginBottom: 8,
        borderRadius: 9,
    },
    antName: {
        color: "white",
        fontSize: 20,
        fontFamily: "Cochin"
    },
    antInfo: {
        color: "black",
        fontSize: 16,
        fontFamily: "Cochin"
    }
});

export default Ant;