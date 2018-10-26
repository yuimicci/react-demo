import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// import { Router,Route,Switch } from 'react-router-dom';
// import history from './history';
import asyncComponent from './utils/asyncComponent';//异步加载组建，不用每次从头加载，按需加载

import home from "./components/home"
const detail = asyncComponent(()=>import("./components/detail.js"))
// 按需加载第二种
const ceshi = asyncComponent(()=>import("./components/ceshi.jsx"))
// const ceshi = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('./components/ceshi.jsx').default)
//     },'saleRecord')
// }

class RouteConfig extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/detail" exact component={detail} />
                    <Route path="/ceshi" exact component={ceshi} />
                    {/* <Route path="/ceshi" exact getComponent={ceshi} /> */}
                </Switch>
            </HashRouter>
            // <Router history={history}>
            //         <Switch>
            //             <Route path="/" exact component={home} />
            //             <Route path="/detail" exact component={detail} />
            //         </Switch>
            // </Router>
        )
    }
}
export default RouteConfig