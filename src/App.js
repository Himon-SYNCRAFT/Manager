import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'


const firebaseConfig = {
    apiKey: 'AIzaSyA5xMdnHirRXMAUoZChQVvXOvFDxk_oy6I',
    authDomain: 'manager-1c4ec.firebaseapp.com',
    databaseURL: 'https://manager-1c4ec.firebaseio.com',
    projectId: 'manager-1c4ec',
    storageBucket: '',
    messagingSenderId: '155073388798',
}

function configureStore() {
    const store = createStore(reducers)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

class App extends React.Component {
    componentWillMount() {
        firebase.initializeApp(firebaseConfig)
    }

    render() {
        return (
            <Provider store={configureStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        )
    }
}

export default App
