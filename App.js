import React from 'react';
import HomeScreen from './components/screens/HomeScreen';

async function getAnts() {
   let response = await fetch('https://sg-ants-server.herokuapp.com/ants');
   let data_raw = await response.json()
   let data = data_raw.ants.map(e => {
      e.key = e.name;
      e.likelihoodOfAntWinning = -1;
      return e;
   });
   return data;
}

function generateAntWinLikelihoodCalculator() {
   const delay = 7000 + Math.random() * 7000;
   const likelihoodOfAntWinning = Math.random();

   return (callback) => {
      setTimeout(() => {
         callback(likelihoodOfAntWinning);
      }, delay);
   };
}

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         currentView: HomeScreen,
         ants: [],
         raceRunning: false,
      };
   }

   render() {
      return this.state.currentView(this, this.state);
   }

   // state mutation callbacks
   goto(newView) {
      this.setState({ currentView: newView });
   }

   async populateAnts() {
      this.setState({ ants: [] });
      this.setState({ ants: await getAnts() });
   }

   async runRace() {
      let newAnts = this.state.ants.map((ant) => {
         ant.likelihoodOfAntWinning = -1;
         return ant;
      });
      this.setState({
         ants: newAnts,
         raceRunning: true
      });
      this.state.ants.forEach(({ name }) => {
         let antWinLikelihoodCalulator = generateAntWinLikelihoodCalculator();
         antWinLikelihoodCalulator((likelihoodOfAntWinning) => {
            let antsRunning = 0;
            let ants = this.state.ants.map((ant) => {
               if (ant.name === name) {
                  ant.likelihoodOfAntWinning = likelihoodOfAntWinning
               }
               if (ant.likelihoodOfAntWinning < 0) {
                  antsRunning += 1;
               }
               return ant;
            })
            const isRaceStillRunning = () => {
               if (antsRunning > 0) {
                  return true;
               }
               return false;
            }
            this.setState({ ants, raceRunning: isRaceStillRunning() })
         });
      })
   }
}


export default App;