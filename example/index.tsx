import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {MercureProvider} from '../.';
import Subscribed from './Subscribed'

const App = () => {
    return (
        <div>
            <MercureProvider options={{hubUrl: 'http://localhost:3000/.well-known/mercure'}}>
                <Subscribed/>
            </MercureProvider>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
