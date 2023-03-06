import 'vite/modulepreload-polyfill'
import react from 'react'
import HomePage from "./HomePage"
import PottyPals from "./PottyPals"
import CreateNewPottyEvent from './CreateNewPottyEvent'
import { Route, Switch } from "react-router-dom"

function App() {
    return(
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
    )
  }
  export default App  