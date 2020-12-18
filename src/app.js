import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import { firebase } from './firebase/firebase'
import { history } from './routers/AppRouter'
import './styles/style.scss'
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore()

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'))
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses())
        history.push('/dashboard')
    }
    else{
        store.dispatch(logout())
        history.push('/')
    }
})