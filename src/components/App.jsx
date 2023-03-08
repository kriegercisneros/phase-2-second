import 'vite/modulepreload-polyfill'
import react from 'react'
import HomePage from "./HomePage"
import PottyPals from "./PottyPals"
import CreateNewPottyEvent from './CreateNewPottyEvent'
import { Route, Switch } from "react-router-dom"
import backImage from '../assets/images/backImage.jpg'

function App() {
    return(
        <div style={{backgroundImage:`url(${backImage})`, 'background-size':'cover', width:'100vw', height:'100vh'}}>
        <Switch>
            <Route exact path="/home">
                <HomePage />
            </Route>
            <Route path="/newevent/:id">
                <CreateNewPottyEvent />
            </Route>
            <Route path="/:id">
                <PottyPals />
            </Route>
        </Switch>
        </div>
    )
  }
  export default App  