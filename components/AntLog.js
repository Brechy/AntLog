import { View, ScrollView, StyleSheet } from 'react-native';
import Ant from './Ant';

const AntLog = ({ app, ants, raceRunning }) => {
   let sortedAnts = [...ants].sort((a, b) => {
      if (a.likelihoodOfAntWinning === b.likelihoodOfAntWinning) {
         if (a.name > b.name) {
            return 1;
         } else if (a.name === b.name) {
            return 0;
         } else {
            return -1;
         }
      } else {
         return b.likelihoodOfAntWinning - a.likelihoodOfAntWinning;
      }
   });

   return (
      <ScrollView contentContainerStyle={styles.container}>
         <View style={{ margin: 15 }}>
            {sortedAnts.map((e) => Ant({ ...e, app, raceRunning }))}
         </View>
      </ScrollView>
   )
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      borderRadius: 9,
   },
});

export default AntLog;