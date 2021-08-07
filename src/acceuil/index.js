import React from 'react'
//import des composants
import Home from './home';
import NouvelleTache from '../newTache/index';
import TachesManques from '../manques/index';
import MesTaches from '../lesTaches/index';
import TachesEffectues from '../effectues/index';

//import des elements du routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import du navbar
import Navbar from './navbar';

//import du footer
import Footer from './footer';

const index = () => {
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/newtache">
                    <NouvelleTache></NouvelleTache>
                </Route>
                <Route exact path="/tachesmanques">
                    <TachesManques></TachesManques>

                </Route>
                <Route exact path="/mestaches">
                    <MesTaches></MesTaches>
                </Route>
                <Route exact path="/TachesEffectues">
                    <TachesEffectues></TachesEffectues>
                </Route>
                <Route path="*">
                    <Home></Home>
                </Route>

            </Switch>
            <Footer></Footer>

        </Router>
    )
}

export default index
