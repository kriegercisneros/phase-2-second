import 'vite/modulepreload-polyfill'
import react from 'react'
import HomePage from "./HomePage"
import PottyPals from "./PottyPals"
import CreateNewPottyEvent from './CreateNewPottyEvent'
import { Route, Switch } from "react-router-dom"
import backImage from '../assets/images/backImage.jpg'
import LoginPage from './LoginPage'

function App() {
    return(
        <div style={{backgroundImage:`url(${backImage})`, backgroundSize:'cover', webkitBackgroundSize:'cover', width:'100vw', height:'100vh', fontFamily:'Gloria Hallelujah', backgroundRepeat:'repeat'}}>
        <Switch>
            <Route path="/home">
                <HomePage />
            </Route>
            <Route path="/login">
                <LoginPage/>
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