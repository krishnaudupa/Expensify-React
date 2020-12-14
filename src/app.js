import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore'
import './styles/style.scss'
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore()

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'))