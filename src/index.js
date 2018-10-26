import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Router from "./route.js"
import { AppContainer } from 'react-hot-loader';
// import { Router,Route} from 'react-router-dom';
// import history from './history';
// ReactDOM.render(<App />, document.getElementById('root'));
const render = Component => {
    ReactDOM.render(
            <AppContainer>
                {/* <Router history={history}> */}
                    <Component />
                {/* </Router> */}
            </AppContainer>,
        document.getElementById("root"));
    }
     
    render(Router);

    
if (module.hot) {
    module.hot.accept('./route', () => {
        render(Router);
    })
}
 
// ReactDOM.render(<Router />,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
